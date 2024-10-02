<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UTimeline Timeline

Vertically displayed time flow information.

## Example
### Basic Usage

``` html
<u-timeline>
    <u-timeline-item>2020-01-20 xxxx</u-timeline-item>
    <u-timeline-item>
        <div>2020-01-20 xxxx</div>
        <div>Some description</div>
    </u-timeline-item>
    <u-timeline-item>2020-01-20 xxxx</u-timeline-item>
    <u-timeline-item>2020-01-20 xxxx</u-timeline-item>
</u-timeline>
```

### Modify Color

``` html
<u-timeline>
    <u-timeline-item color="primary">2020-01-20 xxxx</u-timeline-item>
    <u-timeline-item color="success">
        <div>2020-01-20 xxxx</div>
        <div>Some description</div>
    </u-timeline-item>
    <u-timeline-item color="warning">
        <div>2020-01-20 xxxx</div>
        <div>Some description</div>
    </u-timeline-item>
    <u-timeline-item color="error">2020-01-20 xxxx</u-timeline-item>
    <u-timeline-item>2020-01-20 xxxx</u-timeline-item>
</u-timeline>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | number | | `0` | The value to be passed in |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @change

Triggered when modified

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.param1 | string | Parameter 1 |
| $event.param2 | number | Parameter 2 |
