<template>
<div :class="$style.root">
    <div :class="$style.btn" @click="tkShare">分享</div>
</div>
</template>

<script>
require('./isales.min.js');
export default {
    name: 'lcap-h5-tk-sfriends',
    props: {
        value: {
            type: [String, Object],
        },
        secret: {
            type: String,
            default: '',
        },
        shareUrl: {
            type: String,
            default: '',
        },
        shareTitle: {
            type: String,
            default: '',
        },
        shareBitmap: {
            type: String,
            default: '',
        },
        shareIntroduce: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            msg: '',
        };
    },
    watch: {
        msg(val) {
            this.$emit('update:value', val);
        },
    },
    methods: {
        loadScript(url) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            document.body.appendChild(script);
        },
        tkShare() {
            return new Promise(((resolve, reject) => {
                // eslint-disable-next-line consistent-this
                const that = this;
                window.ISALES.sharePannel({
                    baseMenu: ['0'], // ['0', '1', '2', '3', '10', '11'],
                    // otherMenu: ['6', '7', '8', '9'],
                    h5BtnShare: true,
                    friends: { // Share with FB friends
                        secret: this.secret || '', // Secret key within 16 characters, letters or numbers, do not use fill-in-the-blank strings
                        shareUrl: this.shareUrl || window.location.href, // Share address
                        shareTitle: this.shareTitle || window.document.title, // Share title,
                        shareBitmap: this.shareBitmap || '', // URL of the shared image. If the image is too large or inaccessible, the sharing will fail.
                        shareIntroduce: this.shareIntroduce || '', // Share introduction
                        callback(res) {
                            console.log('Share with FB friends - callback:::', res);
                            that.msg = JSON.stringify(res);
                            resolve(res);
                        },
                    },
                    trackInfo: {},
                });
            }));
        },
        getMsg() {
            return this.msg;
        },
        invoke() {
            this.tkShare();
        },
    },
};
</script>

<style module>
.root {}
.btn {
    line-height: 50px;
    color: #fff;
    background-color: red;
    text-align: center;
}
</style>
