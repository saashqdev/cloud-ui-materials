# SPage General Page Layout

Generic page layout with only top and bottom bars.

``` html
<div style="position: relative;">
<s-page demo>
    <u-linear-layout direction="vertical" gap="large">
        <u-skeleton type="image" style="padding-bottom: 240px;"></u-skeleton>
        <u-grid-layout :repeat="3">
            <u-grid-layout-column>
                <u-skeleton></u-skeleton>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-skeleton></u-skeleton>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-skeleton></u-skeleton>
            </u-grid-layout-column>
        </u-grid-layout>
    </u-linear-layout>
</s-page>
</div>
```
