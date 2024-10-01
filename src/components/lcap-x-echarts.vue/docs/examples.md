### Basic Usage

``` view
<template>
<lcap-x-echarts :options="options"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options: (() => {
                function randomize() {
                    return [0, 0, 0].map((v) => Math.round(300 + Math.random() * 700) / 10);
                }

                return {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        // Provide data.
                        source: [
                            ['Product', '2022', '2023', '2024'],
                            ['Matcha Latte', ...randomize()],
                            ['Milk Tea', ...randomize()],
                            ['Cheese Cocoa', ...randomize()],
                            ['Walnut Brownie', ...randomize()],
                        ],
                    },
                    // Declare X axis, which is a category axis, mapping
                    // to the first column by default.
                    xAxis: { type: 'category' },
                    // Declare Y axis, which is a value axis.
                    yAxis: {},
                    // Declare several series, each of them mapped to a
                    // column of the dataset by default.
                    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
                };
            })(),
		}
	}
};
</script>
```

``` view
<template>
<lcap-x-echarts :options="options"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options: {
                title: {
                    text: 'Pie Chart Example',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['Direct Access', 'Email Marketing', 'Affiliate Advertising', 'Video Advertising', 'Search Engine'],
                },
                series: [
                    {
                        name: 'Access source',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: 'Direct Access' },
                            { value: 310, name: 'Email Marketing' },
                            { value: 234, name: 'Alliance Advertising' },
                            { value: 135, name: 'Video Ad' },
                            { value: 1548, name: 'Search Engine' },
                        ],
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'white',
                        },
                    },
                ],
            },
		}
	}
};
</script>
```

### Adding a Border

The default ECharts has no border, but for convenience, it is implemented in the component.

Just turn on the `border` property.

``` view
<template>
<lcap-x-echarts border :options="options"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options: {
                title: {
                    text: 'Donut Chart Example',
                    x: 'left',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data:['Direct Access', 'Email Marketing', 'Affiliate Advertising', 'Video Advertising', 'Search Engine']
                },
                series: [
                    {
                        name:'Access Source',
                        type:'pie',
                        radius: ['45%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'white',
                        },
                        data:[
                            { value: 335, name: 'Direct Access' },
                            { value: 310, name: 'Email Marketing' },
                            { value: 234, name: 'Alliance Advertising' },
                            { value: 135, name: 'Video Ad' },
                            { value: 1548, name: 'Search Engine' },
                        ],
                    },
                ],
            },
        };
	},
};
</script>
```

### Set the Width and Height

Add the `style` attribute directly.

``` view
<template>
<lcap-x-echarts border :options="options" style="width: 420px; height: 240px;"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options: {
                title: {
                    text: 'Donut Chart Example',
                    x: 'left',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data:['Direct Access', 'Email Marketing', 'Affiliate Advertising', 'Video Advertising', 'Search Engine']
                },
                series: [
                    {
                        name:'Access Source',
                        type:'pie',
                        radius: ['60%', '80%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'white',
                        },
                        data:[
                            { value: 335, name: 'Direct Access' },
                            { value: 310, name: 'Email Marketing' },
                            { value: 234, name: 'Alliance Advertising' },
                            { value: 135, name: 'Video Ad' },
                            { value: 1548, name: 'Search Engine' },
                        ],
                    },
                ],
            },
        };
	},
};
</script>
```