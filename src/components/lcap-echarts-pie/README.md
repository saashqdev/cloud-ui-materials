<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapEchartsPie Pie Chart

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Methods](#methods)

**Chart**

Pie Chart

## Example
### Basic Usage

```html
<lcap-echarts-pie
    theme=""  
    xAxis="fakeXAxis" 
    yAxis="Indicator 1"
    :titleFontSize=18
    titleFontStyle="normal"
    :allowDownload=true
    :allowShowHint=true
    :allowShowLegend=true
    legendName="Mathematics"
    :showLabelName=true
    :showLabelValue=true
    :showLabelPercent=true
    legendScroll="scroll"
    legendPosition="top"
    undefinedToZero="empty"
    pieType="semiCircle"
    style="--pie-sectors-border-color: red; --label-font-color: blue;"
></lcap-echarts-pie>

```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object \| DataSource | | | The data source of the table, the data set object or the logic of returning the data set |
| data-schema | schema | | | The data type of each row of the table |
| undefinedToZero | string | `[object Object]`<br/>`[object Object]` | `'empty'` | Set to convert undefined values   such as undefined and null to 0 or empty space |
| initialLoad | boolean | | `true` | Whether to load immediately during initialization |
| xAxis | string | | `''` | Set dimension (statistical category) |
| yAxis | string | | `''` | Set measure (statistical value) |
| title | string | | `'Title'` | Set the main title |
| theme | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'theme1'` | Set chart color scheme |
| showLabelName | boolean | | `true` | Set whether to display dimension labels |
| showLabelValue | boolean | | `true` | Set whether to display numerical labels |
| showLabelPercent | boolean | | `true` | Set whether to display the percentage label |
| allowShowHint | boolean | | `true` | Set whether to display hints |
| allowShowLegend | boolean | | `true` | Set whether to display the legend |
| legendPosition | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'bottom'` | Set legend Location |
| legendScroll | string | `[object Object]`<br/>`[object Object]` | `'normal'` | Set whether the legend scrolls |
| pieType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'pie'` | Undefined |
| titleFontStyle | string | `[object Object]`<br/>`[object Object]` | `'normal'` | Set the normal text font size |
| allowDownload | boolean | | `true` | Allow users to set saved images |

Methods

#### reload()

Refresh data

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

