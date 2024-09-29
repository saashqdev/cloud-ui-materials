<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        List Page.
    </u-linear-layout>
    <u-linear-layout>
        <u-button color="primary" icon="create" to="create">Create</u-button>
        <u-button square icon="refresh" @click="$refs.tableView.reload()"></u-button>
    </u-linear-layout>
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
        return {};
    },
    methods: {
        async load() {
            const result = await this.$services.service_PLACEHOLDER.loadList_PLACEHOLDER();
            return result;
        },
    },
};
</script>
<style module>
.root {}
</style>
