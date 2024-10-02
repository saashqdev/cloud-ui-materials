### Basic Usage

Set the `lang` and `content` properties on the component.

In order to control the package size, we did not introduce full packages. When using it, you need to introduce the language pack and style pack yourself as follows.

``` js
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/tomorrow.css';
```

For more languages   and styles, you can view the [Language Directory](https://github.com/highlightjs/highlight.js/tree/master/src/languages) and [Style Directory](https://github.com) in the source code /highlightjs/highlight.js/tree/master/src/styles).

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

The following is an example of a piece of html. The language pack name of html is xml.

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
