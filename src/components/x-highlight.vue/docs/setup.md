### Install

``` shell
npm i --save @cloud-ui/x-highlight.vue
```

### Introduction

Register directly

``` js
import XHighlight from '@cloud-ui/x-highlight.vue';

Vue.component('x-highlight', XHighlight);
```

Or use kubevue-utils to install (commonly used to install multiple components at the same time)

``` js
import { install } from 'kubevue-utils';
import XHighlight from '@cloud-ui/x-highlight.vue';

install(Vue, { XHighlight });
```

### Packaging configuration

Since the highlight.js package is large, it can be added to externals in the Webpack configuration.

Or use dll for processing.
