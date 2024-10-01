<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapSignature Signature Pad

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Switch Language Version](#switch language version)
    -[Close](#close)
    - [Whether Re-Signing is Allowed](#Whether re-signing is allowed)
    - [Change Brush Color](#change brush color)
    - [Change Brush Thickness](#Change Brush Thickness)
    - [Change Background Color](#changebackground color)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Form**

For obtaining electronic signatures

## Example
### Basic Usage

``` html
<lcap-signature></lcap-signature>
<u-button ref="button1" color="primary" text="OK"></u-button>
```

### Switch Language Version
``` html
<lcap-signature language="english"></lcap-signature>
```

### Close
``` html
<lcap-signature :openSmooth=false></lcap-signature>
```

### Whether to Allow Re-Signing
``` html
<lcap-signature :openSmooth=false :reSignName=true></lcap-signature>
```

### Change Brush Color
``` html
<lcap-signature penColor="red"></lcap-signature>
```

### Change Brush Thickness
``` html
<lcap-signature :penWidth=20></lcap-signature>
```

### Change Background Color
``` html
<lcap-signature bgColor="#FFFFFF"></lcap-signature>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| language | string | `[object Object]`<br/>`[object Object]` | `'english'` | Language version |
| openSmooth | boolean | | `true` | Whether to turn on pen edge |
| penColor | string | | `'black'` | Set pen color |
| reSignName | boolean | | `false` | Whether to allow the user to re-sign |
| penWidth | number | | `2` | Set the brush width |
| bgColor | string | | `'#F8F9FA'` | Set the canvas background color |

### Events

#### @openSignatureModal

Triggered when opening a signed version

#### @clearSignature

Triggered when clearing the signed version

#### @saveSignature

Triggered when saving signature

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.signature | any | Return the base64 of the signature |

Methods

#### openSignatureModal()

Open signed version

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

