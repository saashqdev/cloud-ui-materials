<template>
<u-linear-layout type="flex" justify="center" alignment="center" style="background: url('https://static-kubevue.s3.amazonaws.com/assets/login-bg-1.jpg') no-repeat; background-size: cover; height: 100vh;">
    <u-linear-layout direction="vertical" justify="center">
        <h1>Log In</h1>
        <lcap-login :src="src" :tenant-name="tenantName" :domain-name="domainName" :env="env" @success="onSuccess"></lcap-login>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const { tenant, domainName, env, nuimsDomain = 'user.lcap.s3.amazonaws.com' } = window.appInfo;
        const envUri = env === 'dev' ? 'dev.' : '';
        const tenantUri = tenant && tenant.toLowerCase() === 'defaulttenant' ? '' : `${tenant}.`;
        return {
            // Variables such as window do not support changing to ASL for the time being.
            tenantName: tenant,
            domainName,
            env,
            src: `${window.location.protocol}//${envUri}${tenantUri}${nuimsDomain}`,
        };
    },
    methods: {
        onSuccess() {
            location.href = '/';
        },
    },
};
</script>
