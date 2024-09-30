<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapH5AmapPoi Map Point Selection

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**AMAP**

Map point selection

## Example
### Basic Usage

``` html
<lcap-h5-amap-poi></lcap-h5-amap-poi>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| city | string | | | Default city |

### Events

#### @select

After the click is selected, the logic can be called (for example, after selecting Chengbei Sports Park, the detailed address information will be automatically filled in the detailed address input box)

Methods

#### poiPicked()

After the POI point is selected, obtain the longitude, latitude and detailed address information

