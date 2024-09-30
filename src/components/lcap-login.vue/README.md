<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapLogin Login

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Runtime**

Unified authentication login component of account and authority center

## Example
### Basic Usage

``` html
<lcap-login src="http://nuims.kubevue.top"></lcap-login>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| useNormal | boolean | | `true` | Whether to enable normal login, enabled by default |
| useKW | boolean | | `false` | Whether to enable Qingzhou login, closed by default |
| useLdap | boolean | | `false` | Whether to enable LDAP login, closed by default |
| useSaasHQ | boolean | | `false` | Whether to enable OpenID login, closed by default |
| useGithub | boolean | | `false` | Whether to enable Github login, closed by default |
| useFB | boolean | | `false` | Whether to enable WeChat login, closed by default |
| useIcbc | boolean | | `false` | Whether to enable ICBC login, closed by default |
| exdays | number | | `1` | Set cookie expiration days |

### Events

#### @success

Triggered after successful login

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.Authorization | string | AccessToken issued to the user after successful login |
| $event.UserId | string | User ID |
| $event.UserName | string | Username |
| $event.Message | string | Login successful message |

#### @error

Triggered after failed login

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.Message | string | Login failure message |

