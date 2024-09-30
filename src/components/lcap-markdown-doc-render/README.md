<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapMarkdownDocRender Document Rendering Component

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Other**

Component that renders Markdown documents

## Example
### Basic Usage

``` vue
<template>
  <lcap-markdown-doc-render :text="text"></lcap-markdown-doc-render>
</template>

<script>
export default {
  data() {
    return {
      text: undefined
    }
  },
  created() {
    setTimeout(() => {
      this.text = '# Selection box\n\nDrop-down selection box, supports single selection, multiple selection, search and other functions\n\n## Concept description\n\n### Properties\n\n> For general properties of components, please refer to [General description of components](99. Reference/40. Page IDE/30. Page components/05. PC page basic components/000. General description of components.md). \n\n#### Selection box\n- Value: The currently selected value. \n- Data source: Supports dynamic binding of collection type variables (List\\<T>) or logic whose output parameters are collection types. \n\n > The tree selector supports static addition of fixed sub-items. In this case, there is no need to bind a data source. \n\n- Data type: This property is read-only. When the data source dynamically binds the collection List\\<T>, it will automatically identify the type of T and display it. \n\n- Text field: In the element type of the collection, the property name used to display text supports custom changes. \n\n- Value field: In the element type of the collection, it is used to identify the attribute of the selected value. Custom changes are supported. \n\n- Text description field: In the element type of the collection, it is used to display the attribute name of the auxiliary description below the text. \n- Multiple selection: whether multiple selections are allowed. \n- Converter: Convert the selected value to string format with the selected symbol as the connector; select "json" to convert it to JSON string format. \n- Placeholder: The prompt message when the selection box has no content. Custom editing is supported. The default is "Please select". \n- Display no data prompt: whether to display the text prompt of no data when the data is empty. \n- No data text: The text when there is no data. \n- Automatically disable if empty: Automatically disable when there is no data. \n- Load at initialization: whether to load immediately at the initialization. \n- Load more by paging: whether to use the paging function to load more. \n- Backend paging: Control whether to use backend paging. Custom paging is not supported. The default is 50. \n- Clear button: Controls whether to display the clear button, and supports one-click clearing of the selected content. \n- Filterable: After turning it on, you can enter text in the selection box for filtering. \n- Backend filtering: Whether to use backend filtering. \n- Matching method: Supports matching mode when configuring filtering, with a total of 3 modes: include, match start or match end. \n- Complete data of selected value: When the drop-down list is paging or loading more, this field needs to be used to echo the data in the selection box. The format is [{text:\'text\',value:\'value\'}]. \n\n- Read-only: Read-only switch. After turning it on, the corresponding component cannot be selected. \n- Disable: Disable switch. After turning it on, the mouse cannot be clicked when it moves into the component area, and a disabled mark will be displayed. \n- Width: Set the width of the selection box. Supports 6 modes: full, huge, large, medium, normal, and small. \n- Height: Set the height of the selection box. Supports 6 modes: full, huge, large, medium, normal, and small. \n- Popup status: When the drop-down box is loaded when it is turned on, the drop-down box will pop up automatically, and it is closed by default. \n- Automatic focus: Controls whether to focus on this component when entering the page. \n- Prefix icon: Supports adding prefix icons, such as search icons. \n- Suffix icon: Supports adding suffix icons, such as search icons. \n- Popup layer display position: Set which element to add to. \n### Select item\n- Option value: The value of this item. \n- Option text: The display value of this item. \n- Option text description: Auxiliary description of the option text, displayed below the option text. \n- Disable this item: This item is not selectable, and it is closed by default. \n- Related objects: Related objects. When this item is selected, the thrown event will pass the object for easy development. \n### Selection group\n- Title: Title of the selection group. Title only works when there is no text slot\n\n### Divider\nThe divider has no attributes. It is usually used to divide the selection items. It is only used for display\n\n\n\n\n\n\n\n### Event\n\n- The selection box option supports mouse events and component events. \n - Mouse events: lose focus. \n - Component events: before selection, when selecting, after selection, after change, before popup, after popup, before closing, after closing, before loading, after loading, click prefix icon, click suffix icon, before search\n\n### Style\n\nFor style description, please refer to [Component General Description] (99. Reference/40. Page IDE/30. Page Component/05. PC Page Basic Component/000. Component General Description.md). \n\n#### Theme style\n- Drop-down box background color\n - popper-item-background: Select box drop-down item background color, such as #223325. Default value inherit. \n - popper-item-background-hover: Select box drop-down item background color (hover state), such as #223325. Default value #ededed. \n - popper-item-background-selected: Select box drop-down item background color (disabled state), such as #223325. Default value #5c98ff. \n- Drop-down box font color\n - popper-item-color: Select box drop-down item font color, such as #223325. Default value inherit. \n - popper-item-color-hover: Select box drop-down item font color (hover state), such as #223325. Default value inherit. \n - popper-item-color-selected: font color of the drop-down item in the selection box (selected state), such as #223325. Default value white. \n- width\n - width: width of the selection box, such as 1px. Default value 240px. \n- height\n - height: height of the selection box, such as 1px. Default value 32px. \n- horizontal padding\n - padding-x: horizontal padding of the selection box, such as 1px. Only the left and right margins are set here. You can fill in 1 value or 2 values. Default value 10px. \n- background color\n - background: background color of the selection box, such as #223325. Default value #fff. \n- border\n - border-width: border width of the selection box, such as 1px. Default value 1px. \n - border-color: border color of the selection box, such as #223325. Default value #e5e5e5. \n- Font\n - color: font color of the selection box, such as #223325. Default value #333. \n- Popup\n - popper-max-height: maximum height of the selection box popup, such as 1px. Default value 194px. \n - popper-box-shadow: shadow effect of the selection box popup, such as 1px. Default value 0 0 4px rgba(3, 3, 3, .1). \n - popper-background: background color of the selection box popup, such as #223325. Default value white. \n - popper-border-color: border color of the selection box popup, such as #223325. Default value #e5e5e5. \n - popper-border-color-inverse: border color of the Inverse selection box popup, such as #223325. Default value #212123. \n - box-shadow-focus: The shadow effect of the pop-up border of the selection box, such as 2px 2px 2px 1px rgba(0, 0, 0, 0.2). The default value is 0 0 0 2px rgba(77, 136, 255, 0.2). \n- Placeholder\n - placeholder-color: The placeholder text color of the selection box, such as #223325. The default value is #ccc. \n- Drop-down arrow\n - arrow-color: The drop-down arrow color of the selection box, such as #223325. The default value is #999. \n - arrow-size: The drop-down arrow size of the selection box, such as 1px. The default value is 18px. \n - arrow-right-ratio: The right margin calculation multiple of the drop-down arrow of the selection box, such as 1. The default value is 0.6. \n- Status color\n - status-color: The status color of the selection box, such as #223325. The default value is #999. \n- Read-only status\n - popper-item-color-readonly: The font color of the drop-down item of the selection box (in read-only state), such as #223325. The default value is inherit. \n - popper-item-background-readonly: The background color of the selection box drop-down item (in read-only state), such as #223325. The default value is none. \n- Disabled state\n - popper-item-color-selected-disabled: The font color of the selection box drop-down item (in disabled state), such as #223325. The default value is inherit. \n - popper-item-background-selected-disabled: The background color of the selection box drop-down item (in disabled state), such as #223325. The default value is #ededed. \n- Multiple selection state\n - popper-item-color-duplicated: The font color of the selection box drop-down item (in multiple selection state), such as #223325. The default value is inherit. \n - popper-item-background-duplicated: The background color of the selection box drop-down item (in multiple selection state), such as #223325. The default value is none. \n - popper-item-color-duplicated-hover: font color of the drop-down items in the selection box (in the hover state of multiple selections), such as #223325. The default value is inherit. \n - popper-item-background-duplicated-hover: background color of the drop-down items in the selection box (in the hover state of multiple selections), such as #223325. The default value is #ededed. \n\n\n## Example\n\n### A selection box with a clear button\nSet a data source\n```\nthis.variable3=[{name:"john",value:"john"},{name:"jom",value:"jom"}]\n```\n\nSelect the selector node\n\n![image-202303037](http://dev.cydoccenter01.defaulttenant.lcap.hatest.s3.amazonaws.com/libraryUpload/app/image-202303037_20230515215020142.png)\n\nEffect diagram\n\n![image-202303038](https://kubeworkz.s3.amazonaws.com/libraryUpload/app/VisualDataQuery_20230615210615785.png)\n';
    }, 2000)
  }
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string | | `''` | The text that needs to be passed in |
| scrollContainer | string | `[object Object]`<br/>`[object Object]` | `'window'` | Container that monitors document scrolling |
| outline-position-top | number | | `200` | Valid when the scroll container is a window |
| outline-position-right | number | | `0` | Valid when the scroll container is a window |

### Events

#### @link

Event triggered when a link is clicked

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Link address |

