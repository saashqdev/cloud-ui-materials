<template>
  <div :class="$style.root">
    <div @click="getLocation" :class="$style.btn">popo-sdk</div>
  </div>
</template>

<script>
import { pp } from "@popo-bridge/web";

export default {
  name: "lcap-h5-popo-location",
  props: {
    value: {
      type: [String, Object],
    },
  },
  data() {
    return {
      where: "",
      deviceId: "",
    };
  },
  watch: {
    where(val) {
      this.$emit("update:value", JSON.stringify(val));
    },
    deviceId(val) {
      this.$emit("update:deviceid", val);
    },
  },
  mounted() {
  },
  methods: {
    async getLocation() {
      // Determine whether POPO authorizes the application
      const { status } = await pp.checkSetting({
        scope: "location",
      });
      if (status === 0) {
        // Unknown status (the user has not set this permission status)
        window.vant.VanDialog.confirm({
          message: "Location permission is not set, do you need authorization?",
        })
          .then(async () => {
            const isAllowed = await pp.authorize({
              scope: "location",
              description: "Apply to obtain the geographical location information of the device",
            });
            if (isAllowed) {
              pp.showToast({
                title: "POPO authorization successful",
              });
              this.allPermissionGranted();
            } else {
              // Prompt the user that the positioning permission has not been enabled, display the prompt button to enable positioning permission, and call pp.openSetting() after the user clicks the button.
              // Or a prompt will pop up here to ask the user whether he or she needs to go to the settings page to enable permissions. (Equivalent to the logic of pp.checkSetting returning status == 1)
            }
          })
          .catch(() => {});
      } else if (status === 1) {
        // permission denied
        window.vant.VanDialog.confirm({
          message: "No permission. Do I need to go to the settings page to enable permission?",
        })
          .then(() => {
            pp.openSetting();
          })
          .catch(() => {});
      } else if (status === 2) {
        // authorized
        this.allPermissionGranted();
      }
    },
    async allPermissionGranted() {
      try {
        const location = await pp.getLocation();
        this.where = location;
      } catch (e) {
        pp.showToast({ title: e.message, durationType: 2 });
      }
    },
    async getDeviceID() {
      const ret = await pp.getDeviceID();
      this.deviceId = ret;
    }
  },
};
</script>
<style module>
.root {
}
.btn {
  line-height: 50px;
  color: #fff;
  background-color: red;
  text-align: center;
}
</style>
