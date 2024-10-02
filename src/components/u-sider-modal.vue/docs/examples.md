### Basic Usage

Set location

```vue
<template>
<div>
Position switch<u-switch v-model="switchToggle" style="margin:0 20px 10px 0;">Switch</u-switch>
Upper and lower position settings: <u-input style="margin:0 20px 10px 0;" type="number" v-model="posY"></u-input>
Button text: <u-input style="margin:0 20px 10px 0;" v-model="btnText"></u-input>
<u-button style="margin:0 20px 10px 0;" @click="() => {this.toggle = !this.toggle}">Show/Hide</u-button>
<u-sider-modal :position="posValue" :toggleShow="toggle" :buttonText="btnText" :positionY="posY">
    <div style="height:40px">Content</div>
</u-sider-modal>
</div>
</template>

<script>
    export default {
        data() {
            return {
                posValue: 'left',
                switchToggle: false,
                toggle: false,
                posY: '0',
                btnText: ''
            }
        },
        watch: {
            switchToggle(value) {
                if (value) {
                    this.posValue = 'right';
                } else {
                    this.posValue = 'left';
                }
            }
        }
    }
</script>
```

