<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapEchartsLine Line chart

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Methods](#methods)

**Chart**

Line chart

## Example
### Basic Usage

```vue
<template>
  <div>
    <lcap-echarts-line
      ref="line"
      xAxis="fakeXAxis"
      yAxis="Indicator1, Indicator"
      xAxisTitle="Dimension 1111"
      yAxisTitle="Indicator 1222"
      title="title 111"
      theme="theme1"
      legendName="Math"
      :titleFontSize=16
      titleFontStyle="italic"
      :allowDownload=true
      :allowShowHint=true
      :allowShowLegend=true
      :showXAxisLine=true
      :showYAxisLine=true
      :showXAxisLabel=true
      :showYAxisLabel=true
      axisSplitLine="horizontal"
      axisSplitLineType="dashed"
      :areaFilled=false
      lineStyleSymbol="emptyCircle"
      lineStyleSymbolSize="8"
      lineType="dotted"
      lineStyleSmooth='smooth'
      labelPosition="top"
      :initialLoad=false
      undefinedToZero='zero'
      style="--labelFontSize:18px;width: 500px; height:400px; --line-item-color: blue; 
    --label-font-size: 14;
    ">
    </lcap-echarts-line>
    <u-button @click="reload">Reload</u-button>
  </div>
</template>
<script>
export default {
  methods: {
    reload() {
    console.log('reload');
      this.$refs.line.reload();
    }
  }
}
</script>

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
| title | string | | `'title'' | Set chart title |
| axisSplitLine | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'horizontal'` | Set coordinates Tie grid |
| axisSplitLineType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'solid'` | Set the grid line type |
| theme | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'theme1'` | Set chart color scheme |
| labelPosition | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object] `<br/>`[object Object]` | `'top'` | Set data label position |
| allowShowHint | boolean | | `true` | Set whether to display hints |
| allowShowLegend | boolean | | `true` | Set whether to display the legend |
| legendName | string | | `''` | Set the legend alias; after the modification is successful, the legend name will be changed from "Indicator" to "Alias" |
| areaFilled | boolean | | `false` | Set whether to fill the area below the polyline |
| lineType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'solid'` | Set line type |
| lineStyleSmooth | string | `[object Object]`<br/>`[object Object]` | `'normal'` | Set line style |
| lineStyleSymbol | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object] `<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'emptyCircle'` | Undefined |
| xAxisTitle | string | | `'X-axis title'` | Set x-axis title |
| showXAxisLine | boolean | | `true` | Set the X-axis line to be displayed |
| showXAxisLabel | boolean | | `true` | Set whether to display the X-axis text label |
| xAxisLabelRotate | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'0'` | Set display The direction of the X-axis text label |
| yAxisTitle | string | | `'Y-axis title'` | Set Y-axis title |
| showYAxisLine | boolean | | `true` | Set the Y-axis axis line to be displayed |
| showYAxisLabel | boolean | | `true` | Set whether to display the Y-axis numerical label |
| titleFontStyle | string | `[object Object]`<br/>`[object Object]` | `'normal'` | Set the normal text font size |
| allowDownload | boolean | | `true` | Allow users to set saved images |

Methods

#### reload()

Refresh data

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

