<template>
  <div :class="$style.root" border>
    <echart-basic
      v-if="!loading"
      :size="size"
      :sourceData="sourceData"
      :options="options"
      @startLoading="startLoading"
      ref="echart"
    ></echart-basic>
    <div v-else :style="size">
      <img :src="require('./assets/barEmpty.png')" :class="$style.emptyImage">
    </div>
  </div>
</template>

<script>
import {fakeData} from "@/fakeData";
import echartBasic from "@/component/echartBasic";
import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts
export default {
  name: 'lcap-echarts-basic',
  components: {echartBasic},
  props: {
    dataSource: [Function, Array, Object],
    options: {type: Object, default: () => ({})},
    width: {type: String, default: '380px'},
    height: {type: String, default: '300px'},

  },
  data() {
    return {
      sourceData: undefined,
      loading: false,
    };
  },
  created() {
    this.init();
  },
  computed: {
    size() {
      return {
        width: this.width,
        height: this.height,
      }
    },
  },
  watch: {
    changedObj: {
      handler() {
        this.init();
      }
    }
  },
  methods: {
    reload() {
      this.sourceData = 'fakeData';
      this.$nextTick(async () => {
        this.sourceData = await this.handleDataSource(this.dataSource);
        this.loading = false;
        this.$refs.echart && this.$refs.echart.reload();
        console.log('source', this.sourceData);
      });
    },
    async init() {
      // The local startup and development environment use fake data, and the production environment replaces it with real data
      const fnDataSource = (this.$env.VUE_APP_DESIGNER || !window.appInfo) ? fakeData : this.dataSource;
      this.sourceData = await this.handleDataSource(fnDataSource);
    },
    async handleDataSource(dataSource) {
      if (!dataSource) {
        return [];
      }
      if (dataSource instanceof Promise || typeof dataSource === 'function') {
        const result = await dataSource();
        return this.getData(result);
      }
      return this.getData(dataSource);
    },
    getData(dataSource) {
      if (typeof (dataSource) === 'string') {
        dataSource = dataSource.replace(/'/g, '"');
        return JSON.parse(dataSource);
      }
      return dataSource;
    },
    startLoading() {
      this.loading = true;
    },
  }
};
</script>

<style module>
.root {
  display: inline-block;
}

.root[border] {
  border: 1px solid var(--border-color-base);
  padding: 15px;
}

.emptyImage {
  width: 100%;
  height: 100%;
}
</style>
