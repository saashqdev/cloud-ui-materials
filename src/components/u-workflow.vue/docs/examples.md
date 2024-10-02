### Basic Usage

Use the three components `<u-workflow>`, `<u-workflow-item>`, and `<u-workflow-branch>` to organize the basic structure of the chart.

The `<u-workflow-item>` contains all the properties of the `<u-button>` in the Cloud UI, which means you can easily add links using attributes such as `href` and `to`.

``` html { width: 600px }
<u-workflow>
    <u-workflow-item title="立项" tooltip="提示" status="done" href="https://kubevue.github.io" target="_blank"></u-workflow-item>
    <u-workflow-item title="需求沟通" status="done" href="https://kubevue.github.io" target="_blank">
        <div slot="tooltip">
            Using Slot Tooltips
        </div>
    </u-workflow-item>
    <u-workflow-item>
        <u-workflow-branch>
            <u-workflow-item title="Machine is Available" status="done"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Network Connection" status="done"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Service Version Adaptation" status="doing"></u-workflow-item>
        </u-workflow-branch>
    </u-workflow-item>
    <u-workflow-item title="Delivery Acceptance" status="todo"></u-workflow-item>
</u-workflow>
```

### Add left label

Add the `label` attribute to the outermost `<u-workflow-item>` to display the label on the left.

``` html { width: 600px }
<u-workflow>
    <u-workflow-item label="Step 1" title="Project Establishment" tooltip="Prompt" status="done" href="https://kubevue.github.io" target="_blank"></u- workflow-item>
    <u-workflow-item label="Step 2" title="Requirements Communication" status="done" href="https://kubevue.github.io" target="_blank">
        <div slot="tooltip">
            Using Slot Tooltips
        </div>
    </u-workflow-item>
    <u-workflow-item label="Step 3">
        <u-workflow-branch>
            <u-workflow-item title="Machine is Available" status="done"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Network Connection" status="done"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Service Version Adaptation" status="doing"></u-workflow-item>
        </u-workflow-branch>
    </u-workflow-item>
    <u-workflow-item label="Step 4" title="Delivery and Acceptance" status="todo"></u-workflow-item>
</u-workflow>
```

Complex scenes

Here is an example with a more complex structure.

``` html
<u-workflow label-size="small">
    <u-workflow-item label="Step 1" title="Project Establishment" status="done"></u-workflow-item>
    <u-workflow-item label="Step 2" title="Requirement A" status="done"></u-workflow-item>
    <u-workflow-item label="Step 3" title="Requirement B" status="done"></u-workflow-item>
    <u-workflow-item label="Step 4">
        <u-workflow-branch>
            <u-workflow-item title="Branch 1-A" status="doing"></u-workflow-item>
            <u-workflow-item title="Branch 1-Not Completed" status="todo"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Branch 2" status="done"></u-workflow-item>
            <u-workflow-item title="Branch 2" status="doing"></u-workflow-item>
            <u-workflow-item title="Branch 2" status="todo"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Branch 3" status="done"></u-workflow-item>
            <u-workflow-item>
                <u-workflow-branch>
                    <u-workflow-item title="Branch 3-1" status="done"></u-workflow-item>
                    <u-workflow-item title="Branch 3-1" status="doing"></u-workflow-item>
                    <u-workflow-item title="Branch 3-1" status="todo"></u-workflow-item>
                </u-workflow-branch>
                <u-workflow-branch>
                    <u-workflow-item title="Branch 3-2" status="done"></u-workflow-item>
                    <u-workflow-item title="Branch 3-2" status="doing"></u-workflow-item>
                </u-workflow-branch>
            </u-workflow-item>
            <u-workflow-item title="Branch 3-3" status="todo"></u-workflow-item>
        </u-workflow-branch>
    </u-workflow-item>
    <u-workflow-item title="Delivery and Acceptance"></u-workflow-item>
</u-workflow>
```