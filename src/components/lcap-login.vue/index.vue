<template>
    <div :class="$style.root">
        <div v-if="getCompType() === 'pass'">
            <div :class="$style.loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Please wait...
            </div>
        </div>
        <div v-else-if="getCompType() === 'cb'">
            <div :class="$style.loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Logging in
            </div>
        </div>
        <div v-else :class="$style.root">
        <u-linear-layout
            v-if="loading"
            type="flex"
            justify="center"
            alignment="center"
            :class="$style.loading"
        >
            <u-spinner></u-spinner> is loading...
            </u-linear-layout>
            <div v-else-if="hasTabLoginTypes" :class="$style.form">
                <u-linear-layout direction="vertical" gap="large">
                    <u-tabs v-model="account.LoginType">
                        <u-tab
                            v-for="tab in tabs"
                            :key="tab.value"
                            :title="tab.title"
                            :value="tab.value"
                        ></u-tab>
                    </u-tabs>
                    <u-linear-layout type="flex" justify="center">
                        <u-validator
                            ref="accValidator"
                            placement="bottom"
                            style="max-width: 100%"
                            :rules="accountRule"
                        >
                            <u-input
                                size="huge"
                                name="account"
                                v-model="account.AccountId"
                                placeholder="Please enter your account number"
                                maxlength="128"
                                maxlength-message="The account number can only be entered up to 128 characters"
                                clearable
                                prefix
                                @change="rmErrMsg"
                            >
                                <span name="prefix" :class="$style.prefix">
                                    <icon-custom name="user"></icon-custom>
                                </span>
                            </u-input>
                        </u-validator>
                    </u-linear-layout>
                    <u-linear-layout type="flex" justify="center">
                        <u-validator
                            ref="pwdValidator"
                            placement="bottom"
                            style="max-width: 100%"
                            :rules="pwdRule"
                        >
                            <u-input
                                size="huge"
                                name="password"
                                :type="showPassword ? 'text' : 'password'"
                                v-model="account.AccountPassword"
                                @keyup.enter="login"
                                @change="rmErrMsg"
                                placeholder="Please enter your password"
                                maxlength="128"
                                maxlength-message="The maximum password length is 128 characters"
                                clearable
                                prefix
                                suffix
                            >
                                <span name="prefix" :class="$style.prefix">
                                    <icon-custom name="lock"></icon-custom>
                                </span>
                                <span
                                    name="suffix"
                                    :class="$style.suffix"
                                    @click="showPassword = !showPassword"
                                >
                                    <icon-custom
                                        :name="
                                            showPassword ? 'eye-close' : 'eye'
                                        "
                                    ></icon-custom>
                                </span>
                            </u-input>
                        </u-validator>
                    </u-linear-layout>
                    <u-linear-layout direction="vertical" gap="small">
                        <u-button
                            color="primary"
                            display="block"
                            @click="login"
                            :icon="loading ? 'loading' : undefined"
                            :disabled="loading"
                        >Login</u-button>
                    </u-linear-layout>
                    <u-linear-layout
                        type="flex"
                        :justify="errMsg ? 'space-between' : 'end'"
                        alignment="center"
                    >
                        <span v-if="errMsg" :class="$style.error">{{ errMsg }}</span>
                        <u-link
                            v-for="auth in authTypes"
                            :key="auth.value"
                            @click="jumpAuth(auth.value)"
                            :class="$style.link"
                        >{{ auth.title }}</u-link>
                        <span v-if="showTips" :class="$style.tips">Account Authentication and Permission Center</span>
                    </u-linear-layout>
                </u-linear-layout>
            </div>
            <div v-else :class="$style.links">
                <u-link
                    v-for="auth in authTypes"
                    :key="auth.value"
                    @click="jumpAuth(auth.value)"
                    :class="$style.link"
                >{{ auth.title }}</u-link>
                <span v-if="showNoneTips" :class="$style.tips">Please confirm login configuration</span>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import queryString from 'query-string';
    import iconCustom from './icon-custom.vue';
    import cookie from './cookie';
    import service from './service';
    import './iconfont.js';
    import tokenMethod from './token';
    import { NUIMS_DOMAIN_NAME, LOGIN_TYPES_MAP, AUTH_LIST, TAB_MAP, getArr, getTenant, rmLastSlash, getObj } from './util';
    import localService from './usercenter/service';
    
    export default {
        name: 'lcap-login',
        components: { iconCustom },
        props: {
            // Account authentication and authority center domain name
            src: {
                type: String,
                default: 'http://nuims.kubevue.top',
            },
            // Account authentication and permission center request relative path
            nuimsUrl: {
                type: String,
                default: '/gateway/nuims/nuims',
            },
            // Account authentication and permission center environment information
            env: String,
            // Tenant name
            tenantName: String,
            // Login application name
            domainName: String,
            // Enable normal login, enabled by default
            useNormal: {
                type: Boolean,
                default: true,
            },
            // Open Kubeworkz login
            useKW: {
                type: Boolean,
                default: false,
            },
            // Enable LDAP login
            useLdap: {
                type: Boolean,
                default: false,
            },
            // Enable OpenID login
            useSaasHQ: {
                type: Boolean,
                default: false,
            },
            // Enable Github login
            useGithub: {
                type: Boolean,
                default: false,
            },
            // Enable FB login
            useFB: {
                type: Boolean,
                default: false,
            },
            // Enable ICBC login
            useIcbc: {
                type: Boolean,
                default: true,
            },
            useXuetong: {
                type: Boolean,
                default: false,
            },
            exdays: {
                type: Number,
                default: 1,
            },
            // Enable login in WIP
            hasUserCenter: {
                type: Boolean,
                default: true,
            }
        },
        data() {
            return {
                loading: true,
                account: {
                    LoginType: 'Normal',
                    AccountId: '',
                    AccountPassword: '',
                },
                AuthConfigMap: {},
                tabs: [],
                authTypes: [],
                hasTabLoginTypes: true,
                showNoneTips: false,
                showPassword: false,
                errMsg: '',
                accountRule: ['required'],
                pwdRule: ['required | minLength(8)'],
                change: false,
                changeConfig: {},
                low: this.hasUserCenter, // Control sinking mode (internal login of product application) or centralized mode (centralized login of nuims)
            };
        },
        computed: {
            passSrc() {
                return `${rmLastSlash(this.src)}`;
            },
            showTips() {
                return !this.errMsg && this.authTypes.length === 0;
            },
        },
        async mounted() {
            const { search } = location;
            const query = queryString.parse(search);
            const { code, userName, redirect, userId, token } = query;
            const compType = localStorage.getItem('compType');
    
            if (this.useXuetong) {
                this.getConfig();
            }
    
            if (compType === 'pass') {
                this.jumpAuthPass();
            } else if (compType === 'cb') {
                localStorage.setItem('compType', '');
                await this.codeLogin(query);
            } else {
    
                if (token) {
                    // The parsing method for the returned result that only contains the token, currently mainly used for connecting to the same school
                    cookie.set({ authorization: token });
                    this.$emit('success', {
                        Authorization: token,
                    });
                } else if (userName && userId && code) {
                    cookie.set({ authorization: code });
                    this.$emit('success', {
                        Authorization: code,
                        UserName: userName,
                        UserId: userId,
                    });
                } else {
                    this.getTenantConfig();
                }
            }
        },
        methods: {
            // Process the jump return code
           async codeLogin(query) {
                const { code, userName, redirect, userId, token } = query;
                // Jump to other application single sign-on
                if (userName && userId && code) {
                    tokenMethod.set(code);
                    localStorage.setItem('LoginType', 'Other');
                    cookie.set({ LoginType: 'Other' });
                    location.href = redirect ? decodeURIComponent(redirect) : `${origin}`;
                } else {
                    //Auth login transfer page
                    const LoginType = localStorage.getItem('LoginType') || cookie.get('LoginType');
                    const RedirectUri = localStorage.getItem('RedirectUri') || cookie.get('RedirectUri');
                    let params = {
                        Code: code,
                        Redirects,
                        OAuthLoginType: 'Netease',
                        TenantName: getTenant(),
                        DomainName: NUIMS_DOMAIN_NAME,
                    };
    
                    let currentService;
                    if (this.low) {
                        currentService = localService;
                    } else {
                        currentService = service;
                    }
                    let oAuthService = currentService.OauthLogin;
                    if (LoginType === 'Github' || LoginType === 'CGithub') {
                        params.OAuthLoginType = 'Github';
                    } else if (LoginType === 'FB' || LoginType === 'CFB') {
                        params.OAuthLoginType = 'FB';
                    } else if (LoginType === 'Icbc' || LoginType === 'CIcbc') {
                        // ICBC Login
                        const { SSIAuth, SSISign } = query;
                        if (this.low) {
                            params = {
                                SsiAuth: SSIAuth,
                                SsiSign: SSISign,
                                Redirects,
                            };
    
                        } else {
                            params = {
                                SsiAuth: SSIAuth,
                                SsiSign: SSISign,
                                LoginType: 'ICBC',
                                TenantName: getTenant(),
                                DomainName: NUIMS_DOMAIN_NAME,
                            };
                        }
    
                        oAuthService = currentService.IcbcLogin;
                    }
                    try {
                        let res;
                        if (this.low) {
                            // Request product interface
                            res = await oAuthService({
                                body: params,
                            });
                        } else {
                            res = await oAuthService({
                                url: this.nuimsUrl,
                                body: params,
                            });
                        }
    
                        const { Data } = getObj(res);
                        const { UserName, UserId } = getObj(Data);
                        let href;
                        // Login component logs in to the transfer page through Auth
                        if (['CNetease', 'CGithub', 'CFB', 'CIcbc'].includes(LoginType)) {
                            href = decodeURIComponent(
                                redirect || localStorage.getItem('From') || cookie.get('From'),
                            );
                            const Token = tokenMethod.get();
                            const Back = `${href}${
                                href.includes('?') ? '&' : '?'
                            }userName=${UserName}&userId=${UserId}&code=${Token}`;
                            href = Back;
                        } else {
                            href = redirect ? decodeURIComponent(redirect) : `${origin}`;
                        }
                        // eslint-disable-next-line require-atomic-updates
                        location.href = href;
                    } catch (error) {
                        const { message } = error || {};
                        if (message && message.includes('The user is not bound')) {
                            // eslint-disable-next-line require-atomic-updates
                            location.href = '/403';
                        } else {
                            this.$toast.show(message);
                        }
                    }
                }
            },
            getCompType() {
                return localStorage.getItem('compType');
            },
            // Get the same configuration as the previous one, and control whether
            async getConfig() {
                try {
                    const res = await service.getConfig({
                        url: '/config'
                    });
                    const obj = JSON.parse(res.data.userCenter);
                    // update config
                    this.changeConfig = obj;
                    this.change = obj.change;
    
                    if (this.change) {
                        // Locate third-party login
                        if (!window.location.href.includes('token=')) {
                            // redirect back with token
                            window.location.href = `${this.changeConfig.pc?.url}?${queryString.stringify(Object.assign(
                                this.changeConfig.pc?.params || {},
                            {
                                redirect_uri: window.location.href
                            }))}`;
                        }
                    }
                 } catch {
                     console.info('no config');
                 }
            },
            async getTenantConfig() {
                let tabs = [];
                let authTypes = [];
                try {
                    let res;
                    if (this.low) {
                        res = await localService.getTenantLoginTypes({
                            url: `/system/loginTypes`,
                        });
                    } else {
                         res = await service.getTenantLoginTypes({
                            url: this.nuimsUrl,
                            params: { TenantName: this.tenantName || getTenant() },
                        });
                    }
                    res?.data?.Data.forEach((type) => {
                        const { LoginType } = type;
                        if (Object.keys(TAB_MAP).includes(LoginType) && this[`use${LoginType}`]) {
                            tabs.push({
                                title: TAB_MAP[LoginType],
                                value: LoginType,
                            });
                        } else if (AUTH_LIST.includes(LoginType) && this[`use${LoginType}`]) {
                            authTypes.push({
                                title: LOGIN_TYPES_MAP[LoginType].Full,
                                value: LoginType,
                            });
                        }
                    });
                } catch (error) {
                    console.info(error);
                    tabs = [{
                        title: 'Normal Login',
                        value: 'Normal',
                    }];
                    authTypes = [];
                }
                this.tabs = tabs;
                this.authTypes = authTypes;
                if (tabs.length > 0) {
                    this.account.LoginType = tabs[0].value;
                } else {
                    this.hasTabLoginTypes = false;
                    if (authTypes.length === 1) {
                        // When there is only one Auth login, log in directly
                        this.jumpAuth(authTypes[0].value);
                    } else if (authTypes.length === 0) {
                        this.showNoneTips = true;
                    }
                }
                this.loading = false;
            },
            async login() {
                let errMsg;
                try {
                    errMsg = '';
                    await this.$refs.accValidator.validate();
                    await this.$refs.pwdValidator.validate();
                    const { AccountId, AccountPassword, LoginType } = this.account;
                    let res;
                    if (this.low) {
                        res = await localService.login({
                            url: `/system/login`,
                            data: {
                                UserName: AccountId,
                                Password: AccountPassword,
                                LoginType,
                                TenantName: this.tenantName,
                            },
                            headers: {
                                Env: this.env,
                            },
                        });
                        const { authorization } = res.headers;
                        const { userName, userId } = res; // The structure of the login information returned by the product
                        cookie.set({ authorization });
                        this.$emit('success', { Authorization: authorization, UserName: userName, UserId: userId, LoginType });
    
                    } else {
                        res = await service.login({
                            url: this.nuimsUrl,
                            data: {
                                UserName: AccountId,
                                Password: AccountPassword,
                                LoginType,
                                TenantName: this.tenantName,
                                DomainName: NUIMS_DOMAIN_NAME,
                            },
                            headers: {
                                Env: this.env,
                            },
                        });
                        const { authorization } = res.headers;
                        const { UserName, UserId } = res.data.Data;
                        cookie.set({ authorization });
                        this.$emit('success', { Authorization: authorization, UserName, UserId, LoginType });
                    }
    
                } catch (error) {
                    errMsg = error && error.message;
                    if (
                        errMsg
                        === 'Parameter error, please check the following request parameters: UserName or Password'
                    ) {
                        errMsg = 'Please enter the correct account or password';
                    }
                    this.$emit('error', { Message: errMsg || 'login error' });
                }
                this.errMsg = errMsg;
            },
            // Auth login
            jumpAuth(type) {
                const { search } = location;
                localStorage.setItem('compType', 'pass');
                const { redirect = encodeURIComponent(location.href) } = queryString.parse(search);
                // Non-sinking mode, you need to jump to the centralized login of nuims
                location.href = `${this.low ? location.href: this.passSrc}/?redirect=${redirect}&loginType=C${type}`;
            },
            rmErrMsg() {
                this.errMsg = '';
            },
            async getTenantConfigForPass() {
                // Jump back and refresh the page. You need to request a configuration at this time.
                const AuthConfigMap = {};
                let res;
                if (this.low) {
                    res = await localService.getTenantLoginTypes({
                        url: `/system/loginTypes`,
                    });
                } else {
                    res = await service.getTenantLoginTypes({
                        url: this.nuimsUrl,
                        params: { TenantName: this.tenantName || getTenant() },
                    });
                }
    
                getArr(getObj(res).data.Data).forEach((d) => {
                    const { LoginType, AppKey, IcbcConfig } = getObj(d);
                    if (AUTH_LIST.includes(LoginType)) {
                        AuthConfigMap[LoginType] = AppKey || IcbcConfig;
                    }
                });
                this.AuthConfigMap = AuthConfigMap;
            },
            async jumpAuthPass() {
                // Because the component will be refreshed after jumping back, the configuration information needs to be requested once
                await this.getTenantConfigForPass()
                const { origin, search } = location;
                const query = queryString.parse(search);
                let { redirect, loginType } = query;
    
                if (redirect) {
                    localStorage.setItem('From', redirect);
                    cookie.set({ From: redirect });
                }
                localStorage.setItem('compType', 'cb');
                const redirectUri = `${origin}/login?redirect=${redirect}`;
                localStorage.setItem('LoginType', loginType);
                localStorage.setItem('RedirectUri', redirectUri);
                cookie.set({ RedirectUri: redirectUri, LoginType: loginType });
    
                let authUrl;
                switch (loginType) {
                    case 'Netease':
                    case 'CNetease':
                        authUrl = `https://login.netease.com/connect/authorize?${queryString.stringify({
                            response_type: 'code',
                            scope: 'openid nickname',
                            client_id: this.AuthConfigMap.Netease,
                            redirect_uri: redirectUri,
                        })}`;
                        break;
                    case 'Github':
                    case 'CGithub':
                        authUrl = `https://github.com/login/oauth/authorize?${queryString.stringify({
                            response_type: 'code',
                            scope: 'user:email',
                            client_id: this.AuthConfigMap.Github,
                            redirect_uri: redirectUri,
                        })}`;
                        break;
                    case 'FB':
                    case 'CFB':
                        authUrl = `https://open.weixin.qq.com/connect/qrconnect?${queryString.stringify({
                            response_type: 'code',
                            scope: 'snsapi_login',
                            appid: this.AuthConfigMap.FB,
                            redirect_uri: redirectUri,
                        })}`;
                        break;
                    case 'Icbc':
                    case 'CIcbc':
                        // eslint-disable-next-line no-case-declarations
                        const { IcbcAAMUrl, Version, Style, Op, OpMode, Lang, ServiceName } = this.AuthConfigMap.Icbc;
                        authUrl = `${IcbcAAMUrl}?${queryString.stringify({
                            SERVICENAME: ServiceName,
                            SERVICEURL: redirectUri,
                            VERSION: Version,
                            STYLE: Style,
                            ON: On,
                            OPMode: OpMode,
                            lang: Lang,
                        })}`;
                        break;
                }
                location.href = authUrl;
            },
        },
    };
    </script>
    
    <style module>
    .root {
        width: 410px;
        height: 380px;
        margin: car;
        padding-top: 30px;
        background: #fff;
        box-shadow: 0 0 10px 0 rgba(80, 90, 109, 0.16);
        transition: box-shadow 0.2s;
    }
    
    .loading {
        width: 100%;
        height: 100%;
    }
    
    .form {
        width: 325px;
        margin: 0 auto;
        padding: 0;
        text-align: left;
    }
    
    .prefix {
        color: #ccc;
        font-size: 18px;
        cursor: pointer;
        position: absolute;
        left: 5px;
    }
    
    .suffix {
        color: #ccc;
        font-size: 18px;
        cursor: pointer;
        font-size: 20px;
        position: absolute;
        right: 25px;
    }
    
    .error {
        color: var(--brand-error);
        display: inline-block;
        max-width: 85px;
    }
    
    .link {
        display: inline-block;
        min-width: 60px;
    }
    
    .tips {
        font-size: var(--font-size-small);
        color: var(--color-lighter);
    }
    
    .links {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    
    .loading {
        width: 80px;
        height: 20px;
        position: fixed;
        left: 50%;
        top: 20%;
        margin-left: -40px;
        text-align: center;
    }
    .loading span {
        display: inline-block;
        width: 8px;
        margin-right: 8px;
        height: 100%;
        border-radius: 4px;
        background: var(--brand-primary);
        animation: load 1.04s ease infinite;
    }
    @keyframes load {
        0%,
        100% {
            height: 20px;
            background: var(--brand-primary-light);
        }
        50% {
            height: 30px;
            margin-top: -10px;
            background: var(--brand-primary-lightest);
        }
    }
    .loading span:nth-child(2) {
        animation-delay: 0.13s;
    }
    .loading span:nth-child(3) {
        animation-delay: 0.26s;
    }
    .loading span:nth-child(4) {
        animation-delay: 0.39s;
    }
    .loading span:nth-child(5) {
        animation-delay: 0.52s;
    }
    </style>