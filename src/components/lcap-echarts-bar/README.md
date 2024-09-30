<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapEchartsBar Bar Chart

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Methods](#methods)

**Chart**

Bar chart

## Example
### Basic Usage

```html
<lcap-echarts-bar 
    xAxis="fakeXAxis" 
    yAxis="Indicator 1, Indicator 2, Indicator 3"
    xAxisTitle="Dimension"
    yAxisTitle="Indicator"
    title="title"
    theme="theme3"
    legendName="Mathematics, Swedish, English"
    :titleFontSize=16
    titleFontStyle="italic"
    :allowDownload=true
    :allowShowHint=true
    :allowShowLegend=true
    axisSplitLine="both"
    axisSplitLineType="solid"
    labelPosition="inside"
    undefinedToZero='empty'
    :showXAxisLine=true
    :showYAxisLine=true
    :showXAxisLabel=true
    :showYAxisLabel=true
    xAxisType="xBase"
    xAxisLabelRotate="0">
</lcap-echarts-bar>
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
| xAxisType | string | `[object Object]`<br/>`[object Object]` | `'xBase'` | Undefined |
| axisSplitLine | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'horizontal'` | Set coordinates Tie grid |
| axisSplitLineType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'solid'` | Set the grid line type |
| labelPosition | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object] `<br/>`[object Object]` | `'inside'` | Set data label position |
| title | string | | `'Title'` | Set the main title |
| theme | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'theme1'` | Set chart color scheme |
| allowShowHint | boolean | | `true` | Set whether to display hints |
| allowShowLegend | boolean | | `true` | Set whether to display the legend |
| legendName | string | | `''` | Set the legend alias; after the modification is successful, the legend name will be changed from "Indicator" to "Alias" |
| xAxisTitle | string | | `'X-axis title'` | Set x-axis title |
| showXAxisLine | boolean | | `true` | Set whether to display the X-axis line |
| showXAxisLabel | boolean | | `true` | Set whether to display the X-axis text label |
| xAxisLabelRotate | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'0'` | Set display The direction of the X-axis text label |
| yAxisTitle | string | | `'Y-axis title'` | Set Y-axis title |
| showYAxisLine | boolean | | `true` | Set whether to display the Y-axis axis line |
| showYAxisLabel | boolean | | `true` | Set whether to display the Y-axis numerical label |
| titleFontStyle | string | `[object Object]`<br/>`[object Object]` | `'normal'` | Set the normal text font size |
| allowDownload | boolean | | `true` | Allow users to set saved images |

Methods

#### reload()

Refresh data

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

