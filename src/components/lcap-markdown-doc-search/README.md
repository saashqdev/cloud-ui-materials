<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapMarkdownDocSearch Document Search Box

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Other**

Please add description here

## Example
### Basic Usage

``` vue
<template>
<div>

  <lcap-markdown-doc-search
    ref="search"
    placeholder="Please enter"
    :value.sync="value"
    :data-source="suggestions"
    text-field="highlightedTitle"
    description-field="highlightedContent"
    @input="onInput"
    @change="onChange"
  ></lcap-markdown-doc-search>

  <button @click="onSearch">Search</button>  
</div> 


</template>

<script>
export default {
  data() {
    return {
      value: '',
      suggestions: []
    }
  },

  methods: {
    onSearch() {
      this.$refs.search.focus()
    },
    fetchData(keywords) {
      setTimeout(() => {
        if (!keywords) {
          this.suggestions = [];
        } else {
        this.suggestions = [
        {
          "esId": "2614959179281664",
          "highlightedContent": "<mark>Component</mark> List This <mark>Component</mark> can dynamically display other <mark>Components</mark> according to dynamic data sources, such as looping and displaying N texts/labels according to list data. <mark>Component</mark> Description Properties«For <mark>Component</mark> general properties, please refer to <mark>Component</mark> General Description.» Data Properties«For <mark>Component</mark> data source, data type, and initial loading properties, please refer to <mark>Component</mark> data source description.» Style Properties- Number of items per row: Supports defining the number of items per row. When empty, it will adapt to the width and automatically wrap.",
          "highlightedTitle": "<mark>Components</mark> List"
        },
          
          {"esId":"2614959176684800","highlightedContent":"<mark>Component</mark>General Description Each <mark>Component</mark> contains properties, events, and styles. Most of the functions and settings are the same. This section describes the common properties of <mark>Component</mark> in detail. Basic property information - <mark>Component</mark> name: It consists of letters, numbers, and underscores. It is used for reference in expressions, permission reporting, and other scenarios. - Whether to control permissions: You can set permissions based on roles, and hide the <mark>component</mark> from users with roles without permissions. Before setting permissions, you must first set the <mark>component</mark> name. ","highlightedTitle":"General description of components"},{"esId":"2614959180682496","highlightedContent":"Example: Use the <mark>component</mark> list to achieve an effect of displaying 6 labels per row. 1. Drag the <mark>component</mark> list into the page. 2. Bind the data source and set the number of items per row. 3. Drag the label <mark>component</mark> into the page. 4. Set the value of the label <mark>component</mark>. 5. Effect display","highlightedTitle":"Component list"},{"esId":"2614959180272896","highlightedContent":"- Read-only: Set the multi-line input <mark>component</mark> to read-only. - Disable: Set the multi-line input <mark>component</mark> to be disabled and grayed out and cannot be edited. <mark>component</mark> events - Support basic gesture events: get focus and lose focus. ","highlightedTitle":"Multi-line input"},{"esId":"2614959178183936","highlightedContent":"- Disable: Disable the switch. After turning it on, the mouse cannot be clicked when it moves into the <mark>component</mark> area, and a disabled mark will be displayed. - Label: Customized prompt text at the top. - Flag: Whether there is a flag in the upper right corner. Events - Breadcrumbs <mark>component</mark> supports <mark>component</mark> events. - <mark>component</mark> events: before selection, input, after selection, after change. - Breadcrumbs options support mouse events and <mark>component</mark> events. - Mouse event: click. - <mark>component</mark> events: before selection. Style For style description, please refer to the <mark>component</mark> general description. ","highlightedTitle":"Capsule"},{"esId":"2614959177823488","highlightedContent":"<mark>Component</mark>Description Attributes«<mark>Component</mark>General Attributes, please refer to <mark>Component</mark>General Description. » - Identifier: The unique identifier of the anchor, used for jump links. Event anchor<mark>Component</mark> does not support setting events. Style style description, please refer to <mark>Component</mark>General Description. Notes- The anchor<mark>Component</mark> is an empty container by default, and supports dragging in other<mark>Components</mark> without affecting the normal jump function of the anchor. - The anchor<mark>Component</mark> is not displayed directly after release. Case function requirements are matched with the directory<mark>Component</mark> to realize the jump to the specified position of the anchor. Operation steps 1.","highlightedTitle":"Anchor"},{"esId":"2614959180559616","highlightedContent":"| Event name| Trigger condition| | -------- | ------------------------ | | Get focus| Triggered when the multi-line <mark>component</mark> input box is focused| | Lose focus| Triggered when the multi-line <mark>component</mark> input box loses focus| - Support input <mark>component</mark> Common <mark>component</mark> events: before input, after change, after clearing. ","highlightedTitle":"Single-line input"},{"esId":"2614959179961600","highlightedContent":"General description of <mark>component</mark> Each <mark>component</mark> contains properties, events, and styles. Most of the functions and settings are the same. This section describes the general properties of <mark>component</mark> in detail. Basic property information - <mark>Component</mark> name: composed of letters, numbers and underscores, used for reference in expressions, permission reporting and other scenarios. - Whether to control permissions: permissions can be set according to roles, and the <mark>Component</mark> can be hidden from users with roles without permissions. Before setting permissions, the <mark>Component</mark> name must be set first. ","highlightedTitle":"General description of components"},{"esId":"2614959177340160","highlightedContent":"You can customize the badge by adding <mark>components</mark>. <mark>Components</mark> Description Properties«For <mark>Components</mark> common properties, please refer to <mark>Components</mark> General Description.» - Value: The current number of reminder messages, supporting dynamic binding. - Maximum value: The maximum value of the reminder message. If the maximum value is exceeded, the exact number will no longer be displayed, and the maximum value + will be used instead, such as 99+. - Insert in the upper right corner: When turned on, the reminder badge position is displayed in the upper right corner, and when turned off, the reminder badge is displayed on the right side of the <mark>Component</mark>. Event badge <mark>Component</mark> does not support setting events. Style Style description, please refer to the general description of <mark>component</mark>. ","highlightedTitle":"Badge"},{"esId":"2614959178069248","highlightedContent":"Directory supports the use of the directory <mark>component</mark> to identify the current position in a long page, as well as page jump and other functions. <mark>Component</mark> Description Attributes «For the general attributes of <mark>Component</mark>, please refer to the general description of <mark>Component</mark>. » Directory <mark>Component</mark> - Selected value: After selecting through <mark>Component</mark>, the final selected value supports two-way binding to variables. Directory node - Option value: The attribute used to identify the selected value in the element type of the collection. - Link type: supports page jump, normal link, and download link. - Link address: The detailed address of the link. ","highlightedTitle":"Directory"}];
        }
      }, 0)
    },
    onInput(e) {
      console.log('onInput', e)
      this.fetchData(e)
    },
    onChange(e) {
      console.log('onChange', e)
    }
  }
}
</script>
```


## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | String | | | Input value |
| data-source | Array\<Item\> | | | Search result list data |
| data-schema | schema | | | The data type of each row of the selector |
| text-field | string | | `'text'` | Properties that display the title field of the result item |
| description-field | string | | | Attribute used to display the description field of the result item |
| loading | boolean | | `false` | Used to display loading status |
| align | string | `[object Object]`<br/>`[object Object]` | `'left'` | Undefined |
| clearable | boolean | | | Enable and display the clear button when the input box has content |
| placeholder | string | | | Prompt text when empty |
| maxlength | number |  |  |  |
| autofocus | boolean | | `false` | Whether to automatically obtain focus |
| readonly | boolean | | `false` | |
| disabled | boolean | | `false` | |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object] `<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | Set the width of the single-line input box |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object] `<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | Set the height of the single-line input box |
| prefix | icon | | `''` | |
| suffix | icon | | `''` | |
| border-radius | string | | `'0px'` | Undefined |

### Events

#### @select

Triggered when a result is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | object | Object related to selection item |

#### @before-input

Trigger before input. You can block input at this stage, or modify the value of the input $event.value

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.oldValue | string | Old value |
| $event.value | string | The value of the input box |
| $event.preventDefault | Function | Prevent input flow |

#### @input

Fires on input.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Value of input box |

#### @change

Fires when the value changes. (Note: Different from native events)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.value | string | Changed value |
| $event.oldValue | string | Old value |

#### @focus

Triggered when focus is obtained.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Native event object |

#### @blur

Fired when focus is lost.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Native event object |

#### @before-clear

Triggered before clearing.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.value | string | Cleared value |
| $event.oldValue | string | The value to be cleared |
| $event.preventDefault | Function | Prevent the clearing process |

#### @clear

Triggered after clearing.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.value | string | Cleared value |
| $event.oldValue | string | Old value |

#### @click-prefix

Triggered after clicking the prefix icon

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Mouse event object |

#### @click-suffix

Triggered after clicking the suffix icon

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Mouse event object |

Methods

#### focus()

Let the input box get focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### blur()

Let the input box lose focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

Clear the input box.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

