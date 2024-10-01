<template>
    <div :class="$style.root" :placement="placement" :type="type">
        <div :class="$style.tipError" v-show="!!errMessage && validationMode==='old'" color="error"><i-icon size="small" name="angle-left" ></i-icon>{{errMessage}}</div>
        <div :class="$style.unitField" @click="onFieldClick" :style="{maxHeight: maxHeight + 'px'}" v-if="!disabled" ref="box" :hasMore="hasMore">
            <!-- There is a search box before the searchInput type-->
            <i-icon name="search" size="small" v-if="type === 'searchInput'" :class="$style.searchIcon"></i-icon>
            <!-- Display the generated items -->
            <div :class="type==='searchInput' ? $style.inputWrapper : ''" ref="wrapper">
                <template v-for="(item, index) in list">
                    <!-- Edit input box-->
                    <u-validator v-if="modifying && current === index" :rules="textRules" ref="modifyValidator" :manual="true" @validate="catchValidation" muted="message" style="vertical-align: bottom">
                        <u-input :disabled="asyncChecking" type="text" v-model="modifyItem" ref="cpModifyInput" @keydown.native="onModifyKeydown" @blur="onModifyBlur" @input="onModifyInput" :class="!!errMessage ? $style.inputError : $style.input">
                        </u-input>
                    </u-validator>
                    <div :class="[$style.unit, current === index ? $style.unitFocus : '']" @click="onFocus(index, $event)"
                         @dblclick="onDBLClick(index, $event)" :title="item">{{item}}
                        <span :class="$style.close" @click="deleteItem(index)">&#215;</span>
                    </div>
                </template>
                <!-- Add new item input box and validator-->
                <u-validator :rules="textRules" ref="textValidator" :manual="true" @validate="catchValidation" muted="message" style="vertical-align: bottom">
                    <u-textarea resize="none" :disabled="asyncChecking" :style="{ height: height + 'px', width: width + 'px' }" :class="[focus ? $style.textareaFocus : $style.textarea, !!errMessage && !modifying ? $style.textareaError : $style.textarea]"
                                ref="cpInput" type="text" @blur="onInputBlur" @focus="onInputFocus" @keydown.native="onKeydown"
                                @input="onAddInput" v-model="item">
                    </u-textarea>
                </u-validator>
            </div>
            <div v-if="hasMore" :class="[$style.unit, $style.hasMore]" :style="{right: morePosRight+'px'}" ref="moreTag">
                <i :class="$style.more"></i>
                <i :class="$style.more"></i>
                <i :class="$style.more"></i>
            </div>
            <!-- Input box type has × button -->
            <span v-if="type==='searchInput' && list && list.length > 0" :class="$style.closeAll" @click="deleteAll">&#215;</span>
    
            <!-- placeholder display -->
            <div v-if="!focus && !list.length && !errMessage && !asyncChecking && !item && !modifyItem" :class="$style.placeholder">{{placeholder}}</div>
            <u-validator :rules="emptyRule" ref="countValidator" @validate="catchValidation" muted="message" :manual="true"></u-validator>
        </div>
        <div v-else :class="$style.unitFieldDisabled" >
            <div :class="$style.placeholder">
                {{placeholder}}
            </div>
        </div>
    </div></template>
    
    <script>
    export default {
        name: 'u-chips',
        props: {
            placeholder: String, // asynchronous validation
            // [{ type: 'async', trigger: 'blur', message: '', validator(rule, value, callback){}]
            // If verification passes, execute callback(); if verification fails, execute callback(new Error())
            rules: [Array, String], // Verification rules for input content
            listRules: [Array, String], // Rules on whether to allow empty, duplicate and maximum number
            disabled: Boolean,
            placement: String, // Display position of old error message
            allowEmpty: { type: Boolean, default: true }, // In the old authentication system, whether to allow empty attributes
            error: String, // Error message for empty value in old verification system
            value: { type: Array, default: () => [] }, // chips array content
            modifyValue: String, // This value needs to be passed to keep error records
            modifyValueIndex: Number,
            type: String, // The cloud server name search type is searchInput
            separators: { type: String, default: 'all' },
        },
        data() {
            return {
                list: this.value,
                item: '',
                modifyItem: '',
                current: -1,
                modifying: false,
                errMessage: '',
                focus: false,
                asyncChecking: false,
                hasMore: false, // type is searchInput, whether the... flag appears
                isFocused: false, // Is the mouse still focused in the search box?
                morePosRight: 0,
            };
        },
        watch: {
            item(value) {
                if (this.validationMode === 'old') this.validate(value);
            },
            modifyItem(value) {
                if (this.validationMode === 'old') this.validate(value);
            },
            /**
             * Triggered when the number of chips changes
             * @param value
             * @param oldValue
             */ list(value, oldValue) {
                this.emptyValidate();
                this.$emit('change', { value, oldValue });
            },
            /**
             * Triggered when the value attribute (array passed in by the parent component) changes
             * @param value
             */ value(value) {
                this.list = value;
            },
            /**
             * Empty check (not used in the new version)
             */ modifying() {
                if (!this.modifying && !this.list.length && !this.allowEmpty)
                    this.errMessage = this.error;
            },
        },
        computed: {
            /**
             * Dynamic style settings
             * @returns {number}
             */ width() {
                const length = this.item.length;
                const width = length * 8.5 + 20;
                if (length <= 15) return 200;
                else return width > 552 ? 552 : width;
            },
            height() {
                const row = Math.ceil(this.item.length / 66) || 1;
                return (row > 6 ? 6 : row) * 26;
            },
            maxHeight() {
                if (this.type === 'searchInput') {
                    if (this.$refs.box && this.$refs.wrapper) {
                        this.$nextTick(() => {
                            if (
                                this.$refs.wrapper.clientHeight >
                                this.$refs.box.clientHeight
                            ) {
                                this.hasMore = true;
                                this.computeMorePositon();
                            } else this.hasMore = false;
                        });
                    }
                    if (this.isFocused) return 150; // Scroll to the top
                    this.$refs.box && (this.$refs.box.scrollTop = -3);
                    return 36;
                } // Maximum height of the input box
                const maxRows = this.list.length / 4 > 6 ? 6 : this.list.length / 4;
                return maxRows * 36;
            },
            /**
             * Synchronous rule filtering (not used in the new version)
             * @returns {Array.<*>}
             */ syncRules() {
                const rules = this.rules || [];
                return typeof this.rules === 'string'
                    ? []
                    : rules.filter((r) => r.type !== 'async');
            },
            /**
             * Asynchronous rule filtering (not used in the new version)
             * @returns {Array.<*>}
             */ asyncRules() {
                const rules = this.rules || [];
                return typeof this.rules === 'string'
                    ? []
                    : rules.filter((r) => r.type === 'async');
            },
            /**
             * Whether there is an asynchronous rule (not used in the new version)
             * @returns {boolean}
             */ async() {
                return this.asyncRules.length > 0;
            },
            /**
             * Here, the rule array of the validator for separate empty validation is judged. When allowEmpty is false, an empty validation rule is added.
             * @returns {Array}
             */ emptyRule() {
                const rules = [];
                if (!this.listRules) {
                    return [];
                }
                if (!this.allowEmpty || this.listRules.indexOf('notEmpty') > -1) {
                    rules.push({
                        required: true,
                        trigger: 'blur',
                        validate: (value, rule, options) => {
                            const errorMsg = this.error
                                ? this.error
                                : 'Fill in at least one';
                            return !this.list.length && !this.item
                                ? errorMsg
                                : true;
                        },
                    });
                }
                return rules;
            },
            textRules() {
                return this.formatListRules();
            },
            /**
             * The rule array of the validator of the textarea and input components is used to unify the rules (convert the old rules into the new rules) through the formatOldRules method
             * @returns {*}
             */ validationMode() {
                if (Array.isArray(this.rules)) {
                    const oldRules = this.rules.filter(
                        (oldRule) =>
                            (oldRule.type === 'is' ||
                                oldRule.type === 'isNot' ||
                                oldRule.type === 'method') &&
                            oldRule.options,
                    );
                    return oldRules.length > 0 ? 'old' : 'new';
                } else if (typeof this.rules === 'string') {
                    return 'new';
                } else {
                    return 'new';
                }
            },
            noSpace() {
                if (this.type === 'searchInput') {
                    return true;
                } else return this.separators === 'comma';
            },
            noComma() {
                if (this.type === 'searchInput') {
                    return true;
                } else return this.separators === 'space';
            },
        },
        created() {
            window.addEventListener('keydown', this.onDocKeydown, false);
            if (this.type === 'searchInput')
                window.addEventListener('mousedown', this.onDocMousedown, false); // Do you need to keep the error message?
            if (this.modifyValue !== undefined) {
                this.modifyItem = this.modifyValue;
                this.current = +this.modifyValueIndex;
                this.modifying = true;
                this.onModifyBlur();
            }
            this.$emit('validMethod', this.submitValidate);
        },
        destroyed() {
            window.removeEventListener('keydown', this.onDocKeydown, false);
            if (this.type === 'searchInput')
                window.removeEventListener('mousedown', this.onDocMousedown, false);
        },
        methods: {
            /**
             * Customize the verification rules for chip quantity correlation and duplicate values   according to list-rules.
             * @returns {Array}
             */ formatListRules() {
                let rules = [];
                if (typeof this.listRules === 'string') {
                    rules = this.listRules.split('|') || [];
                } else {
                    rules = this.listRules || [];
                }
                let newRules = rules.map((rule) => {
                    if (rule.indexOf('noDuplicates') > -1) {
                        return {
                            trigger: 'blur',
                            validate: (value, rule, options) => {
                                if (this.list.indexOf(value) > -1) {
                                    return rule.message
                                        ? rule.message
                                        : 'This input item already exists';
                                }
                            },
                        };
                    } else if (rule.indexOf('maxLength') > -1) {
                        let length = 999;
                        rule.replace(/\d+/g, ($1) => {
                            length = parseInt($1);
                        });
                        return {
                            trigger: 'blur',
                            validate: (value, rule, options) => {
                                if (this.list.length === length && value) {
                                    return rule.message
                                        ? rule.message
                                        : `The input limit of ${length} has been reached`;
                                }
                            },
                        };
                    } else {
                        return false;
                    }
                });
                newRules = newRules.filter((rule) => rule);
                if (typeof this.rules === 'string') {
                    return newRules.length === 0
                        ? this.rules
                        : [this.rules, ...newRules];
                } else if (Array.isArray(this.rules)) {
                    return this.rules.concat(newRules);
                } else {
                    return [...newRules];
                }
            },
            /**
             * new captures all the verification information obtained
             * @param event
             */ catchValidation(event) {
                this.errMessage = event.firstError;
                this.emitValidate(event.value);
            },
            /**
             * Globally monitor mouse click events, only called when type is searchInput
             * @param event
             */ onDocMousedown(event) {
                this.isFocused = this.$refs.box.contains(event.target);
                if (
                    this.$refs.moreTag &&
                    this.$refs.moreTag.contains(event.target)
                ) {
                    // Click more, listening to click event does not work
                    setTimeout(() => this.onFieldClick(), 500);
                }
            },
            /**
             * Global monitoring of keyboard press events
             * @param event
             */ onDocKeydown(event) {
                let { current, list, modifying, modifyItem } = this;
                if (current < 0) return; // tab 键
                if (event.which === 9) {
                    event.preventDefault();
                    if (modifying)
                        this.generate(modifyItem, true, 'modifyValidator');
                    else if (current === list.length - 1)
                        this.$refs.cpInput.focus();
                    else this.onFocus(current + 1);
                } // enter key
                // There is no current check here because the function has already checked it at the beginning
                /**
                 * Listen for the enter key. If it is the last item, it triggers the activation of the textarea (because in this version, the special input of the last item is cancelled), otherwise it activates the corresponding input
                 */ if (event.which === 13) {
                    event.preventDefault();
                    if (this.errMessage) return;
                    this.modifying = true;
                    if (current === list.length - 1) {
                        this.item = list.splice(current, 1)[0];
                        this.$nextTick(() => {
                            this.$refs.cpInput.focus();
                        });
                    } else {
                        this.modifyItem = list.splice(current, 1)[0];
                        this.$nextTick(() => {
                            this.getCpModifyInput().focus();
                        });
                    }
                } // Keyboard right key
                if (event.which === 39) {
                    // Generate item out of focus, edit input box focus
                    if (current === list.length - 1) {
                        current = -1;
                        this.$refs.cpInput.focus(); // Switch the focus of the generated item to the right
                    } else this.onFocus(current + 1);
                } // Left keyboard key
                if (event.which === 37) {
                    // Left border, no longer move left to generate item focus
                    if (current === 0) return; // Switch the focus of the generated item to the left
                    this.onFocus(current - 1);
                } // backspace(win) == deleteItem(mac)
                if (event.which === 8) {
                    list.splice(current, 1);
                    current = -1;
                    this.$refs.cpInput.focus();
                }
            },
            /**
             * The whole large frame is in focus
             */ onFieldClick(event) {
                event && event.stopPropagation();
                if (this.modifying) this.getCpModifyInput().focus();
                else this.$refs.cpInput.focus();
            },
            /**
             * Added focus event callback for textarea box
             * @param {object} event - wrapper event object
             */ onInputFocus(event) {
                this.current = -1;
                this.modifying = false;
                this.focus = true;
            },
            /**
             * Add blur event callback for new items
             * @param {object} event - wrapper event object
             */ onInputBlur(event) {
                if (this.asyncChecking) return;
                event && event.stopPropagation();
                this.generate(this.item, false, 'textValidator');
                this.focus = false; // if (this.errMessage)
                //     this.$refs.cpInput && this.$refs.cpInput.focus();
            },
            /**
             * Keyboard events for the textarea box of the new item
             * @param {object} event - the wrapper object of the event
             */ onKeydown(event) {
                event.stopPropagation();
                const { list, item } = this;
                this.errMessage = ''; // enter键
                // When there is only one line, the default operation of the enter key is still
                if (
                    event.which === 13 &&
                    this.height === 26 &&
                    this.type !== 'searchInput'
                )
                    event.preventDefault(); // tab 键
                // When the input content is empty, restore the default operation of the tab
                if (event.which === 9 && item !== '') {
                    event.preventDefault();
                    this.generate(item, false, 'textValidator');
                    this.$refs.cpInput.focus();
                } // Spacebar generates the Enter key
                if (
                    (event.which === 32 && !this.noSpace) ||
                    (event.which === 188 && !this.noComma) ||
                    (this.type === 'searchInput' && event.which === 13)
                ) {
                    // Generate items (meet relevant requirements)
                    event.preventDefault();
                    if (
                        this.$refs.cpInput.$refs.input === document.activeElement &&
                        item
                    ) {
                        this.generate(item, false, 'textValidator');
                    }
                } // Left key || backspace switches focus item
                // If there is no content in the current input box, focus on the latest generated item
                // item == false && item !== '0', indicating that item is an empty string or a string consisting of spaces
                if (
                    (event.which === 37 || event.which === 8) &&
                    item === '' &&
                    item !== '0'
                ) {
                    this.item = '';
                    this.onFocus(list.length - 1);
                }
            },
            /**
             * One-time paste processing entry for strings connected by spaces + manually triggering input type verification events
             */ onAddInput() {
                if (
                    (!this.item.endsWith(' ') &&
                        this.item.includes(' ') &&
                        !this.noSpace) ||
                    (!this.item.endsWith(',') &&
                        this.item.includes(',') &&
                        !this.noComma)
                ) {
                    this.generate(this.item, false, 'textValidator');
                    this.$refs.cpInput.focus();
                } else {
                    this.$refs.textValidator.value = this.item;
                    this.$refs.textValidator.validate('input');
                }
            },
            /**
             * Manually trigger the input type verification event
             */ onModifyInput() {
                if (
                    this.modifyItem.endsWith(' ') ||
                    !this.modifyItem.includes(' ')
                ) {
                    this.$refs.modifyValidator[0].value = this.modifyItem;
                    this.$refs.modifyValidator[0].validate('input');
                }
            },
            /**
             * Get the modified input box
             * @returns {*}
             */ getCpModifyInput() {
                return (
                    this.$refs.cpModifyInput &&
                    (Array.isArray(this.$refs.cpModifyInput)
                        ? this.$refs.cpModifyInput[0]
                        : this.$refs.cpModifyInput)
                );
            },
            /**
             * Edit box out of focus
             */ onModifyBlur(event) {
                if (this.asyncChecking) return;
                /**
                 * Verification during modification, the corresponding validator is found as modifyValidator, and the focus will be placed on the newly added input box only after all the modified contents are passed.
                 */ this.generate(this.modifyItem, true, `modifyValidator`);
                if (
                    !this.errMessage &&
                    !this.async &&
                    this.validationMode === 'old'
                )
                    this.$refs.cpInput.focus();
            },
            /**
             * Modify the keyboard input of the input box
             * @param {object} event - wrapper event object
             */ onModifyKeydown(event) {
                event.stopPropagation();
                const { current, modifyItem, modifying } = this;
                this.errMessage = ''; // enter键
                // Disable the default operation of the default enter key
                if (event.which === 13) event.preventDefault(); // Spacebar generates item
                if (
                    (event.which === 32 && !this.noSpace) ||
                    (event.which === 188 && !this.noComma) ||
                    (this.type === 'searchInput' && event.which === 13)
                ) {
                    // searchInput Enter key adds items
                    // Generate items (meet relevant requirements)
                    event.preventDefault();
                    if (
                        this.getCpModifyInput().$refs.input ===
                            document.activeElement &&
                        modifyItem
                    ) {
                        this.generate(
                            this.modifyItem,
                            true,
                            `modifyValidator`,
                            'key',
                        );
                        if (
                            !this.errMessage &&
                            !this.async &&
                            this.validationMode === 'old'
                        )
                            this.$refs.cpInput.focus();
                    }
                } // tab key
                // When the input content is empty, restore the default operation of the tab
                if (event.which === 9 && modifyItem !== '') {
                    event.preventDefault();
                    this.generate(this.modifyItem, true, `modifyValidator`, 'key');
                } // backspace(win) == deleteItem(mac)
                if (event.which === 8) {
                    if (modifying && modifyItem === '') {
                        this.modifying = false;
                        this.current = current === 0 ? 0 : current - 1;
                    }
                }
            },
            /**
             * Focus on a specific build item
             * @param {number} index - the index of the generated item
             * @param {object} $event - the wrapped event object
             */ onFocus(index, $event) {
                if (this.asyncChecking) return;
                $event && $event.stopPropagation();
                this.modifying = false;
                this.$refs.cpInput.blur();
                this.current = index; // This is because the keydown event registered on the document requires manual $update
            },
            /**
             * Double-click the generated item to change to edit state
             * @param {number} index - the index of the generated item
             * @param {object} event - the wrapped event object
             */ onDBLClick(index, event) {
                if (this.asyncChecking || this.errMessage) return;
                if (index === this.list.length - 1) {
                    this.item = this.list[index];
                } else {
                    this.modifyItem = this.list[index];
                    this.modifying = true;
                }
                this.current = index; // Remove the current edit item from the list
                this.list.splice(index, 1);
                this.$nextTick(() => {
                    index === this.list.length
                        ? this.$refs.cpInput.focus()
                        : this.getCpModifyInput().focus();
                });
            },
            /**
             * Generate items (including generating multiple items at once)
             * @param {string} item - the content of the generated item
             * @param {boolean} [isModify=false] - Whether to edit a generated item
             * @param {string} validator - the validator to pass the value to
             * @param {string} trigger - The method to trigger the generation. Only used to distinguish when modifying.
             */ generate(item, isModify = false, validator, trigger = 'blur') {
                if (this.type === 'searchInput' && /^\s*$/.test(item)) return; // item == false, indicating that item is an empty string or a string consisting of spaces
                if (item === '' && item !== '0') {
                    if (isModify) this.modifyItem = '';
                    else this.item = '';
                    this.emptyValidate();
                    if (validator === 'modifyValidator') {
                        this.modifying = false;
                        this.$refs.cpInput.focus();
                    }
                    return;
                } // Generate an array of multiple items at once
                // arrIndex is the index of the item in the array where the error occurred
                // str is the character of the error part outside the generated item
                let itemArr = [];
                let arrIndex = 0;
                /**
                 * When both commas and spaces can be used as delimiters, commas are converted to spaces and processed together
                 */ if (!this.noSpace && !this.noComma)
                    item = item.replace(/,/g, ' ');
                /**
                 * Comma is allowed as separator, space is not allowed.
                 */ if (this.noSpace && !this.noComma) itemArr = item.split(',');
                /**
                 * In searchInput mode
                 */ else if (this.noComma && this.noSpace) {
                    itemArr = [item];
                } else itemArr = item.split(' '); //
                if (this.async) return this.asyncGenerate(item, isModify, itemArr);
                /**
                 * Verify the rule mode. If it is the old rule mode, use the u-chips original verification method. If it is the new rule, use the u-chips new verification method.
                 */ if (this.validationMode === 'new') {
                    this.validateQueue(itemArr, isModify, validator)
                        .then((res) => {
                            /**
                             * The array operation method is different in the added state and the modified state, but the verification method is the same.
                             * When all current input content passes validation, the value attribute in the corresponding validator should be synchronously restored to empty.
                             */ if (!isModify) {
                                this.$refs.textValidator.value = '';
                                this.item = '';
                                this.$refs.cpInput.currentValue = this.item;
                            } else {
                                this.$refs.modifyValidator[0].value = '';
                                this.$refs.cpModifyInput.currentValue = this.modifyItem =
                                    '';
                                this.$refs.cpInput.focus();
                            }
                        })
                        .catch((e) => {
                            itemArr.splice(0, e);
                            if (!isModify) {
                                this.item = itemArr.join(' ');
                                this.$refs.cpInput.currentValue = this.item;
                            } else {
                                this.modifyItem = itemArr.join(' ');
                                this.$refs.cpModifyInput.currentValue = this.modifyItem;
                                this.$refs.cpModifyInput.color = 'error';
                                if (trigger === 'key')
                                    this.getCpModifyInput().focus();
                            }
                        });
                } else {
                    itemArr.every((itm, index) => {
                        this.validate(itm, 'input+blur');
                        if (this.errMessage) {
                            return false;
                        } else {
                            // Edit generated items
                            if (isModify) {
                                // Only when the input is correct, you need to delete the previous item first
                                this.list.splice(this.current, 0, itm); // Create a new generated item
                            } else this.list.push(itm);
                            arrIndex = index + 1;
                            return true;
                        }
                    });
                    itemArr.splice(0, arrIndex);
                    const str = itemArr.join(' ');
                    isModify ? (this.modifyItem = str) : (this.item = str);
                }
            },
            /**
             * A function used to verify input characters, converting each segmented character into a sequential promise for verification
             * @param itemArr string array
             * @param isModify is used to distinguish whether it is in modified state
             * @param validator The corresponding validator (since validation will modify the value in the validator, it must be modified to the corresponding validator)
             * @returns {Promise.<string>}
             */ async validateQueue(itemArr, isModify, validator) {
                const targetValidator = Array.isArray(this.$refs[validator])
                    ? this.$refs[validator][0]
                    : this.$refs[validator];
                for (let i = 0; i < itemArr.length; i++) {
                    try {
                        targetValidator.value = itemArr[i];
                        const valueValidation = targetValidator.validate('blur'); // let countValidation = this.$refs.countValidator.validate('blur');
                        // eslint-disable-next-line no-await-in-loop
                        await Promise.all([valueValidation]).then((res) => {
                            isModify
                                ? this.list.splice(this.current, 0, itemArr[i])
                                : this.list.push(itemArr[i]);
                        });
                    } catch (e) {
                        throw i;
                    }
                }
                return 'success!';
            },
            /**
             * Verification logic when there are asynchronous rules. Send each item to the verifier, perform synchronous verification first, and then perform asynchronous verification. (Not used in the new version)
             * @param item useless
             * @param isModify whether it is in modification state
             * @param itemArr item array
             * @returns {Promise.<TResult>}
             */ asyncGenerate(item, isModify, itemArr) {
                let promise = Promise.resolve();
                let arrIndex = 0;
                this.asyncChecking = true;
                itemArr.forEach((itm, index) => {
                    promise = promise.then(() =>
                        this.validate(itm, 'input+blur').then(() => {
                            if (this.errMessage) throw new Error();
                            else {
                                if (isModify) {
                                    this.list.splice(this.current, 0, itm);
                                } else this.list.push(itm);
                                arrIndex = index + 1;
                            }
                        }),
                    );
                });
                return promise
                    .catch((err) => err)
                    .then(() => {
                        itemArr.splice(0, arrIndex);
                        const str = itemArr.join(' ');
                        if (!str) this.modifying = false;
                        this.asyncChecking = false;
                        this.$nextTick(() => {
                            isModify ? (this.modifyItem = str) : (this.item = str);
                            this.$refs.cpInput.focus();
                        });
                    });
            },
            /**
             * Validation logic, validate does not care whether the current event is blur or input (not used in the new version)
             * @param {string} value - current detection value
             * @param {string} [type='input'] - event type
             * @return error message, return empty string if no error occurs
             */ validate(value, type = 'input', list) {
                list = list || this.list; // Empty value or error message not detected
                if ((!value && value !== '0') || this.errMessage) {
                    this.emitValidate(value);
                    return;
                } // An item that did not pass the check
                const errRule = this.syncRules.find((rule) => {
                    // result is true, indicating that the verification logic has passed
                    let result = false;
                    if (!type.includes(rule.trigger)) return false;
                    if (rule.type === 'method')
                        result = rule.options(value, rule, list);
                    if (rule.type === 'is') result = rule.options.test(value, list);
                    if (rule.type === 'isNot')
                        result = !rule.options.test(value, list);
                    return !result;
                });
                if (errRule || !this.async) {
                    // Synchronous verification fails, or there is no asynchronous verification rule, so end directly
                    this.errMessage = errRule ? errRule.message : '';
                    this.emitValidate(value);
                } else return this.asyncValidate(value, type, list);
            },
            /**
             * Asynchronous verification function, which connects asynchronous rules into a promise chain and verifies them one by one (not used in the new version)
             * @param value input value
             * @param type event type
             * @returns {Promise.<T>}
             */ asyncValidate(value, type) {
                let promise = Promise.resolve();
                this.asyncRules
                    .filter((r) => type.includes(r.trigger))
                    .forEach((rule) => {
                        promise = promise.then(
                            () =>
                                new Promise((res, rej) => {
                                    rule.validator(rule, value, (error) => {
                                        if (error === undefined) {
                                            this.errMessage = '';
                                            this.emitValidate(value);
                                            res();
                                        } else if (error instanceof Error) {
                                            this.errMessage = rule.message;
                                            this.emitValidate(value);
                                            reg();
                                        }
                                    });
                                }),
                        );
                    });
                return promise;
            },
            /**
             * Delete an item
             * @param {number} index - the index of an item
             */ deleteItem(index) {
                if (this.asyncChecking) return;
                this.list.splice(index, 1);
                const item = this.modifying ? this.modifyItem : this.item;
                if (this.validationMode === 'new') {
                    if (this.modifying) {
                        this.$refs.modifyValidator[0]
                            .validate('input')
                            .catch((e) => {
                                throw e;
                            });
                    } else {
                        this.$refs.textValidator.validate('input').catch((e) => {
                            throw e;
                        });
                    }
                } else this.validate(item, 'input+blur');
                this.$refs.cpInput.focus();
            },
            /**
             * External call to see if the data is legal
             */ $checkValidity() {
                // No changes to created items
                // No error message
                // Create an input box with no content
                // There is a correct input
                return (
                    !this.modifying &&
                    !this.errMessage &&
                    !this.item &&
                    this.list.length
                );
            },
            /**
             * Used when submitting verification
             * Display empty state prompt.
             */ submitValidate() {
                if (
                    !this.allowEmpty &&
                    !this.list.length &&
                    !this.item &&
                    !this.modifyItem
                ) {
                    this.errMessage = this.error;
                    return false;
                } else return this.$checkValidity();
            },
            emitValidate(value) {
                this.$emit('validate', {
                    isValid: !this.errMessage,
                    errMessage: this.errMessage,
                    value,
                    current: this.current === -1 ? this.list.length : this.current,
                });
            },
            /**
             * Check whether it is empty, the original method needs to be compatible
             * @param value
             */ emptyValidate(value = '') {
                if (this.validationMode === 'new') {
                    this.$refs.countValidator.validate('blur');
                } else {
                    if (!this.allowEmpty && !this.list.length) {
                        this.errMessage = this.error;
                    }
                }
                this.emitValidate(value);
            },
            deleteAll() {
                this.list = [];
                this.hasMore = false;
            },
            computeMorePositon() {
                // Calculate more positions
                this.$nextTick(() => {
                    // The last element of the first row
                    const index = Array.prototype.findIndex.call(
                        this.$refs.wrapper.children,
                        (item) =>
                            item.offsetTop > 10 && item.localName !== 'textarea',
                    );
                    if (index === -1) {
                        this.hasMore = false;
                        return;
                    }
                    const lastEle = this.$refs.wrapper.children[index - 1];
                    this.hasMore = true;
                    this.morePosRight =
                        this.$refs.wrapper.clientWidth -
                        lastEle.offsetLeft -
                        lastFore.offsetWidth +
                        52;
                });
            },
        },
    };
    </script>
    
    <style module>
    .root {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        margin-bottom: 10px;
    }
    .root[type="searchInput"] {
        width: 500px;
        min-height: 36px;
    }
    .unitField {
        position: relative;
        width: 578px;
        min-height: 116px;
        max-height: 184px;
        border: 1px solid #e1e8ed;
        padding: 2px;
        font-size: 0;
        overflow-y: auto;
    }
    .root[type="searchInput"] .unitField {
        min-height: 36px;
        width: 500px;
        z-index: 1;
        position: absolute;
        max-height: 150px;
        background-color: #fff;
        /* overflow: hidden; */
        /* clossall */
        padding-right: 30px;
    }
    .root[type="searchInput"] .unitField::-webkit-scrollbar {
        width: 0 !important;
    }
    .root[type="searchInput"] .unitField[hasMore] {
        padding-right: 100px;
    }
    .searchIcon {
        float: left;
        margin-top: 3px;
        margin-left: 5px;
        color: #b4b4b4;
    }
    .unitFieldDisabled {
        position: relative;
        width: 578px;
        min-height: 116px;
        max-height: 184px;
        border: 1px solid #e1e8ed;
        padding: 2px;
        font-size: 0;
        overflow-y: auto;
        background: $brand-disabled;
    }
    .root[type="searchInput"] .unitFieldDisabled {
        min-height: 36px;
    }
    .placeholder {
        position: absolute;
        padding: 10px;
        font-size: 14px;
        color: #999;
        top: 0px;
    }
    .root[type="searchInput"] .placeholder{
        padding: 5px;
        padding-left: 30px;
    }
    .more {
        display: inline-block;
        vertical-align: middle;
        width: 4px;
        height: 4px;
        margin-left: 4px;
        border-radius: 4px;
        background: #c9cfd8;
        font-style: normal;
    }
    
    .unit {
        /* @extend .f-toe; */
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        $line-height: 24px;
        max-width: 558px;
        margin: 10px 0 0 10px;
        padding: 0 30px 0 10px;
        border-radius: 12px;
        font-size: 14px;
        color: #666;
        background-color: #eef2f7;
        word-break: break-all;
    }
    .root[type="searchInput"] .unit {
        margin-top: 6px;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        line-height: 1.8;
    }
    .hasMore {
        position: absolute;
        top: -1px;
        right: 24px;
    } of
    .unit:hover {
        background-color: #e6ecf4;
    }
    
    .unitFocus {
        background-color: #e6ecf4;
    }
    
    .close {
        position: absolute;
        right: 8px;
        top: 6px;
        content: "";
        width: 10px;
        height: 10px;
        line-height: 10px;
        color: #c9cfd8;
        cursor: pointer;
    
    &:hover {
         color: #9da5b4;
     }
    }
    .closeAll {
        position: absolute;
        top: 10px;
        right: 5px;
        color: #c9cfd8;
        background-color: #eef2f7;
        font-size: 14px;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 1;
        border-radius: 50%;
    }
    .closeAll:hover {
        color: #9da5b4;
        cursor: pointer;
    }
    .root input, .root textarea {
        box-sizing: border-box;
        margin: 10px 0 0 10px;
        padding: 0 10px;
        border-radius: 12px;
        color: #666;
        border-color: transparent;
        line-height: 24px;
        vertical-align: top;
        font-size: 14px;
        outline: 0;
    }
    .root[type="searchInput"] input, .root[type="searchInput"] textarea {
        height: 25px !important;
        margin-top: 8px;
    }
    
    /*Add input box-default*/
    .textarea[class] {
        box-sizing: border-box;
        border-color: transparent;
        outline: 0;
        line-height: 30px;
        min-height: 0;
        border-radius: 12px;
        margin: 5px 0 0 5px;
    }
    
    /*Add input box-click*/
    .textarea[class][focus] {
        border: 1px dashed #e1e8ed;
    }
    
    .textarea[class] textarea{
        margin: 0
    }
    
    .textareaFocus[class] textarea{
        margin: 0
    }
    
    .textareaError[class] {
        box-sizing: border-box;
        margin: 5px 0 0 5px;
        border-radius: 12px;
        line-height: 30px;
        border-style: solid;
        border-color:#ff867f;
        min-height: 0;
    }
    
    .textareaError[class][focus] {
        border-color:#ff867f;
    }
    
    .input[class] {
        box-sizing: border-box;
        line-height: 40px;
        width: 145px;
        border: 1px dashed #e1e8ed;
        border-radius: 12px;
        margin: 0 0 0 5px;
        height: 26px;
    }
    
    .input[class][focus] {
        box-sizing: border-box;
        line-height: 40px;
        width: 145px;
        border: 1px dashed #e1e8ed;
        border-radius: 12px;
        margin: 0 0 0 5px;
        height: 26px;
    }
    
    .input[class] input{
        margin: 0;
    }
    
    .inputError[class] {
        box-sizing: border-box;
        line-height: 40px;
        width: 145px;
        border: 1px solid #ff867f;
        border-radius: 12px;
        margin: 0 0 0 5px;
        height: 26px;
    }
    
    .inputError[class][focus] {
        border: 1px solid #ff867f;
    }
    
    .inputError[class] input{
        margin: 0;
    }
    
    .root input:disabled{
        background-color: #fff;
    }
    
    .root textarea {
        overflow-y: hidden;
        resize: none;
    }
    
    .root textarea:disabled{
        background-color: #fff;
    }
    
    
    .root input.inputError, .root textarea.textareaError {
        border-style: solid;
        border-color: #ff867f;
    }
    .inputWrapper {
        margin-left: 25px;
        margin-top: -3px;
        margin-bottom: 4px;
    }
    
    
    .root[type="searchInput"] .inputWrapper {
        margin-bottom: 0px;
    }
    .msg {
        position: absolute;
        right: 0;
        top: -25px;
        font-size: 14px;
    }
    
    .tipError {
        position: absolute;
        left: 100%;
        top: 0;
        padding: 0 10px;
        line-height: 26px;
        font-size: 12px;
        display: block;
        margin: 3px 10px;
        white-space: nowrap;
        background-color: #ff867f;
        color: #fff;
    }
    
    .root[placement="bottom"] .tipError {
        position: absolute;
        left: 0;
        top: 100%;
        padding: 0 10px;
        line-height: 26px;
        font-size: 12px;
        display: block;
        margin: 0;
        white-space: nowrap;
        background-color: #ff867f;
        color: #fff;
    }
    /* Do not display error pop-up window*/
    .root[type="searchInput"] .tipError {
        visibility: hidden;
    }
    .root[placement="bottom"] .tipError:after {
        display: none;
    }
    .tipError:after {
        content: '';
        position: absolute;
        right: 100%;
        top: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid transparent;
        border-right: 4px solid #ff867f;
        border-bottom: 4px solid transparent;
    }</style>