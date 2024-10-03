<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapCarousel Text Scroll Bar

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**InfoDisplay**

Text scroll bar

## Example
### Basic Usage

``` vue
<template>
    <lcap-carousel
        :data-source="dataList"
        :speed="speed"
        :hoverStop="hoverStop"
        :gap="gap"
        @click="onClick"
    ></lcap-carousel>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      speed: 30,
      hoverStop: true,
      gap: 30,
    }
  },
  mounted() {
    this.dataList = ["No. 1 data xxxxxxxxxxx",
      "Item 2 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 3 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 4 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 5 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 6 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 7 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 8 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 9 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 10 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 11 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Item 12 data xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ];
  },
  methods: {
    onClick(item, index) {
      console.log(item, index);
    },
  }
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array | | `[]` | Text list |
| speed | Number | | `30` | Scroll speed |
| hoverStop | Boolean | | `false` | Stop scrolling when the mouse is hovering |
| gap | Number | | `20` | Interval, unit px |

### Events

#### @click

Event triggered when clicked

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Current value |

Methods

#### reload()

Clear cache and reload

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

