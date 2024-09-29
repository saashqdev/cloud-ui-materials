<template>
<div :class="$style.root" ref="outBox" v-if="running">
    <div
        :class="$style.textBox"
        ref="box"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
    >
        <span
            v-for="(item, i) in dataList"
            @click="handleClick(item, i)"
            :key="i"
            :style="{ paddingRight: gap + 'px' }"
        >{{ item }}</span
        >
    </div>
</div>
</template>
<script>
export default {
    name: 'lcap-carousel',
    props: {
        // The passed string array
        dataSource: {
            type: [Function, Array, Object],
            default: () => [],
        },
        // Playback speed
        speed: {
            type: Number,
            default: 30,
        },
        // If the pixels moved each time are too large, it will cause a "very stuck" visual effect.
        movePx: {
            type: Number,
            default: 2,
        },
        // Space between two texts
        gap: {
            type: Number,
            default: 10,
        },
        // The time the element stays displayed each time
        waitTime: {
            type: Number,
            default: 0,
        },
        // Whether to stop moving after the mouse is placed on it
        hoverStop: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            timer: null,
            x: 0,
            isScrolling: true,
            index: 0,
            childWidth: 0,
            running: false,
            dataList: [],
        };
    },
    watch: {
        dataSource: {
            async handler(val) {
                let dataList = await this.handleDataSource(val);
                if (!Array.isArray(dataList)) {
                    console.error(`[lcap-carousel] Please confirm the final result is an array in 'data-source' prop.`);
                    dataList = [];
                }
                if (dataList.length > 0) {
                    this.dataList = dataList;
                    this.run();
                }
            },
            immediate: true,
        },
    },
    beforeDestroy() {
        // Clear the timer when the component is destroyed
        clearInterval(this.timer);
    },
    methods: {
        run() {
            this.running = true;
            this.$nextTick(() => {
                this.renderDom();
            });
        },
        renderDom() {
            // Get the Dom element of the outer box
            const outBox = this.$refs.outBox;
            // Get the Dom element of the box inside
            const box = this.$refs.box;
            const outWidth = outBox.offsetWidth;
            //Set the starting playback position to appear on the rightmost side of the parent box
            const startX = outWidth;
            box.style.transform = `translateX(${startX}px)`;
            this.x = startX;
            // Get the width of the first child element
            this.childWidth = [...box.childNodes][this.index].offsetWidth;
            // Get the total width of child elements
            this.timer = setInterval(() => {
                if (!this.isScrolling)
                    return;
                const box = this.$refs.box;
                if (!box) {
                    return;
                }
                const childNodes = [...box.childNodes];
                const totalChildWidth = childNodes.reduce(
                    (pre, cur) => pre + cur.offsetWidth,
                    0,
                );
                box.style.transform = `translateX(${this.x}px)`;
                this.x -= this.movePx;
                if (-this.x >= totalChildWidth) {
                    // Restart playback after finishing playing
                    this.x = startX;
                    this.index = 0;
                    this.childWidth = childNodes[this.index].offsetWidth;
                    return;
                }
                if (-this.x >= this.childWidth && this.waitTime) {
                    // If the index element is passed, start waiting
                    this.index++;
                    this.childWidth += childNodes[this.index].offsetWidth;
                    this.isScrolling = false;
                    setTimeout(() => {
                        this.isScrolling = true;
                    }, this.waitTime);
                }
            }, this.speed);
        },
        /**
         * @descript Triggered by placing the mouse on it
         */
        mouseenter() {
            if (!this.hoverStop)
                return;
            this.isScrolling = false;
        },
        /**
         * @descript Triggered when mouse leaves
         */
        mouseleave() {
            this.isScrolling = true;
        },
        handleClick(item, index) {
            this.$emit('click', item, index);
        },
        async handleDataSource(dataSource) {
            if (!dataSource) {
                return [];
            }
            if (dataSource instanceof Promise || typeof dataSource === 'function') {
                const result = await dataSource(this.page);
                return this.getData(result);
            }
            return this.getData(dataSource);
        },
        isDataSource(data) {
            return Object.prototype.toString.call(data) === '[object Object]' && data.content;
        },
        getData(dataSource) {
            if (Array.isArray(dataSource)) {
                return dataSource;
            } else if (this.isDataSource(dataSource)) {
                return dataSource.content;
            }
            return [];
        },
        async reload() {
            let dataList = await this.handleDataSource(this.dataSource);
            if (!Array.isArray(dataList)) {
                console.error(`[lcap-carousel] Please confirm the final result is an array in 'data-source' prop.`);
                dataList = [];
            }
            if (dataList.length > 0) {
                this.dataList = dataList;
            }
        },
    },
};
</script>
<style module>
.root {
    width: 100%;
    overflow: hidden;
}

.root .textBox {
    white-space: nowrap;
}

.root .textBox span:hover {
    cursor: pointer;
    text-decoration: underline;
    color: var(--brand-primary);
}
</style>
