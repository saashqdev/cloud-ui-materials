<template>
<div :class="$style.root">
    <cytoscape ref="cy" :config="currentConfig" v-on="$listeners">
        <cy-element v-for="(el, index) in elements" :key="el.data.id !== undefined ? el.data.id : index" :definition="el"></cy-element>
    </cytoscape>
    <cytoscape v-if="legend" :class="$style.legend" ref="legend" :config="legendConfig">
        Legend:<cy-element v-for="(el, index) in legendElements" :key="el.data.label !== undefined ? el.data.label : index" :definition="el"></cy-element>
    </cytoscape>
<!-- <div :class="$style.legend" v-if="legend">
    Legend:<div :class="$style['legend-item']" v-for="item in legend" :key="item.label" :color="item.color">{{ item.label }}</div>
</div> -->
    <slot></slot>
</div>
</template>

<script>
import Vue from 'vue';
import VueCytoscape from 'vue-cytoscape';
Vue.use(VueCytoscape);
import debounce from 'lodash/debounce';

import colors from './colors';
const style = [
    {
        selector: 'node',
        css: {
            label: 'data(id)',
            shape: 'rectangle',
            width: 'label',
            height: 'label',
            padding: 8,
            color: colors['color-base'],
            'font-size': 14,
            'background-color': colors['background-color-base'],
            'border-width': 2,
            'border-color': colors['border-color-base'],
            'text-valign': 'center',
            'text-halign': 'center',
            // 'compound-sizing-wrt-labels': 'include',
        },
    },
    {
        selector: 'node[label]',
        css: {
            label: 'data(label)',
        },
    },

    {
        selector: 'node[shape]',
        css: {
            shape: 'data(shape)',
        },
    },

    {
        selector: ':parent',
        css: {
            'text-valign': 'top',
            'text-halign': 'center',
            'background-opacity': 0,
        },
    },

    {
        selector: 'edge',
        css: {
            'curve-style': 'bezier',
            color: colors['color-base'],
            'font-size': 14,
            width: 2,
            'line-color': colors['color-lighter'],
            'source-arrow-shape': 'none',
            'target-arrow-shape': 'triangle',
            'source-arrow-color': colors['color-lighter'],
            'target-arrow-color': colors['color-lighter'],
            'mid-source-arrow-color': colors['color-lighter'],
            'mid-target-arrow-color': colors['color-lighter'],
            'source-text-offset': 50,
            'target-text-offset': 50,
        },
    },

    {
        selector: 'edge[label]',
        css: {
            label: 'data(label)',
        },
    },

    {
        selector: 'edge[source-label]',
        css: {
            'source-label': (el) => el.data('source-label'),
        },
    },

    {
        selector: 'edge[target-label]',
        css: {
            'target-label': (el) => el.data('target-label'),
        },
    },

    {
        selector: 'edge[curve]',
        css: {
            'curve-style': 'data(curve)',
            'haystack-radius': 1,
            'segment-distances': [50, -50],
            'segment-weights': [0.25, 0.75],
        },
    },

    {
        selector: 'edge[source-arrow]',
        css: {
            'source-arrow-shape': (el) => el.data('source-arrow'),
        },
    },

    {
        selector: 'edge[target-arrow]',
        css: {
            'target-arrow-shape': (el) => el.data('target-arrow'),
        },
    },

    {
        selector: 'edge[mid-source-arrow]',
        css: {
            'mid-source-arrow-shape': (el) => el.data('mid-source-arrow'),
        },
    },

    {
        selector: 'edge[mid-target-arrow]',
        css: {
            'mid-target-arrow-shape': (el) => el.data('mid-target-arrow'),
        },
    },
];

[
    'primary',
    'success',
    'normal',
    'problem',
    'warning',
    'error',
    'danger',
    'disabled',
].forEach((color) => {
    style.push(
        {
            selector: `node[color="${color}"]`,
            css: {
                color: 'white',
                'background-color': colors[`brand-${color}`],
                'border-color': colors[`brand-${color}`],
            },
        },

        {
            selector: `edge[color="${color}"]`,
            css: {
                'line-color': colors[`brand-${color}`],
                'source-arrow-color': colors[`brand-${color}`],
                'target-arrow-color': colors[`brand-${color}`],
                'mid-source-arrow-color': colors[`brand-${color}`],
                'mid-target-arrow-color': colors[`brand-${color}`],
            },
        },
    );
});

export default {
    name: 'u-relations-diagram',
    props: {
        /**
         * type node = { id: string, label: string, parent: string, color: string }
         * type edge = { id: string, source: string, target: string, color: string }
         *
         * type data = {
         *  nodes: Array<node>,
         *  edges: Array<edge>,
         * }
         */ data: Object,
        legend: Array,
        layout: { type: [String, Object], default: 'grid' },
        elementStyle: {
            type: Array,
            default() {
                return [];
            },
        },
        config: Object,
    },
    data() {
        return {
            elements: this.handleData(this.data),
            currentConfig: Object.assign(
                {
                    userZoomingEnabled: false,
                    style: [...style, ...this.elementStyle],
                    minZoom: 0.5,
                    maxZoom: 2,
                },
                this.config,
            ),
            currentLayout: this.handleLayout(this.layout),
            legendConfig: {
                zoomingEnabled: false,
                panningEnabled: false,
                boxSelectionEnabled: false,
                autoungrabify: true, // autolock: true,
                autounselectify: true,
                style: [
                    ...style,
                    ...this.elementStyle,
                    {
                        selector: 'node',
                        css: {
                            label: 'data(label)',
                            width: 'label',
                            height: '2',
                            'font-size': 12,
                            padding: 10,
                        },
                    },
                ],
                minZoom: 0.5,
                maxZoom: 2,
            },
            legendElements: this.handleLegend(this.legend),
        };
    },
    watch: {
        data(data) {
            this.elements = this.handleData(data);
        },
        layout(layout) {
            this.currentLayout = this.handleLayout(layout);
            this.debouncedRunLayout();
        },
    },
    mounted() {
        this.debouncedRunLayout = debounce(
            () => setTimeout(() => this.runLayout(), 20),
            80,
        );
        window.addEventListener('resize', this.debouncedRunLayout); // Even when mounted, the width of the container may be 0, so setTimeout must be added.
        setTimeout(() => {
            this.runLayout();
            if (!this.legend) return;
            const legend = this.$refs.legend.instance;
            legend
                .layout({
                    fit: false,
                    name: 'grid',
                    rows: 1,
                    condense: true,
                    padding: 0,
                })
                .run();
        }, 60);
    },
    destroyed() {
        window.removeEventListener('resize', this.debouncedRunLayout);
    },
    methods: {
        handleData(data) {
            if (!data) {
                return [];
            } else {
                const KEYWORDS = [
                    'position',
                    'selected',
                    'selectable',
                    'locked',
                    'grabbable',
                    'pannable',
                ];
                const elements = [];
                data.nodes &&
                    data.nodes.forEach((node, index) => {
                        const el = Object.assign({}, node);
                        const elData = Object.assign({}, node);
                        Object.keys(el).forEach((key) => {
                            if (KEYWORDS.includes(key)) delete elData[key];
                            else delete el[key];
                        });
                        el.data = elData;
                        elements.push(el);
                    });
                data.edges &&
                    data.edges.forEach((node) => {
                        const el = Object.assign({ selectable: false }, node);
                        const elData = Object.assign({}, node);
                        Object.keys(el).forEach((key) => {
                            if (KEYWORDS.includes(key)) delete elData[key];
                            else delete el[key];
                        });
                        el.data = elData;
                        elements.push(el);
                    });
                return elements;
            }
        },
        handleLayout(layout) {
            if (typeof layout === 'string') return { name: layout };
            else return layout;
        },
        runLayout() {
            const cy = this.$refs.cy.instance;
            const layout = cy.layout(this.currentLayout);
            layout.run();
        },
        handleLegend(legend) {
            const elements = [];
            legend &&
                legend.forEach((node, index) => {
                    const el = { data: node };
                    elements.push(el);
                });
            return elements;
        },
    },
};
</script>

<style module>
.root {
    position: relative;
}

.legend {
    width: 100%;
    pointer-events: none;
    padding-left: 20px;
}

.legend > div {
    display: inline-block;
    vertical-align: -10px;
    width: 80%;
    min-height: 32px !important;
}

.legend-item {
    display: inline-block;
    padding: 0 12px;
    background: var(--background-color-base);
    border: 2px solid var(--border-color-base);
}

.legend-item + .legend-item {
    margin-left: 10px;
}

.legend-item[color="primary"] {
    color: white;
    background: var(--brand-primary);
    border-color: var(--brand-primary);
}

.legend-item[color="success"] {
    color: white;
    background: var(--brand-success);
    border-color: var(--brand-success);
}

.legend-item[color="normal"] {
    color: white;
    background: var(--brand-normal);
    border-color: var(--brand-normal);
}

.legend-item[color="problem"] {
    color: white;
    background: var(--brand-problem);
    border-color: var(--brand-problem);
}

.legend-item[color="warning"] {
    color: white;
    background: var(--brand-warning);
    border-color: var(--brand-warning);
}

.legend-item[color="error"] {
    color: white;
    background: var(--brand-error);
    border-color: var(--brand-error);
}

.legend-item[color="danger"] {
    color: white;
    background: var(--brand-error);
    border-color: var(--brand-error);
}

.legend-item[color="disabled"] {
    color: white;
    background: var(--brand-disabled);
    border-color: var(--brand-disabled);
}
</style>
