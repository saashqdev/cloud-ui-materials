<template>
<div :class="{ [$style.root]: true, [$style.border]: !readOnly }" ref="root">
    <toolbar
        ref="toolbar"
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :default-config="toolbarConfig"
        :mode="mode"
        v-show="!readOnly"
    ></toolbar>
    <!-- All pictures under v-viewer can be enlarged -->
    <div v-viewer="{movable: false, zIndex: 8000}">
        <editor
            ref="editor"
            :style="rootStyle"
            :value="currentValue"
            :default-config="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
            @onChange="onChange"
            @onFocus="onFocus"
            @onBlur="onBlur"
        ></editor>
    </div>
</div>
</template>

<script>
import { MField } from 'cloud-ui.kubevue/src/components/m-field.vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';
import 'viewerjs/dist/viewer.css';
import whiteListOption from './whiteListTag';
import Viewer from 'v-viewer';
import Vue from 'vue';
import xss from 'xss';
const myxss = new xss.FilterXSS({ whiteList: whiteListOption });
Vue.use(Viewer);

export default {
    name: 'lcap-wang-editor',
    components: { Editor, Toolbar },
    mixins: [MField],
    props: {
        value: String,
        readOnly: Boolean,
        scroll: { type: Boolean, default: true },
        placeholder: String,
        editorStyle: { type: String, default: '' },
        uploadImgServer: { type: String, default: '' },
    },
    data() {
        const authorization = this.getCookie('authorization');
        const headers = authorization ? { Authorization: authorization } : {};
        return {
            currentValue: '',
            editor: null,
            toolbarConfig: {
                excludeKeys: ['fullScreen', 'codeBlock', 'uploadVideo'],
            },
            editorConfig: {
                readOnly: this.readOnly,
                scroll: this.scroll,
                placeholder: this.placeholder,
                autoFocus: false,
                MENU_CONF: {
                    uploadImage: {
                        server: this.uploadImgServer || '/gateway/lowcode/api/v1/app/upload',
                        fieldName: 'file',
                        maxFileSize: 50 * 1024 * 1024, // 50M
                        // Customize to add http header
                        headers,
                        // Customize inserted pictures
                        customInsert(res, insertFn) {
                            const url = res.result;
                            insertFn(url);
                        },
                    },
                    uploadVideo: {
                        server: this.uploadImgServer || '/gateway/lowcode/api/v1/app/upload',
                        fieldName: 'file',
                        maxFileSize: 1000 * 1024 * 1024, // 1000M
                        // Customize to add http header
                        headers,
                        // Customized video insertion
                        customInsert(res, insertFn) {
                            const url = res.result;
                            insertFn(url);
                        },
                    },
                },
            },
            mode: 'default', // or 'simple',
            defaultHeight: '',
            editorHeight: {
                height: '180px',
                'min-height': null,
            },
        };
    },
    computed: {
        rootStyle() {
            return {
                ...this.editorHeight,
                ...this.parseStyleAttr(this.editorStyle),
            };
        },
    },
    watch: {
        readOnly(val) {
            val ? this.editor.disable() : this.editor.enable();
        },
        value: {
            handler(v) {
                this.currentValue = myxss.process(v);
            },
            immediate: true,
        },
    },
    beforeDestroy() {
        const { editor } = this;
        if (editor === null)
            return;
        //When the component is destroyed, destroy the editor in time
        editor.destroy();
    },
    methods: {
        onCreated(editor) {
            // Be sure to use Object.seal(), otherwise an error will be reported
            this.editor = Object.seal(editor);
            let height = this.$refs.root.style.height;
            setTimeout(() => {
                if (height) {
                    const toolHeight = this.$refs.toolbar.$el.getBoundingClientRect().height;
                    height = this.removePX(height);
                    this.editorHeight.height = height - toolHeight - 2 + 'px';
                    // Some scenes are in the editor. Deleting the height will cause the page to be re-rendered repeatedly, so the height is not deleted in the editor.
                    if (!this.$env.VUE_APP_DESIGNER) {
                        this.$refs.root.style.removeProperty('height');
                    }
                }
                this.defaultHeight = this.editorHeight.height;
                if (!this.scroll) {
                    this.setHeight();
                }
            });
        },
        onChange(editor) {
            // When adding min-height, the container container is smaller than the editor height, and the click event needs to be triggered accurately, resulting in a poor experience. So when the container container is larger than the editor height, add the min-height attribute
            if (!this.scroll) {
                this.setHeight();
            }
            // Do not assign values repeatedly when the content is empty to prevent form error verification
            if (editor.isEmpty() && (!this.currentValue && this.currentValue !== 0))
                return;
            const value = editor.isEmpty() ? '' : editor.getHtml();
            this.currentValue = myxss.process(value);
            this.$emit('change', { value: this.currentValue, editor });
            this.$emit('update:value', this.currentValue);
            this.$emit('input', this.currentValue);
        },
        onFocus(editor) {
            this.$emit('focus', { value: this.currentValue, editor });
        },
        onBlur(editor) {
            this.$emit('blur', { value: this.currentValue, editor });
        },
        getCookie(cname) {
            const name = `${cname}=`;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                const c = ca[i].trim();
                if (c.indexOf(name) === 0)
                    return c.substring(name.length, c.length);
            }
            return '';
        },
        parseStyleAttr(styleStr) {
            const styleObj = styleStr.split(/;/gim).reduce((obj, item) => {
                const arrs = item.trim().split(/:/gim);
                if (arrs.length > 1) {
                    obj[arrs[0].trim()] = arrs[1].trim();
                }
                return obj;
            }, {});

            return styleObj;
        },
        removePX(str) {
            return str.substring(0, str.length - 2);
        },
        setHeight() {
            const textareaNode = this.$refs.editor.$el.querySelector('[data-slate-editor]');
            const currentheight = textareaNode.getBoundingClientRect().height;
            const height = this.editorHeight.height || '';
            if (height && currentheight > this.removePX(height)) {
                this.editorHeight['min-height'] = this.editorHeight.height;
                this.editorHeight.height = null;
            } else if (currentheight <= this.removePX(this.defaultHeight)) {
                this.editorHeight.height = this.defaultHeight;
            }
        },
    },
};
</script>

<style module>
.root {
    z-index: 1000;
}

.border {
    border: 1px solid #ccc;
}
</style>
