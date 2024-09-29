<template>
<u-form :class="$style.form" layout="inline">
    <u-grid-layout>
        <u-grid-layout-row :repeat="4">
            <u-grid-layout-column>
                <u-form-item label="Status">
                    <u-select auto-select>
                        <u-select-item>Authenticating</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="Record Type">
                    <u-select auto-select>
                        <u-select-item>All</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="Registration Number">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="4" v-show="expanded">
            <u-grid-layout-column>
                <u-form-item label="Username">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="Organization Name">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item>
                    <u-button color="primary">Query</u-button>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
    </u-grid-layout>
    <u-link :class="$style.expander" :expanded="expanded" @click="expanded = !expanded">{{ expanded ? 'Basic' : 'More' }} Filter</u-link>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
        };
    },
};
</script>

<style module>
.form {
    position: relative;
}

.expander {
    position: absolute;
    right: 20px;
    bottom: 15px;
}

.expander::after {
    display: inline-block;
    text-decoration: none;
    icon-font: url('cloud-ui.kubevue/src/components/i-icon.vue/icons/angle-down.svg');
    margin-left: 3px;
    vertical-align: -2px;
}

.expander[expanded]::after {
    transform: rotate(180deg);
}
</style>
