<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        List Page.
    </u-linear-layout>
    <u-form layout="inline">
        <u-grid-layout>
            <u-grid-layout-row :repeat="3">
                <u-grid-layout-column>
                    <u-form-item label="Username">
                        <u-input v-model="filter.username" maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item label="Organization Name">
                        <u-input v-model="filter.department" maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item>
                        <u-button color="primary" @click="$refs.tableView.reload()">Query</u-button>
                    </u-form-item>
                </u-grid-layout-column>
            </u-grid-layout-row>
        </u-grid-layout>
    </u-form>
    <u-table-view ref="tableView" :data-source="load">
        <u-table-view-column type="checkbox" width="8%"></u-table-view-column>
        <u-table-view-column title="Name" field="name"></u-table-view-column>
        <u-table-view-column title="Description" field="description"></u-table-view-column>
        <u-table-view-column title="Operation">
            <template #cell="{ item }">
                <u-linear-layout gap="small">
                    <u-link :to="{ path: 'detail', query: { id: item.id } }">
                        Check the details
                    </u-link>
                </u-linear-layout>
            </template>
        </u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            filter: {
                username: '',
                department: '',
            },
        };
    },
    methods: {
        async load() {
            const result = await this.$services.service_PLACEHOLDER.loadList_PLACEHOLDER({
                query: this.filter,
            });
            return result;
        },
    },
};
</script>
<style module>
.root {}
</style>
