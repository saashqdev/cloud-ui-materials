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
                    text: 'Pie Chart Example',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orientation: 'vertical',
                    left: 'left',
                    data: ['Direct Access', 'Email Marketing', 'Affiliate Advertising', 'Video Advertising', 'Search Engine'],
                },
                series: [
                    {
                        name: 'Access Source',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: 'Direct Access' },
                            { value: 310, name: 'Email Marketing' },
                            { value: 234, name: 'Affiliate Advertising' },
                            { value: 135, name: 'Video Advertisement' },
                            { value: 1548, name: 'Search Engine' },
                        ],
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'white',
                        },
                    },
                ],
            },
        };
    },
};
