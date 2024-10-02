<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# XMonacoEditor Monaco Editor

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Set Theme](#Set theme)
    - [Set Language](#Set language)
    - [Current Problems](#Current Problems)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

This component encapsulates [Monaco Editor]([https://microsoft.github.io/monaco-editor/index.html]) with Vue, adds style modifications, and connects to the Cloud UI form validation system.

## Example
### Basic Usage

Use `v-model` or `:value.sync` for two-way binding.

``` vue
<template>
<x-monaco-editor v-model="value" theme="vs-dark"></x-monaco-editor>
</template>
<script>
export default {
    data() {
        return {
            value: 'Hello Monaco Editor!',
        };
    },
};
</script>
```

### Setting the Theme

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-form-item label="Switch Theme:">
        <u-select v-model="selectedTheme">
            <u-select-item v-for="theme in themes" :key="theme" :value="theme">{{ theme }}</u-select-item>
        </u-select>
    </u-form-item>
    <x-monaco-editor v-model="value" :theme="selectedTheme" language="typescript"></x-monaco-editor>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            selectedTheme: 'vs-dark',
            themes: [
                'vs',
                'vs-dark',
                'hc-black',
            ],
            value:
`/* Game of Life
 * Implemented in TypeScript
 * To learn more about TypeScript, please visit http://www.typescriptlang.org/
 */
 
module Conway {
	export class Cell {
		public row: number;
		public col: number;
		public live: boolean;
		
		constructor(row: number, col: number, live: boolean) {
			this.row = row;
			this.col = col;
			this.live = live
		}
	}
}
`,
        };
    },
};
</script>
```

### Set the Language

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-form-item label="Switch Language:">
        <u-select v-model="selectedLang">
            <u-select-item v-for="lang in langs" :key="lang" :value="lang">{{ lang }}</u-select-item>
        </u-select>
    </u-form-item>
    <x-monaco-editor v-model="values[selectedLang]" :language="selectedLang" theme="vs-dark"></x-monaco-editor>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            selectedLang: 'typescript',
            values: {
                typescript: `/* Game of Life
 * Implemented in TypeScript
 * To learn more about TypeScript, please visit http://www.typescriptlang.org/
 */
 
module Conway {
	export class Cell {
		public row: number;
		public col: number;
		public live: boolean;
		
		constructor(row: number, col: number, live: boolean) {
			this.row = row;
			this.col = col;
			this.live = live
		}
	}
}
`,
                python: `def factorial(n):
    return reduce(lambda x,y:x*y,[1]+range(1,n+1))`,
                sql: 'SELECT * FROM articles WHERE user_id = "123abc";',
            },
        };
    },
    computed: {
        langs() {
            return Object.keys(this.values);
        },
    },
}
</script>
```

### Current Issues

- [Multiple Editors Share the Same Theme](https://github.com/microsoft/monaco-editor/issues/1289)
- [Multiple Editors Share TypeScript Service](https://github.com/microsoft/monaco-editor/issues/262)

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | string | | `''` | Code snippet |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-init

Fired before the editor is initialized

#### @init

Fired after the editor is initialized

#### @input

Trigger on input

#### @change

Triggered on change

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | The changed value |
| $event.oldValue | string | Old value |
| $event.event | object | Monaco's event |
