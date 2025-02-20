<template>
  <div class="container">
    <div class="bg-lookdown">
      <img width="100%" :src="ImageBgLookdown" />
    </div>
    <div class="bg-acl">
      <img width="100%" :src="roundedBg ? ImageBgAclRounded : ImageBgAcl" />
    </div>
    <div v-if="!roundedBg" class="gif-xyrts">
      <img width="100px" height="100px" :src="ImageXyrts" />
    </div>

    <!-- <div class="mask" /> -->

    <div v-if="descriptions.length" class="content bg-white">
      <p class="title text-black text-center">{{ title }}</p>
      <p
        v-for="(desc, index) in descriptions"
        :key="index"
        class="paragraph text-black"
      >{{ desc }}</p>
    </div>

    <div class="footer">
      <img width="100%" :src="ImageFooter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageBgLookdown from '@/assets/images/bg_lookdown.png'
import ImageBgAcl from '@/assets/images/bg_acl.png'
import ImageBgAclRounded from '@/assets/images/bg_acl_rounded.png'
import ImageXyrts from '@/assets/images/xyrts.gif'
import ImageFooter from '@/assets/images/footer.png'

// defineProps and defineEmits start
const props = defineProps({
  title: {
    type: String,
    default: '说明',
  },
  descriptions: {
    type: Array as () => string[],
    default: () => [],
  },
  roundedBg: {
    type: Boolean,
  },
});
// defineProps and defineEmits end
</script>

<style scoped lang="less">
.container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  .bg-lookdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
  }
  .bg-acl {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .gif-xyrts {
    position: absolute;
    top: 120px;
    right: 20px;
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 8;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .content {
    position: relative;
    z-index: 10;
    // min-height: 510px;
    height: 310px;
    overflow: auto;
    margin: 265px 15px 0;
    padding: 16px 16px;
    border-radius: 10px;
    .title {
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140.625%;
      margin-block: 2px;
    }
    .paragraph {
      margin-top: 0;
      font-family: "Microsoft New Tai Lue";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .footer {
    position: fixed;
    bottom: -3px;
    left: 0;
    z-index: 5;
    width: 100%;
  }
}
</style>