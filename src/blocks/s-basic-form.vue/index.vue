<template>
<u-linear-layout direction="vertical">
    <u-form gap="large" @validate="valid = $event.valid">
        <u-form-item label="Name" required rules="required | alphaNumDash | rangeLength(1,63)">
            <u-input v-model="model.name" size="huge medium" maxlength="24" placeholder="Composed of 1-63 lowercase letters, numbers, and underscores"></u-input>
        </u-form-item>
        <u-form-item label="Description">
            <u-input v-model="model.description" size="huge medium"></u-input>
        </u-form-item>
        <u-form-item>
            <u-button color="primary"
                :disabled="!canSubmit || submitting"
                :icon="submitting ? 'loading' : ''" @click="submit()">
                Create Now
            </u-button>
        </u-form-item>
    </u-form>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            model: {
                name: '',
                description: '',
            },
            valid: false,
            submitting: false,
        };
    },
    computed: {
        canSubmit() {
            return this.valid;
        },
    },
    methods: {
        async submit() {
            await this.$services.service_PLACEHOLDER.create_PLACEHOLDER({
                body: this.model,
            });
            this.$router.push('list');
        },
    },
};
</script>
