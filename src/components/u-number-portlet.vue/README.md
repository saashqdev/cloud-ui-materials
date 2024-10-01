# UNumberPortlet Number Pane

Here is a basic description of Number Pane.

## Example
### Basic Usage

``` html
<u-number-portlet title="Service Number" :value="20"></u-number-portlet>
```

### Unit

``` html
<u-number-portlet title="Public Cloud" :value="20" unit="%"></u-number-portlet>
```

### Alignment

``` html
<u-number-portlet title="Public Cloud" :value="20" unit="%" alignment="center"
    style="width: 300px"></u-number-portlet>
```

### Layout

```vue
<template>
<u-grid-layout>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column>
            <u-number-portlet title="Service Number" :value="20"></u-number-portlet>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-number-portlet title="Number of Instances" :value="30"></u-number-portlet>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-number-portlet title="Number of Requests" :value="20"></u-number-portlet>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
</template>
```

### Color

```vue
<template>
<u-grid-layout>
    <u-grid-layout-row :repeat="4">
        <u-grid-layout-column>
            <u-number-portlet title="Service Number" :value="20" color="primary"></u-number-portlet>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-number-portlet title="Number of Instances" :value="30" color="success"></u-number-portlet>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-number-portlet title="Number of Requests" :value="20" color="warning"></u-number-portlet>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-number-portlet title="Error Number" :value="20" color="error"></u-number-portlet>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
</template>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Number | | Value |
| title | String | | Title |
| alignment | String | `'left'` | `'left'``'center'``'right'` |
| unit | String | | Unit |
| color | String | | Color |
