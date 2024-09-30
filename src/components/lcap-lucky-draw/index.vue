<template>
  <div :class="$style.root">
    <LuckyGrid
      v-if="showGrid"
      ref="myLucky"
      :width="width"
      :height="height"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallback"
      @end="endCallback"
    />
    <u-modal
      v-if="prize_popup"
      :visible.sync="visible"
      cancel-button
      @ok="handleOk"
      :mode=false
      size="small"
      title="Lottery Results"
    >
      <div slot="body">
        <div class="result">
            <span>Congratulations on winning {{ currentPrize }}!</span>
        </div>
      </div>
    </u-modal>
  </div>
</template>

<script>
import VueLuckyCanvas from '@lucky-canvas/vue';
import { UModal } from 'cloud-ui.kubevue/src/components/u-modal.vue';
import Vue from 'vue';

Vue.use(VueLuckyCanvas);
export default {
  name: 'lcap-lucky-draw',
  data() {
    return {
      showGrid: true,
      visible: false,
      currentPrize: '',
      blocks: [
        {padding: '10px', background: this.background_color || '#2850c4'},
        {padding: '10px', background: this.background_color || '#2850c4'},
      ],
      buttons: [{
          x: 1, y: 1,
          imgs: [{src: this.start_img || require('./assets/start_huyu.png'), width: '100%', height: '100%'}],
        }],
    }
  },
  components: {
    UModal,
  },
  watch: {
    width() {
      this.$nextTick(() => {
        this.showGrid = true;
      });
      this.showGrid = false;
    },
    height() {
      this.$nextTick(() => {
        this.showGrid = true;
      });
      this.showGrid = false;
    }
  },
  computed: {
    prizes() {
      return [
        {
          x: 0,
          y: 0,
          background: '#899df3',
          fonts: [{text: this.block1_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block1_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block1_chance
        },
        {
          x: 1,
          y: 0,
          background: '#9c9dd8',
          fonts: [{text: this.block2_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block2_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block2_chance
        },
        {
          x: 2,
          y: 0,
          background: '#899df3',
          fonts: [{text: this.block3_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block3_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block3_chance
        },
        {
          x: 2,
          y: 1,
          background: '#9c9dd8',
          fonts: [{text: this.block4_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block4_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block4_chance
        },
        {
          x: 2,
          y: 2,
          background: '#899df3',
          fonts: [{text: this.block5_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block5_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block5_chance
        },
        {
          x: 1,
          y: 2,
          background: '#9c9dd8',
          fonts: [{text: this.block6_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block6_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block6_chance
        },
        {
          x: 0,
          y: 2,
          background: '#899df3',
          fonts: [{text: this.block7_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block7_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block7_chance
        },
        {
          x: 0,
          y: 1,
          background: '#9c9dd8',
          fonts: [{text: this.block8_name, top: this.font_top_padding, fontSize: this.font_size, fontColor: this.font_color || '#EB4528'}],
          borderRadius: '5px',
          imgs: [{src: this.block8_img || require('./assets/prize.png'), width: '90%', height: '90%', top: '5%' }],
          range: this.block8_chance
        },
      ]
    },
  },
  props: {
    width: {type: String, default: '375px'},
    height: {type: String, default: '375px'},
    block1_name: {type: String, default: ''},
    block2_name: {type: String, default: ''},
    block3_name: {type: String, default: ''},
    block4_name: {type: String, default: ''},
    block5_name: {type: String, default: ''},
    block6_name: {type: String, default: ''},
    block7_name: {type: String, default: ''},
    block8_name: {type: String, default: ''},
    block1_chance: {type: Number, default: 10},
    block2_chance: {type: Number, default: 10},
    block3_chance: {type: Number, default: 10},
    block4_chance: {type: Number, default: 10},
    block5_chance: {type: Number, default: 10},
    block6_chance: {type: Number, default: 10},
    block7_chance: {type: Number, default: 10},
    block8_chance: {type: Number, default: 10},
    block1_img: {type: String, default: ''},
    block2_img: {type: String, default: ''},
    block3_img: {type: String, default: ''},
    block4_img: {type: String, default: ''},
    block5_img: {type: String, default: ''},
    block6_img: {type: String, default: ''},
    block7_img: {type: String, default: ''},
    block8_img: {type: String, default: ''},
    start_img: {type: String, default: ''},
    background_color: {type: String, default: ''},
    font_color: {type: String, default: ''},
    font_top_padding: {type: String, default: '60px'},
    font_size: {type: String, default: '22px'},
    prize_popup: {type:Boolean, default: false},
    return_prize: {type: String, default: ""},
  },
  methods: {
    // Clicking the lottery button will trigger the star callback
    startCallback() {
      // Call the play method of the lottery component to start the game
      this.$emit('start');
      this.currentPrize = '';
      this.$refs.myLucky.play();
      setTimeout(() => {
        if (this.return_prize) {
          const prizeIndex = this.transPrize2Index(this.return_prize);
          this.$refs.myLucky.stop(prizeIndex);
        } else {
          this.$refs.myLucky.stop();
        }
      }, 1500);
    },
    // The end of the lottery will trigger the end callback
    endCallback(prize) {
      this.visible = true;
      this.currentPrize = prize.fonts[0].text;
      this.$emit('end', this.currentPrize);
    },
    handleOk() {
      this.visible = false;
      this.currentPrize = '';
    },
    transPrize2Index(prize) {
      const prizeList = [this.block1_name, this.block2_name, this.block3_name, this.block4_name,
                         this.block5_name, this.block6_name, this.block7_name, this.block8_name]
      return prizeList.indexOf(prize) || '';
    },
  }

};
</script>

<style module>
.root {
  display: inline-block;
}
</style>
