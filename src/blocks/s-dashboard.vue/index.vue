<template>
<l-dashboard>
    <template #head>
        <u-navbar>
            <template #left>
                <u-linear-layout gap="small">
                    <u-image fit="cover" src="https://static-kubevue.s3.amazonaws.com/assets/lcap-logo-light.svg"
                        style="width: 28px; height: 28px; margin: 18px 14px; --custom-start: auto; vertical-align: middle;"></u-image>
                    <u-text text="Application Name" size="large" style="color: white; --custom-start: auto; vertical-align: middle;"></u-text>
                </u-linear-layout>
            </template>
            <template #default>
                <u-navbar-item>Item 1</u-navbar-item>
                <u-navbar-item>Item 2</u-navbar-item>
            </template>
            <template #right>
                <u-linear-layout style="display: inline-block; width: 60px;"></u-linear-layout>
                <u-navbar-dropdown style="margin-right: 10px;" v-if="userInfo">
                    <template #title>
                        <u-linear-layout gap="small">
                            <u-image fit="cover" src="https://static-kubevue.s3.amazonaws.com/assets/avatar-default.svg" style="width: 36px; height: 36px; vertical-align: middle;"></u-image>
                            <span style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                                <u-text :text="userInfo.UserName"></u-text>
                            </span>
                        </u-linear-layout>
                    </template>
                    <template #default>
                        <u-navbar-menu>
                            <u-navbar-menu-item @click="logout">Logout</u-navbar-menu-item>
                        </u-navbar-menu>
                    </template>
                </u-navbar-dropdown>
                <template v-else>
                    <u-navbar>
                        <u-navbar-item href="/login">Log In</u-navbar-item>
                    </u-navbar>
                </template>
            </template>
        </u-navbar>
    </template>
    <template #side>
        <u-sidebar>
            <u-sidebar-item to="/overview">Overview</u-sidebar-item>
            <u-sidebar-item>Item 2</u-sidebar-item>
        </u-sidebar>
    </template>
    <template #default>
        <u-linear-layout direction="vertical">
            <u-crumb auto></u-crumb>
            <router-view></router-view>
        </u-linear-layout>
    </template>
</l-dashboard>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {},
            noticeCount: 0,
            noticeActive: false,
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler($route) {
                this.noticeActive = $route.path.startsWith('/notice');
            },
        },
    },
    created() {
        this.$auth && this.$auth.getUserInfo().then((userInfo) => this.userInfo = userInfo);
    },
    methods: {
        logout() {
            /* eslint-disable new-cap */
            this.$confirm('Are you sure you want to log out? ', 'Hint')
                .then(() => this.$auth.logout())
                .then(() => {
                    this.eraseCookie();
                    location.reload();
                });
        },
        eraseCookie() {
            const cookies = document.cookie.split(';');
            cookies.forEach((cookie) => {
                const eqPos = cookie.indexOf('=');
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                const d = new Date();
                d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
                document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;
            });
        },
    },
};
</script>
