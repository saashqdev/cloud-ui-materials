<template>
<u-linear-layout :class="$style.root" type="flex" justify="center" alignment="center">
    <u-linear-layout direction="vertical" justify="center">
        <img src="https://static-kubevue.s3.amazonaws.com/assets/error-code.svg" width="240">
        <h1 :class="$style.title">404</h1>
        <h2 :class="$style.h2">Sorry, the page you visited does not exist</h2>
        <u-button color="primary" shape="round" href="/">Return to homepage</u-button>
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
