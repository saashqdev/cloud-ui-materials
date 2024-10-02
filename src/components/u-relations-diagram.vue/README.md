<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# URelationsDiagram

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Legend and Color Scheme](#Legend and Color Scheme)
    - [Node Shape](#Node shape)
    - [Curve Type](#Curve Type)
    - [arrow Type](#arrow type)
    - [Custom Style](#Custom Style)
    - [Events](#Events)
    - [Placement](#Placement)
    - [Complex Example](#Complex Example)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

Based on [Cytoscape.js](https://js.cytoscape.org), pass in node and edge data to express Canvas graphs of various relationships.

## Example
### Basic Usage

Pass the data for `nodes` and `edges` in the `data` attribute.

Use the `layout` property to set the layout. The options are:
- null
- random
- preset
- grid
- circle
- concentric
- breadthfirst
- things

However, you generally need to set layout parameters, see [Cytoscape.js - Layouts](https://js.cytoscape.org/#layouts) for details.

The original Cytoscape.js node is simplified:

``` ts
interface node {
    id: string, // node id
    label: string, // Node label, if not filled in, it will be displayed as id
    parent: string, // parent node in combination
    color: string, // color scheme
    position: { x: number, y: number }, // Initialize position
};
interface edge {
    id: string, // node id and name
    source: string, // starting node
    target: string, // target node
    color: string, // color scheme
    label: string, // edge label
    'source-label': string, // The starting label of the edge
    'target-label': string, // End label of edge
    curve: string, // curve type
    'source-arrow': string, // The starting arrow type of the edge
    'target-arrow': string, // The end arrow type of the edge
    'mid-source-arrow': string, // The middle starting arrow type of the edge
    'mid-target-arrow': string, // The middle end arrow type of the edge
};
```

``` html
<u-relations-diagram :data="{
    nodes: [
        { id: 'n0' },
        { id: 'n1' },
        { id: 'n2' },
        { id: 'n3' },
        { id: 'n4' },
    ],
    edges: [
        { source: 'n0', target: 'n2' },
        { source: 'n2', target: 'n4' },
        { source: 'n4', target: 'n1' },
        { source: 'n1', target: 'n3' },
        { source: 'n3', target: 'n0' },
    ],
}" :layout="{
    name: 'circle',
}"></u-relations-diagram>
```

### Legend and Color Scheme

Use the `legend` property to add a legend and the `color` property to set the color of a node or edge.

This component adapts a color scheme based on the Cloud UI theme.

``` html
<u-relations-diagram :data="{
    nodes: [
        { id: 'default' },
        { id: 'primary', color: 'primary' },
        { id: 'success', color: 'success' },
        { id: 'normal', color: 'normal' },
        { id: 'problem', color: 'problem' },
        { id: 'warning', color: 'warning' },
        { id: 'error', color: 'error' },
        { id: 'danger', color: 'danger' },
        { id: 'disabled', color: 'disabled' },
    ],
    edges: [
        { source: 'default', target: 'primary' },
        { source: 'primary', target: 'success', color: 'primary' },
        { source: 'success', target: 'normal', color: 'success' },
        { source: 'normal', target: 'problem', color: 'normal' },
        { source: 'problem', target: 'warning', color: 'problem' },
        { source: 'warning', target: 'error', color: 'warning' },
        { source: 'error', target: 'danger', color: 'error' },
        { source: 'danger', target: 'disabled', color: 'danger' },
        { source: 'disabled', target: 'default', color: 'disabled' },
    ],
}" :layout="{
    name: 'circle',
}" :legend="[
    { label: 'default' },
    { label: 'primary', color: 'primary' },
    { label: 'success', color: 'success' },
    { label: 'normal', color: 'normal' },
    { label: 'problem', color: 'problem' },
    { label: 'warning', color: 'warning' },
    { label: 'error', color: 'error' },
    { label: 'danger', color: 'danger' },
    { label: 'disabled', color: 'disabled' },
]"></u-relations-diagram>
```

### Node Shape

In the node object, use the `shape` parameter to specify the node type. The default is `rectangle`.

For more information about the various types of shapes, please see the examples below. For other descriptions, please see [Cytoscape.js - Node shape](https://js.cytoscape.org/#style/node-body).

``` html
<u-relations-diagram :data="{
    nodes: [
        { id: 'ellipse', shape: 'ellipse' },
        { id: 'triangle', shape: 'triangle' },
        { id: 'round-triangle', shape: 'round-triangle' },
        { id: 'rectangle', shape: 'rectangle' },
        { id: 'round-rectangle', shape: 'round-rectangle' },
        { id: 'bottom-round-rectangle', shape: 'bottom-round-rectangle' },
        { id: 'cut-rectangle', shape: 'cut-rectangle' },
        { id: 'barrel', shape: 'barrel' },
        { id: 'rhomboid', shape: 'rhomboid' },
        { id: 'diamond', shape: 'diamond' },
        { id: 'round-diamond', shape: 'round-diamond' },
        { id: 'pentagon', shape: 'pentagon' },
        { id: 'round-pentagon', shape: 'round-pentagon' },
        { id: 'hexagon', shape: 'hexagon' },
        { id: 'round-hexagon', shape: 'round-hexagon' },
        { id: 'concave-hexagon', shape: 'concave-hexagon' },
        { id: 'heptagon', shape: 'heptagon' },
        { id: 'round-heptagon', shape: 'round-heptagon' },
        { id: 'octagon', shape: 'octagon' },
        { id: 'round-octagon', shape: 'round-octagon' },
        { id: 'star', shape: 'star' },
        { id: 'tag', shape: 'tag' },
        { id: 'round-tag', shape: 'round-tag' },
        { id: 'vee', shape: 'vee' },
    ],
}" :layout="{
    name: 'grid',
    padding: 10,
}"></u-relations-diagram>
```

### Curve Type

In the edge object, use the `curve` parameter to specify the curve type. The default is a `bezier` curve.

Curve optional types:
- bezier: Clustered Bezier curves. For Bezier curves parallel to the same nodes, they will be separated by adjusting the curvature.
- unbundled-bezier: Unbundled Bezier curve, for manual control points.
- haystack: haystack line, generally used to quickly draw a straight line between two nodes. It does not support combining parent nodes and cannot use start and end arrows.
- straight: a normal straight line.
- segments: segmented polyline
- taxi: right angle line

For details, see [Cytoscape.js - Edge line](https://js.cytoscape.org/#style/edge-line).

The edge type parameters of this component simplify the usage of curve. If you need to further set the parameters of the curve, please use `element-style` to customize the style.

``` html
<u-relations-diagram :data="{
    nodes: [
        { id: 'n0' },
        { id: 'n1' },
        { id: 'n2' },
        { id: 'n3' },
        { id: 'n4' },
    ],
    edges: [
        { source: 'n2', target: 'n0' },
        { source: 'n0', target: 'n2', 'source-label': 'bezier' },
        { source: 'n2', target: 'n0' },
        { source: 'n4', target: 'n2', curve: 'unbundled-bezier' },
        { source: 'n2', target: 'n4', curve: 'unbundled-bezier', 'source-label': 'unbundled-bezier' },
        { source: 'n4', target: 'n2', curve: 'unbundled-bezier' },
        { source: 'n4', target: 'n1', curve: 'haystack' },
        { source: 'n4', target: 'n1', curve: 'haystack', 'source-label': 'haystack' },
        { source: 'n4', target: 'n1', curve: 'haystack' },
        { source: 'n1', target: 'n3', curve: 'segments', 'source-label': 'segments' },
        { source: 'n3', target: 'n0', curve: 'taxi', 'source-label': 'taxi' },
    ],
}" :layout="{
    name: 'circle',
}"></u-relations-diagram>
```

### Arrow Type

In the edge object, use the `source-arrow` parameter to specify the edge start arrow type, and use the `source-arrow` parameter to specify the edge end arrow type.

By default, `source-arrow` is empty and `target-arrow` is `triangle`.

For various types of arrows, please see the examples below. For other instructions, see [Cytoscape.js - Edge arrow](https://js.cytoscape.org/#style/edge-arrow).

``` html
<u-relations-diagram :data="{
    nodes: [
        { id: 'n0' },
        { id: 'n1' },
        { id: 'n2' },
        { id: 'n3' },
        { id: 'n4' },
        { id: 'n5' },
        { id: 'n6' },
        { id: 'n7' },
        { id: 'n8' },
        { id: 'n9' },
        { id: 'n10' },
    ],
    edges: [
        { color: 'primary', source: 'n0', target: 'n1', 'source-arrow': 'triangle', 'target-arrow': 'triangle', label: 'triangle' },
        { color: 'primary', source: 'n1', target: 'n2', 'mid-source-arrow': 'triangle-tee', 'source-arrow': 'triangle-tee', 'target-arrow': 'none', label: 'triangle-tee' },
        { color: 'primary', source: 'n2', target: 'n3', 'mid-target-arrow': 'triangle-cross', 'target-arrow': 'triangle-cross', label: 'triangle-cross' },
        { color: 'primary', source: 'n3', target: 'n4', 'target-arrow': 'triangle-backcurve', label: 'triangle-backcurve' },
        { color: 'primary', source: 'n4', target: 'n5', 'target-arrow': 'vee', label: 'vee' },
        { color: 'primary', source: 'n5', target: 'n6', 'target-arrow': 'tee', label: 'tee' },
        { color: 'primary', source: 'n6', target: 'n7', 'target-arrow': 'square', label: 'square' },
        { color: 'primary', source: 'n7', target: 'n8', 'target-arrow': 'circle', label: 'circle' },
        { color: 'primary', source: 'n8', target: 'n9', 'target-arrow': 'diamond', label: 'diamond' },
        { color: 'primary', source: 'n9', target: 'n10', 'target-arrow': 'chevron', label: 'chevron' },
        { color: 'primary', source: 'n10', target: 'n0', 'target-arrow': 'none', label: 'none' },
    ],
}" :layout="{
    name: 'circle',
}" :element-style="[{
    selector: 'edge',
    css: {
        width: 1,
        'arrow-scale': 1
    },
}]"></u-relations-diagram>
```

### Custom Styles

Use the `element-style` property to override and extend the default style of this component. For more information on style settings, see [Cytoscape.js - Style](https://js.cytoscape.org/#style).

``` html
<u-relations-diagram :data="{
    nodes: [
        { id: 'Simpson Private Cloud' },
        { id: 'Skunkhollow Private Cloud', color: 'success' },
        { id: 'Camden Private Cloud', color: 'success' },
    ],
    edges: [
        { source: 'Simpson Private Cloud', target: 'Skunkhollow Private Cloud', color: 'primary' },
        { source: 'Skunkhollow Private Cloud', target: 'Camden Private Cloud', color: 'primary' },
        { source: 'Camden Private Cloud', target: 'Simpson Private Cloud', color: 'primary' },
    ],
}" :legend="[
    { label: 'Assessment Completed', color: 'success' },
    { label: 'Evaluating', color: 'default' },
]" :layout="{
    name: 'circle',
}" :element-style="[{
    selector: 'node',
    css: {
        'border-width': 4,
        padding: 20,
    },
}]"></u-relations-diagram>
```

### Event

Transmits all Cytoscape.js events, usually through `e.target` to get the Cytoscape element for processing. For details of the event object, see [Cytoscape.js - Events](https://js.cytoscape.org/#events).

The following is an example of binding a click event to a node:

``` view
<template>
<u-relations-diagram :data="{
    nodes: [
        { id: 'Simpson Private Cloud' },
        { id: 'Skunkhollow Private Cloud', color: 'success' },
        { id: 'Camden Private Cloud', color: 'success' },
    ],
    edges: [
        { source: 'Simpson Private Cloud', target: 'Skunkhollow Private Cloud', color: 'primary' },
        { source: 'Skunkhollow Private Cloud', target: 'Camden Private Cloud', color: 'primary' },
        { source: 'Camden Private Cloud', target: 'Simpson Private Cloud', color: 'primary' },
    ],
}" :legend="[
    { label: 'Assessment Completed', color: 'success' },
    { label: 'Evaluating', color: 'default' },
]" :layout="{
    name: 'circle',
}" :element-style="[{
    selector: 'node',
    css: {
        padding: 20,
    },
}]" @click="onClick"></u-relations-diagram>
</template>
<script>
export default {
    methods: {
        onClick(e) {
            const target = e.target;
            this.$toast.show('clicked' + target.id());
        },
    },
};
</script>
```

### Configuration

Configure Cytoscape.js options.

This component configures some default parameters according to common practices.

``` js
{
    userZoomingEnabled: false, // Disable user zooming because this feature often conflicts with scrolling. Developers can turn this configuration on if necessary.
    minZoom: 0.5, // minimum zoom multiple
    maxZoom: 2, // Maximum zoom multiple
}
```

For other parameters, see [Cytoscape.js - Initialisation](https://js.cytoscape.org/#core/initialisation).

For example, the following configuration disables moving positions and enables box selection.

``` view
<template>
<u-relations-diagram :data="{
    nodes: [
        { id: 'Simpson Private Cloud' },
        { id: 'Skunkhollow Private Cloud', color: 'success' },
        { id: 'Camden Private Cloud', color: 'success' },
    ],
    edges: [
        { source: 'Simpson Private Cloud', target: 'Skunkhollow Private Cloud', color: 'primary' },
        { source: 'Skunkhollow Private Cloud', target: 'Camden Private Cloud', color: 'primary' },
        { source: 'Camden Private Cloud', target: 'Simpson Private Cloud', color: 'primary' },
    ],
}" :legend="[
    { label: 'Assessment Completed', color: 'success' },
    { label: 'Evaluating', color: 'default' },
]" :layout="{
    name: 'circle',
}" :config="{
    userPanningEnabled: false,
    boxSelectionEnabled: true,
}"></u-relations-diagram>
```

### Complex Example

Here is a more complex example using the [cose Layout](https://js.cytoscape.org/#layouts/cose).

``` view
<template>
<u-relations-diagram :data="data" :legend="[
    { label: 'Normal', color: 'normal' },
    { label: 'Risk', color: 'danger' },
]" :layout="{
    name: 'things',
    animate: false,
    componentSpacing: 80,
}"></u-relations-diagram>
</template>
<script>
export default {
    data() {
        const data = {
            nodes: [
                { id: 'RDS' },
                { id: 'K8S' },
                { id: 'DNS' },
                { id: 'nova' },
                { id: 'CEPH' },
                { id: 'VPC' },
                { id: 'rds-on-k8s-with-floating-ip', parent: 'RDS', color: 'danger' },
                { id: 'k8s-node', parent: 'K8S', color: 'normal' },
                { id: 'k8s-volume', parent: 'K8S', color: 'danger' },
                { id: 'dns', parent: 'DNS', color: 'normal' },
                { id: 'nova-vm', parent: 'nova', color: 'normal' },
                { id: 'ceph-ssd-volume', parent: 'CEPH', color: 'danger' },
                { id: 'vpc-floating-ip', parent: 'VPC', color: 'normal' },
            ],
            edges: [
                { id: 'rds-k8s-node', source: 'rds-on-k8s-with-floating-ip', target: 'k8s-node' },
                { id: 'rds-k8s-volume', source: 'rds-on-k8s-with-floating-ip', target: 'k8s-volume' },
                { source: 'rds-on-k8s-with-floating-ip', target: 'vpc-floating-ip' },
                { source: 'k8s-node', target: 'dns' },
                { source: 'k8s-node', target: 'nova-vm' },
                { source: 'k8s-volume', target: 'ceph-ssd-volume' },
                { source: 'ceph-ssd-volume', target: 'nova-vm' },
                { source: 'dns', target: 'vpc-floating-ip' },
            ],
        };

        // If you use cose for layout, it is best to initially pull the nodes apart, otherwise the positions will be random each time.
        data.nodes.forEach((node, index) => {
            node.position = { x: index * 60, y: index * 60 };
        });
        return {
            data,
        };
    },
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | { nodes: Array\<node\>, edges: Array\<edge\> } | | | Graph data |
| legend | Array\<{ label: string, color: string }\> | | | Legend. The style of the legend items is consistent with the graph nodes |
| layout | string \| LayoutOptions | | `'grid'` | Layout. The string type is the Cytoscape.js layout `name`. For details on the LayoutOptions parameters, see [Cytoscape.js Layouts](https://js.cytoscape.org/#layouts). |
| element-style | Array\<StyleOptions\> | | `'\[\]'` | Element style, including node and edge, differentiated by selector. For style settings, see [Cytoscape.js Style](https://js.cytoscape.org/#style). |
| config | ConfigOptions | | | Cytoscape.js configuration options. See [Cytoscape.js - Initialisation](https://js.cytoscape.org/#core/initialisation) for details |

### Slots

#### (default)

Used to expand other content.

### Events

#### @$listeners

Transmits all Cytoscape.js events. See [Cytoscape.js - Events](https://js.cytoscape.org/#events) for details.
