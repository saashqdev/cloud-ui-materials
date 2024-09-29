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
