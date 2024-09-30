export const NUIMS_DOMAIN_NAME = 'Nuims';

export function isType(type) {
    return function (obj) {
        return (
            obj !== null
            && (Array.isArray(type) ? type : [type]).some(
                (t) => Object.prototype.toString.call(obj) === `[object ${t}]`,
            )
        );
    };
}

export const isObj = isType('Object');
export const getObj = (obj) => (isObj(obj) ? obj : {});

export const rmLastSlash = (str) => {
    const cStr = String(str);
    return cStr[cStr.length - 1] === '/' ? cStr.substring(0, cStr.length - 1) : cStr;
};

export const getArr = (arr) => (Array.isArray(arr) ? arr : []);


export const isEnv = (env) => ['dev', 'online'].includes(env) || env.includes('test');

export const getTenant = () => {
    const hostArr = location.host.split('.');
    const userIndex = hostArr.indexOf('user');
    if (userIndex > 0)
        return hostArr[userIndex - 1];
    const localIndex = hostArr.findIndex((h) => h.includes('localhost'));
    if (localIndex > 0)
        return hostArr[localIndex - 1];
    if (hostArr.length <= 3)
        return 'defaultTenant';
    return isEnv(hostArr[0]) ? hostArr[1] : hostArr[0];
};

// Login related configuration
export const LOGIN_TYPES_MAP = {
    Normal: { Short: 'Normal', Full: 'Normal login' },
    KW: { Short: 'Kubeworkz', Full: 'Kubeworkz login' },
    Ldap: { Short: 'LDAP', Full: 'LDAP login' },
    FB: { Short: 'FB', Full: 'Facebook login' },
    Github: { Short: 'Github', Full: 'Github login' },
    SaasHQ: { Short: 'OpenID', Full: 'OpenID login' },
    Urs: { Short: 'Urs', Full: 'Urs login' },
    Icbc: { Short: 'ICBC', Full: 'ICBC login' },
};
export const TAB_MAP = {
    Normal: LOGIN_TYPES_MAP.Normal.Full,
    KW: LOGIN_TYPES_MAP.KW.Short,
    Ldap: LOGIN_TYPES_MAP.Ldap.Short,
};
// Non-AUTH login, login through account and password
export const NO_AUTH_LIST = Object.keys(TAB_MAP);
// AUTH login, login through link jump form
export const AUTH_LIST = Object.keys(LOGIN_TYPES_MAP)
    .filter((key) => !NO_AUTH_LIST.includes(key));
