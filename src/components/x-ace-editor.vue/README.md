<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# XAceEditor Ace Editor

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Set Language](#Set language)
    - [Set Theme](#Set theme)
    - [Read-Only and Disabled](#Read-only and disabled)
    - [Set Size](#Set Size)
    - [Resize](#Resize)
- [API]()
    - [Props/Attrs](#propsattrs)

**Form Controls**, **Block-Level Display**

This component encapsulates Ace Editor with Vue, adds style modifications, and connects to the Cloud UI form validation system.

## Example
### Basic Usage

Use `v-model` or `:value.sync` for two-way binding.

``` view
<template>
<x-ace-editor v-model="value"></x-ace-editor>
</template>
<script>
export default {
    data() {
        return {
            value: 'Ace Editor',
        };
    },
}
</script>
```

### Set the Language

Set the language via the `lang` property. For more language packs, see [brace mode](https://github.com/thlorenz/brace/tree/master/mode).

Note: The language package in the brace package needs to be imported as follows.

``` js
import 'brace';
import 'brace/mode/json';
```

``` view
<template>
<x-ace-editor v-model="value" lang="json"></x-ace-editor>
</template>
<script>
import 'brace';
import 'brace/mode/json';

export default {
    data() {
        return {
            value:
`{
    "name": "Alice",
    "age": 24,
    "phone": "18612345678"
}
`,
        };
    },
}
</script>
```

Here are some more examples:

``` view
<template>
<u-linear-layout direction="vertical">
    <u-form-item label="Switch Language:">
        <u-select v-model="selectedLang">
            <u-select-item v-for="lang in langs" :key="lang" :value="lang">{{ lang }}</u-select-item>
        </u-select>
    </u-form-item>
    <x-ace-editor v-model="values[selectedLang]" :lang="selectedLang"></x-ace-editor>
</u-linear-layout>
</template>
<script>
import 'brace';
import 'brace/mode/json';
import 'brace/mode/python';
import 'brace/mode/sql';

export default {
    data() {
        return {
            selectedLang: 'json',
            values: {
                json: `{
    "name": "Alice",
    "age": 24,
    "phone": "18612345678"
}
`,
                python: `def factorial(n):
    return reduce(lambda x,y:x*y,[1]+range(1,n+1))`,
                sql: 'SELECT * FROM articles WHERE user_id = "123abc";',
            },
        };
    },
    computed: {
        by() {
            return Object.keys(this.values);
        },
    },
}
</script>
```

### Setting the Theme

Use the `theme` property to set common editor themes. For more themes, see [brace theme](https://github.com/thlorenz/brace/tree/master/theme).

Note: You also need to import the theme file in the brace package in advance.

``` view
<template>
<x-ace-editor v-model="value" lang="json" theme="monokai"></x-ace-editor>
</template>
<script>
import 'brace';
import 'brace/mode/json';
import 'brace/theme/monokai';

export default {
    data() {
        return {
            value:
`{
    "name": "Alice",
    "age": 24,
    "phone": "18612345678"
}
`,
        };
    },
}
</script>
```

Here are some more examples:

``` view
<template>
<u-linear-layout direction="vertical">
    <u-form-item label="Switch theme:">
        <u-select v-model="selectedTheme">
            <u-select-item v-for="theme in themes" :key="theme" :value="theme">{{ theme }}</u-select-item>
        </u-select>
    </u-form-item>
    <x-ace-editor v-model="value" lang="javascript" :theme="selectedTheme"></x-ace-editor>
</u-linear-layout>
</template>
<script>
import 'brace';
import 'brace/mode/javascript';

const themes = ['ambiance','chaos','chrome','clouds','clouds_midnight','cobalt','crimson_editor','dawn','dracula','dreamweaver','eclipse','github','gob','gruvbox','idle_fingers','iplastic','katzenmilch','kr_theme','kuroir','merbivore','merbivore_soft','mono_industrial','monokai','pastel_on_dark','solarized_dark','solarized_light','sqlserver','terminal','textmate','tomorrow','tomorrow_night','tomorrow_night_blue','tomorrow_night_bright','tomorrow_night_eighties','twilight','vibrant_ink','xcode'];
themes.map((theme) => import(`brace/theme/${theme}`));

export default {
    data() {
        return {
            selectedTheme: '',
            themes,
            value: `[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
`,
        };
    },
}
</script>
```

### Read-Only and Disabled

``` html
<u-grid-layout :repeat="2">
    <u-grid-layout-column>
        <x-ace-editor value="var i = 0; // Read-only" readonly></x-ace-editor>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <x-ace-editor value="var i = 0; // Disabled" disabled></x-ace-editor>
    </u-grid-layout-column>
</u-grid-layout>
```

### Setting the Size

``` html
<u-linear-layout direction="vertical">
    <x-ace-editor size="small" value="small" readonly></x-ace-editor>
    <x-ace-editor size="small normal" value="small normal" readonly></x-ace-editor>
    <x-ace-editor size="normal" value="normal" readonly></x-ace-editor>
    <x-ace-editor size="large" value="large" readonly></x-ace-editor>
    <x-ace-editor size="large full" value="large full" readonly></x-ace-editor>
</u-linear-layout>
```

### Resize

By setting the `resize` property, you can decide whether the horizontal and vertical dimensions can be resized.

``` html
<u-linear-layout direction="vertical">
    <div><x-ace-editor value="none: cannot be resized by default" resize="none"></x-ace-editor></div>
    <div><x-ace-editor value="vertical: Only allow vertical resizing" resize="vertical"></x-ace-editor></div>
    <div><x-ace-editor value="horizontal: Only allow horizontal resizing" resize="horizontal"></x-ace-editor></div>
    <div><x-ace-editor value="both: both vertical and horizontal directions" resize="both"></x-ace-editor></div>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | string | | `''` | Code snippet |
| lang | string | | `'text'` | Set language |
| theme | string | | | Set the theme. If not set, the Cloud UI style theme is used by default. |
| readonly | boolean | | `false` | Read-only |
| disabled | boolean | | `false` | Disabled |
| options | object | | | Configuration item object |
| autofocus | boolean | | `false` | Automatically get focus when the component is mounted |
