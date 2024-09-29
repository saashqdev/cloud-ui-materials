<template>
<u-linear-layout :class="$style.root" type="flex" justify="center" alignment="center">
    <u-linear-layout direction="vertical" justify="center">
        <img src="https://static-kubevue.s3.amazonaws.com/assets/error-code.svg" width="240">
        <h1 :class="$style.title">401</h1>
        <h2 :class="$style.h2">You do not have permission to access this page</h2>
        <u-linear-layout>
            <u-button color="primary" shape="round" href="/login">Log in again</u-button>
            <u-button shape="round" href="/">Return to homepage</u-button>
        </u-linear-layout>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {};
</script>

<style module>
.root {
    height: 100vh;
}

.title {
    margin: 0;
    margin-top: -15px;
    padding-bottom: 20px;
    font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif;
    font-size: 64px;
}

.h2 {
    color: var(--color-light);
}
</style>
