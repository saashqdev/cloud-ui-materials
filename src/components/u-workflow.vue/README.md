<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UWorkflow

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Add Left Label](#Add left label)
    - [Complex Scenes](#Complex scenes)
- [UWorkflow API](#uworkflow-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UWorkflowItem API](#uworkflowitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
- [UWorkflowBranch API](#uworkflowbranch-api)
    - [Slots](#slots-3)

Diagrams used to illustrate workflows.

## Example
### Basic Usage

Use the three components `<u-workflow>`, `<u-workflow-item>`, and `<u-workflow-branch>` to organize the basic structure of the chart.

The `<u-workflow-item>` contains all the properties of the `<u-button>` in the Cloud UI, which means you can easily add links using attributes such as `href` and `to`.

``` html { width: 600px }
<u-workflow>
    <u-workflow-item title="Project establishment" tooltip="Prompt" status="done" href="https://kubevue.github.io" target="_blank"></u-workflow-item>
    <u-workflow-item title="Requirements communication" status="done" href="https://kubevue.github.io" target="_blank">
        <div slot="tooltip">
            Using Slot Tooltips
        </div>
    </u-workflow-item>
    <u-workflow-item>
        <u-workflow-branch>
            <u-workflow-item title="Machine on the Shelf" status="done"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Network Connection" status="done"></u-workflow-item>
        </u-workflow-branch>
        <u-workflow-branch>
            <u-workflow-item title="Service Version Adaptation" status="doing"></u-workflow-item>
        </u-workflow-branch>
    </u-workflow-item>
    <u-workflow-item title="Delivery and Acceptance" status="todo"></u-workflow-item>
</u-workflow>
```

### Add Left Label

Add the `label` attribute to the outermost `<u-workflow-item>` to display the label on the left.

``` html { width: 600px }
<u-workflow>
    <u-workflow-item label="Step 1" title="Project Establishment" tooltip="Prompt" status="done" href="https://kubevue.github.io" target="_blank"></u-workflow-item>
    <u-workflow-item label="Step 2" title="Requirements Communication" status="done" href="https://kubevue.github.io" target="_blank">
        <div slot="tooltip">
            Using Slot Tooltips
        </div>
    </u-workflow-item>
    <u-workflow-item label="Step 3">
        <u-workflow-branch>
            <u-workflow-item title="Machine on the Shelf" status="done"></u-workflow-item>
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
            <u-workflow-item title="Branch 1-Unfinished" status="todo"></u-workflow-item>
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

## UWorkflow API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| legend | Array\<{ label: string, color: string }\> | | `'...'` | Legend. The style of legend items is consistent with that of graph nodes |
| label-size | enum | `'small'`, `'normal'`, `'large'` | `'normal'` | Width of the left label |

### Slots

#### (default)

Insert `<u-workflow-item>`.

## UWorkflowItem API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Step title |
| label | string | | | Left label |
| href | string | | | Link address |
| target | string | | | (native attribute). For example, if you set `_blank`, a new blank page will be opened. |
| to | string, Location | | | Requires vue-router, same as `to` property of `<router-link>`. Can be a string or an object describing the target location. |
| replace | boolean | | `false` | Requires vue-router, same as `replace` property of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| append | boolean | | `false` | Requires vue-router, same as the `append` property of `<router-link>`. If `true`, append the path of `to` after the current path. |

### Slots

#### (default)

Insert `<u-workflow-branch>`.

#### tooltip

Customize tooltips.

## UWorkflowBranch API
### Slots

#### (default)

Insert `<u-workflow-item>`.
