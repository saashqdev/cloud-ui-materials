<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapYouData Count Report

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Chart**, **Runtime**

Numerous report integration components

## Example
### Basic Usage

``` html
<lcap-you-data src="https://kubevue.youdata.kubeworkz.io/dash/integration/450200717?rid=38269&token=159989189077219a5e8f0bfc4674648569b33" scale="width" style="width:1200px;height:1100px"></lcap-you-data>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| src | string | | `''` | Report address |
| scale | string | `'100'' (zoom 100%)<br/>`'width'` (adaptive width)<br/>`'screen'` (adaptive window) | `'100'' | Numerous scaling configurations |
| bottomBarPos | string | `'Place the bottom bar at the bottom'` ()<br/>`'Place the bottom bar at the top'` () | `'bottom'` | There are several bottom bar position configurations |
| hideProgressBar | boolean | | `true` | There are several top progress bar hidden configurations |
| hidePageBar | boolean | | `true` | There are several bottom toolbar hiding configurations |
| hideScaleBar | boolean | | `true` | Configurable hiding of scale bar |
| hideTitle | boolean | | `true` | There are several top title bar hidden configurations |
| hidePrivate | boolean | | `true` | Numerous private folder hiding configurations |
| hidePublic | boolean | | `true` | Several public folder hiding configurations |
| side | boolean | | `false` | Numerous sidebar configurations |
| toolbar | array | `'Export'` ()<br/>`'Refresh'` ()<br/>`'Print'` () | `[export, refresh, print]` | Numerous function key configurations |
| mode | string | `'simple'` (arrow switching)<br/>`'normal'` (tab switching) | `'normal'` | Several bottom navigation bar display mode configurations |

### Events

#### @load

Triggered after loading is complete

