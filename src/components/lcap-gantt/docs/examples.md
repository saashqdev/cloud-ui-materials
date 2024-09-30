### Basic Usage

```html
<lcap-gantt :data-source="[
        {id: 1, text1: 'Project #1', start: '2023-04-20 00:00', duration: 9, progress: 0.6, open: true, head: 'Bart Simpson', state: 'default', color: '#5692f0', iconUrl: '' },
        { id: 2, text1: 'Planning', start: '2023-04-20 00:00', duration: 3, progress: 0.8, parent: 1, head: 'Ned Flanders', state: 'finished', color : '#5692f0', iconUrl: 'http://ceph.lcap.hadev.s3.amazonaws.com/lowcode-static/user/defaulttenant/1686301210678_%E5%8A%A0%E6%B2%B9.jpg' } ,
        { id: 3, text1: 'Implementation', start: '2023-04-24 00:00', duration: 4, progress: 0.5, parent: 1, head: 'Homer Simpson', state: 'unfinished', color : '#84bd54' },
        { id: 4, text1: 'Review', start: '2023-04-28 00:00', duration: 3, progress: 0.1, parent: 1, head: 'Marge Simpson', state: 'canceled', color: '#da645d' },
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
            ganttEndDate="2023-07-19 20:07:41"
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
