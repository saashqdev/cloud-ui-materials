<template>
<u-info-list>
    <u-info-list-group title="Basic Information" column="3">
        <u-info-list-item label="Name">Name</u-info-list-item>
    </u-info-list-group>
</u-info-list>
</template>

<script>
export default {
    data() {
        return {
            instance: {},
        };
    },
    created() {
        this.$subscribe('name_PLACEHOLDER.loadDetail', (instance) => {
            this.instance = instance;
        });
    },
};
</script>
