<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# LcapXEcharts Baidu Charts

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Add Border](#Add border)
    - [Set Width and Height](#Set width and height)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Computed](#computed)
    - [Events](#events)
    - [Methods](#methods)

**Chart**

This component mainly adds a theme to Echarts, as well as several common CSS functions.

For more examples, please refer to [official examples](https://www.echartsjs.com/examples/en/index.html),

For more configuration items, please refer to [official configuration items](https://www.echartsjs.com/en/option.html),

For more details, please refer to [Echarts API documentation](https://echarts.apache.org/en/api.html).

## Example
### Basic usage

``` vue
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
                    dataset:
                        // Provide data.
                        source: [
                            ['Product', '2015', '2016', '2017'],
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

``` vue
<template>
<lcap-x-echarts :options="options"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options:
                title:
                    text: 'Pie Chart Example',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend:
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

``` vue
<template>
<lcap-x-echarts border :options="options"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options:
                title:
                    text: 'Donut Chart Example',
                    x: 'left',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend:
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
                            emphasis:
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine:
                            normal: {
                                show:false
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

``` vue
<template>
<lcap-x-echarts border :options="options" style="width: 420px; height: 240px;"></lcap-x-echarts>
</template>
<script>
export default {
	data() {
		return {
			options:
                title:
                    text: 'Donut Chart Example',
                    x: 'left',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend:
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
                            emphasis:
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine:
                            normal: {
                                show:false
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

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| init-options | object | | | Initialize instance |
| options | object | | | The data of the ECharts instance. Modifying this prop will trigger the `setOption` method of the ECharts instance. If you modify the data bound to `options` directly and the object reference remains unchanged, the `setOption` method will be called with the parameter `notMerge: false`. Otherwise, if you bind a new object to `options`, the `setOption` method will be called with the parameter `notMerge: true`. |
| theme | string | | | Set theme |
| group | string | | | The instance group will be automatically bound to the property of the same name in the ECharts component. |
| autoresize | boolean | | `true` | Specifies whether the ECharts instance needs to be automatically redrawn when the size of the component's root element changes. |
| manual-update | boolean | | `false` | In performance-sensitive (large amounts of data) scenarios, it is best to bypass Vue's responsive system for the `options` prop. When `manual-update` prop is specified as `true` and no `options` prop is passed, data will not be monitored. Then, you need to use `ref` to get the component instance and then manually call the `mergeOptions` method to update the chart. |
| border | boolean | | `false` | Whether to add a border |

Computed

| Computed | Type | Description |
| -------- | ---- | ----------- |
| width | number | Used to get the current width of the ECharts instance. |
| height | number | Used to get the current height of the ECharts instance. |
| computedOptions | object | Used to read the actual data after ECharts updates the internal `options`. |

### Events

#### @legendselectchanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @legendselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @legendunselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @legendscroll



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @datazoom



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @datarangeselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @timelinechanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @timelineplaychanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @restore



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @dataviewchanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @magictypechanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @geoselectchanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @geoselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @geounselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @pieselectchanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @pieselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @pieunselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mapselectchanged



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mapselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mapunselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @axisareaselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @focusnodeadjacency



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @unfocusnodeadjacency



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @brush



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @brushselected



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @rendered



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @finished



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @click



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @dblclick



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mouseover



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mouseout



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mousemove



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mousedown



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @mouseup



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @globalout



| Param | Type | Description |
| ----- | ---- | ----------- |

#### @contextmenu



| Param | Type | Description |
| ----- | ---- | ----------- |

Methods

#### mergeOptions()

(The underlying `setOption` method of the ECharts instance is called) provides a more appropriate name to describe the actual behavior of the `setOption` method.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### appendData()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### resize()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### dispatchAction()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### showLoading()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### hideLoading()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### convertToPixel()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### convertFromPixel()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### containPixel()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### getDataURL()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### getConnectedDataURL()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### dispose()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### connect()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### disconnect()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### registerMap()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### registerTheme()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### graphic.clipPointsByRect()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### graphic.clipRectByRect()



| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
