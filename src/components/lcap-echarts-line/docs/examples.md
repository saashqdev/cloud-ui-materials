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
      title="Title 111"
      theme="theme1"
      legendName="Mathematics"
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


