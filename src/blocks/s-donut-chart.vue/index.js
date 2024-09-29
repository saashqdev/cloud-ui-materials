const asyncLib = {
    loaded: false,
};

export default {
    components: {
        XEcharts: () => import(/* webpackChunkName: "echarts" */ '@cloud-ui/x-echarts.vue')
            .then((component) => {
                asyncLib.loaded = true;
                return component;
            }),
    },
    data() {
        return {
            asyncLib,
            options: {
                title: {
                    text: 'Donut Chart Example',
                    x: 'left',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
                },
                legend: {
                    orientation: 'vertical',
                    x: 'right',
                    data: ['Direct Access', 'Email Marketing', 'Affiliate Advertising', 'Video Advertising', 'Search Engine'],
                },
                series: [
                    {
                        name: 'Visit Source',
                        type: 'pie',
                        radius: ['45%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center',
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: 'bold',
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'white',
                        },
                        data: [
                            { value: 335, name: 'Direct Access' },
                            { value: 310, name: 'Email Marketing' },
                            { value: 234, name: 'Affiliate Advertising' },
                            { value: 135, name: 'Video Advertisement' },
                            { value: 1548, name: 'Search Engine' },
                        ],
                    },
                ],
            },
        };
    },
};
