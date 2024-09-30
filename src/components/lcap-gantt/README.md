<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapGantt Gantt Chart

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Chart**

Please add description here

## Example
### Basic Usage

```html
<lcap-gantt :data-source="[
        { id: 1, text1: 'Project #1', start: '2023-04-20 00:00', duration: 9, progress: 0.6, open: true, head: 'Homer Simpson', state: 'default' , color: '#5692f0', iconUrl: '' },
        { id: 2, text1: 'Planning', start: '2023-04-20 00:00', duration: 3, progress: 0.8, parent: 1, head: 'Bart Simpson', state: 'finished', color : '#5692f0', iconUrl: 'http://ceph.lcap.hadev.s3.amazonaws.com/lowcode-static/user/defaulttenant/1686301210678_%E5%8A%A0%E6%B2%B9.jpg' } ,
        { id: 3, text1: 'Implementation', start: '2023-04-24 00:00', duration: 4, progress: 0.5, parent: 1, head: 'Marge Simpson', state: 'unfinished', color : '#84bd54' },
        { id: 4, text1: 'Review', start: '2023-04-28 00:00', duration: 3, progress: 0.1, parent: 1, head: 'Ned Flanders', state: 'canceled', color: '#da645d' },
    ]"
            :ganttTableConfig="[
            {'labelField':'Project Name','nameField':'text1', showTooltip: true, width: '100'},
            {'labelField':'Person in Charge','nameField':'head', showTooltip: true, width: '100'},
            {'labelField':'Start Date','nameField':'start', showTooltip: true, width: '150'}
            ]"
            parent-field="parent"
            start-field="start"
            duration-field="duration"
            progress-field="progress"
            text-field="text1"
            color-field="color"
            id-field="id"
            icon-field="iconUrl"
            skins="default"
            style="--gantt-table-header-font-size:12px;
                --gantt-table-header-font-color:red; 
                --gantt-table-header-text-align: center;
                --gantt-table-background-color-striped: #f5f5f5;
                --gantt-table-background-color-hover: #f5f5f5;
                --gantt-table-cell-color: #000;
                --gantt-table-header-font-weight: bold;
                
"
>
</lcap-gantt>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object \| DataSource | | | The data source of the Gantt chart, the data set object or the logic of returning the data set |
| data-schema | schema | | | The data type of each element of the collection type |
| text-field | string | | `''` | Set the swim lane chart text field |
| start-field | string | | `''` | Set the swim lane chart start date field |
| duration-field | string | | `''` | Set the swim lane chart duration field |
| progress-field | string | | `''` | Set the swim lane chart progress field |
| id-field | string | | `''` | Set the swim lane diagram id field |
| parent-field | string | | `''` | Set the parent field of the swim lane chart |
| color-field | string | | `''` | Set the swim lane chart data color field |
| icon-field | string | | `''` | Set the data list icon field, only supports png, jpg type image links |
| ganttTableConfig | Array\<Item\> | | | Configure the Gantt chart table phase |
| taskView | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'d'` | Switch date View |
| showToday | boolean | | `true` | Set to display today's mark line |
| skins | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'default'` | Set Gan Tetu Skin |

### Events

#### @taskClick

Triggered when task is clicked

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | Task details |

#### @scaleClick

Triggered when the scale is clicked

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Click time |

Methods

#### load()

Reload Gantt chart

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### changeToday()

Locate today's mark line

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

