<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# XHighlight Code Highlighting

- [Installation Configuration](#Installation Configuration)
    - [Installation](#Installation)
    - [Introduction](#Introduction)
    - [Packaging Configuration](#Packaging Configuration)
- [Example](#Example)
    - [Basic Usage](#Basic Usage)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Third-Party Components**, **Block-Level Display**

This component encapsulates [highlight.js](https://highlightjs.org/usage/) to facilitate code highlighting.

## Installation Configuration
### Install

``` Shell
npm i --save @cloud-ui/x-highlight.vue
```

### Import

Direct registration

```js
import XHighlight from '@cloud-ui/x-highlight.vue';

Vue.component('x-highlight', XHighlight);
```

Or use kubevue-utils to install (often used to install multiple components at the same time)

```js
import { install } from 'kubevue-utils';
import XHighlight from '@cloud-ui/x-highlight.vue';

install(Vue, { XHighlight });
```

### Packaging Configuration

Since the highlight.js package is large, it can be added to the externals in the Webpack configuration.

Or use dll to process it.

## Example
### Basic Usage

Set the `lang` and `content` properties on the component.

In order to control the package size, we did not import the full package. When using it, you need to import the language package and style package yourself according to the following method.

```js
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/tomorrow.css';
```

For more languages and styles, please check the [language directory](https://github.com/highlightjs/highlight.js/tree/master/src/languages) and [style directory](https://github.com/highlightjs/highlight.js/tree/master/src/styles) in the source code.

Below is an example of javascript.

``` vue
<template>
<x-highlight lang="javascript" :content="content"></x-highlight>
</template>

<script>
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default {
    data() {
        return {
            content: `
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
    return flatten;
});
            `,
        };
    },
};
</script>
```

The following is an example of html. The language package name of html is xml.

``` vue
<template>
<x-highlight lang="html" :content="content"></x-highlight>
</template>

<script>
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

export default {
    data() {
        return {
            content: `
<div class="app">
    <button>Button</button>
</div>
            `,
        };
    },
};
</script>
```

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| content | string | | `''` | Original code content |
| lang | string | | `''` | Language |
| auto | boolean | | `false` | Whether to automatically detect the language in the code |
| preRender | Function\<content: string, lang: string\> | | `'this.defaultPreRender'` | Function to process code before rendering |
| postRender | Function\<result: string\> | | `'this.defaultPostRender'` | Function to process the result after rendering |

### Events

#### @before-render

Triggered before rendering

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.content | string | Original code content |
| $event.lang | string | Language |
| $event.result | string | Rendered result |
| $event.preventDefault | Function | Prevent rendering process |
| senderVM | XHighlight | Send event instance |

#### @render

Triggered after rendering

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.content | string | Original code content |
| $event.lang | string | Language |
| $event.result | string | Rendered result |
| senderVM | XHighlight | Send event instance |

Methods

#### render()

Rendering code. Called automatically during initialization and when the `content` property changes.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
