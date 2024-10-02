<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# USearchInput Predictive Search Box

u-input predictive search box, automatically completes the input content

## Example
### Basic Form

``` view
<template>
<u-linear-layout style="height:100px">
    <u-search-input :loadList="loadList"></u-search-input>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                text: 'simpson-private',
                value: '1',
            },{
                text: 'simpson-public',
                value: '2',
            },{
                text: 'marge-public',
                value: '3',
            },{
                text: 'bart-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```
### Search Content Two-Way Binding

u-search-input is different from general u-input. There are two data that users can bind to u-search-input: searchWord and value. SearchWord is the actual value in the input box, and value is the object selected by the user. This design method is mainly used in some business scenarios where users only care about the input value in the input, while in some scenarios, users need the value in loaderList instead of text. Select one of them as a parameter for two-way binding. SearchWord changes in real time, and value will only change when a certain value is selected. It is equal to the selected item in loadlist.

``` view
<template>
<div>
    <div>
        <u-search-input v-model="value" :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
    <div style="margin-top:20px;">
        <u-search-input :searchWord.sync="searchWord" :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: {
                text: 'simpson-private',
                value: '1',
            },
            searchWord: 'marge-public',
            list: [{
                text: 'Simpson',
                value: 'simpson',
                children: [{
                    text: 'simpson-private',
                    description: 'Simpson private cloud environment',
                    value: '1',
                },{
                    text: 'simpson-public',
                    description: 'Simpson public cloud environment',
                    value: '2',
                }]
            }, {
                text: 'Marge',
                value: 'marge',
                children: [{
                    text: 'marge-public',
                    description: 'Marge public cloud environment',
                    value: '3',
                }],
            }, {
                text: 'US Unicom',
                value: 'bart',
                children: [{
                    text: 'bart-public',
                    description: 'US Unicom public cloud environment',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'Region cloud environment',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```

### SearchWord and Value Consistency Check

There is a deviation between value and searchWord, so a consistency check switch for keyWord and value is provided here. If set to true, the text with keyWord as value will be checked and synchronized when the input box loses focus.

``` view
<template>
<div>
    <div>
        <u-search-input v-model="value" :valueCheck="true"  :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: {
                text: 'simpson-private',
                value: '1',
            },
            list: [{
                text: 'Simpson',
                value: 'simpson',
                children: [{
                    text: 'simpson-private',
                    description: 'Simpson private cloud environment',
                    value: '1',
                },{
                    text: 'simpson-public',
                    description: 'Simpson public cloud environment',
                    value: '2',
                }]
            }, {
                text: 'Marge',
                value: 'marge',
                children: [{
                    text: 'marge-public',
                    description: 'Marge public cloud environment',
                    value: '3',
                }],
            }, {
                text: 'US Unicom',
                value: 'bart',
                children: [{
                    text: 'bart-public',
                    description: 'US Unicom public cloud environment',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'Region cloud environment',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```

### Drop-Down Box Position Offset
``` view
<template>
<div>
    <div>
        <u-search-input :offset="20" :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: 'Simpson',
                value: 'simpson',
                children: [{
                    text: 'simpson-private',
                    description: 'Simpson private cloud environment',
                    value: '1',
                },{
                    text: 'simpson-public',
                    description: 'Simpson public cloud environment',
                    value: '2',
                }]
            }, {
                text: 'Marge',
                value: 'marge',
                children: [{
                    text: 'marge-public',
                    description: 'Marge public cloud environment',
                    value: '3',
                }],
            }, {
                text: 'US Unicom',
                value: 'bart',
                children: [{
                    text: 'bart-public',
                    description: 'US Unicom public cloud environment',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'Region cloud environment',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```
### Input Box Size
The search input box size setting method is the same as u-input. By setting the same size as u-input, you can control all u-input effects.
``` view
<template>
<div>
<u-linear-layout style="height:100px">
    <u-search-input :loadList="loadList"></u-search-input>
</u-linear-layout>
<u-linear-layout style="height:100px">
    <u-search-input size="large" :loadList="loadList"></u-search-input>
</u-linear-layout>
<u-linear-layout style="height:100px">
    <u-search-input size="huge" :loadList="loadList"></u-search-input>
</u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'simpson-private',
                value: '1',
            },{
                text: 'simpson-public',
                value: '2',
            },{
                text: 'marge-public',
                value: '3',
            },{
                text: 'bart-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```
### Clearable
The search input box size setting method is the same as u-input. By setting the same size as u-input, you can control all u-input effects.
``` view
<template>
<u-linear-layout style="height:100px">
    <u-search-input :loadList="loadList" clearable></u-search-input>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'simpson-private',
                value: '1',
            },{
                text: 'simpson-public',
                value: '2',
            },{
                text: 'marge-public',
                value: '3',
            },{
                text: 'bart-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```
### Search Icon
``` view
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable></u-search-input>
    </div>
    <div style="margin-top:20px;">
        <u-search-input :loadList="loadList" size="large" search="right"  clearable></u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'simpson-private',
                value: '1',
            },{
                text: 'simpson-public',
                value: '2',
            },{
                text: 'marge-public',
                value: '3',
            },{
                text: 'bart-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```

### Custom Search List Items
``` view
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'simpson-private',
                description: 'Simpson private cloud environment',
                value: '1',
            },{
                text: 'simpson-public',
                description: 'Simpson public cloud environment',
                value: '2',
            },{
                text: 'marge-public',
                description: 'Marge public cloud environment',
                value: '3',
            },{
                text: 'bart-public',
                description: 'US Unicom public cloud environment',
                value: '4',
            },{
                text: 'region-1',
                description: 'Region cloud environment',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```

### Custom Search List Items
``` view
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'simpson-private',
                description: 'Simpson private cloud environment',
                value: '1',
            },{
                text: 'simpson-public',
                description: 'Simpson public cloud environment',
                value: '2',
            },{
                text: 'marge-public',
                description: 'Marge public cloud environment',
                value: '3',
            },{
                text: 'bart-public',
                description: 'US Unicom public cloud environment',
                value: '4',
            },{
                text: 'region-1',
                description: 'Region cloud environment',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```

### Search Content Grouping
``` view
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: 'Simpson',
                value: 'simpson',
                children: [{
                    text: 'simpson-private',
                    description: 'Simpson private cloud environment',
                    value: '1',
                },{
                    text: 'simpson-public',
                    description: 'Simpson public cloud environment',
                    value: '2',
                }]
            }, {
                text: 'Marge',
                value: 'marge',
                children: [{
                    text: 'marge-public',
                    description: 'Marge public cloud environment',
                    value: '3',
                }],
            }, {
                text: 'US Unicom',
                value: 'bart',
                children: [{
                    text: 'bart-public',
                    description: 'US Unicom public cloud environment',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'Region cloud environment',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```
### Custom Search Content Grouping
``` view
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <u-linear-layout justify="space-between" style="padding:5px 10px;border-bottom:1px solid #dfe4ec;border-top:1px solid #dfe4ec;" slot="header" slot-scope="scope">
                <span>{{scope.group.title}}</span>
                <u-link>View more</u-link>
            </u-linear-layout>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: 'Simpson',
                value: 'simpson',
                children: [{
                    text: 'simpson-private',
                    description: 'Simpson private cloud environment',
                    value: '1',
                },{
                    text: 'simpson-public',
                    description: 'Simpson public cloud environment',
                    value: '2',
                }]
            }, {
                text: 'Marge',
                value: 'marge',
                children: [{
                    text: 'marge-public',
                    description: 'Marge public cloud environment',
                    value: '3',
                }],
            }, {
                text: 'US Unicom',
                value: 'bart',
                children: [{
                    text: 'bart-public',
                    description: 'US Unicom public cloud environment',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'Region cloud environment',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```

### Default Placeholder Hint

``` view
<template>
<div>
    <div>
        <u-search-input placeholder="Please enter an environment name" :valueCheck="true"  :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: 'Simpson',
                value: 'simpson',
                children: [{
                    text: 'simpson-private',
                    description: 'Simpson private cloud environment',
                    value: '1',
                },{
                    text: 'simpson-public',
                    description: 'Simpson public cloud environment',
                    value: '2',
                }]
            }, {
                text: 'Marge',
                value: 'marge',
                children: [{
                    text: 'marge-public',
                    description: 'Marge public cloud environment',
                    value: '3',
                }],
            }, {
                text: 'US Unicom',
                value: 'bart',
                children: [{
                    text: 'bart-public',
                    description: 'US Unicom public cloud environment',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'Region cloud environment',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | object | | | Selected object |
| search-word | string | | | Input box content |
| offset | number | | `0` | Input box x-axis offset |
| load-list | Function | | | Search list return function, accept search keyword as parameter, return value as promise or array |
| value-check | boolean | | `false` | When out of focus, search is synchronized with value. This only works when value is bound. |
| type | string | | `'text'` | The type of the input box. Currently two types are supported: `'text'` and `'password'` |
| clearable | boolean | | | Whether it can be cleared. If it is turned on, a clear button will be displayed when there is content in the input box. |
| placeholder | string | | | Native property. Compatible with IE9. |
| minlength | number | | | Native property |
| maxlength | number | | | Native properties |
| spellcheck | boolean | | | Native property |
| autofocus | boolean | | | Whether to automatically get focus |
| readonly | boolean | | `false` | Read-only |
| disabled | boolean | | `false` | Disabled |
| size | string | | `'normal'` | Size extension, supports one value: `'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`, or a combination of two values, the former represents the height and the latter represents the width, similar to the CSS padding writing format |
| search | string | | | Search mark, supports position customization, the default search mark is on the far right, the value of `left` means the search mark is on the left |
| maxlength-message | string | | | Error message when the input content reaches the upper limit, and takes effect when wrapped by [FormItem](#/components/u-form) |

### Slots

#### (default)

Insert HTML or `Component`, and display the items in the drop-down box.

#### Header

Grouped data, group header

### Events

#### @input

Triggered when the value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Select the value in the drop-down box |

#### @change

Triggered when the value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | object | Changed value |
| $event.oldValue | object | Old value |

#### @blur

Input box out of focus event transparent transmission

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Vue focus loss event object |

#### @focus

Input box focus event transparent transmission

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Vue focus event object |

#### @keyenter

enter input event

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Vue keydown.enter event object |

#### @keydown

down input event

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Vue keydown.down event object |

#### @keyup

up input event

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Vue keydown.up event object |

#### @keychange

searchWordChangedEvent

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | The changed value |
| $event.oldValue | string | Old value |