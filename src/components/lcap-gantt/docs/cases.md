```html

<lcap-gantt ref="lcap_gantt1"
            :ganttTableConfig="[{'nameField':'gantt.title','labelField':'item','iconField':'icon','showTooltip':true,'width':'120'},{'nameField ':'gantt.responser','labelField':'person in charge','width':120,'showTooltip':true}]"
            taskView="y" :data-source="load" parent-field="gantt.parent" text-field="gantt.title"
            start-field="gantt.start" duration-field="gantt.duration"
            progress-field="gantt.progress" id-field="gantt.key" color-field="gantt.color"></lcap-gantt>
```
