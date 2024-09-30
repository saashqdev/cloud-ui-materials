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
