<template>
  <div class="container">
    <div v-if="showBackArrow" class="nav-back">
      <ArrowBack />
    </div>

    <div class="body">
      <div class="bg-lookdown">
        <img width="100%" :src="ImageBgLookdown" />
      </div>
      <div class="bg-acl">
        <img width="100%" :src="roundedBg ? ImageBgAclRounded : ImageBgAcl" />
      </div>
      <div v-if="!roundedBg" class="gif-static-xyrts">
        <img width="100px" height="100px" :src="staticXyrts ? ImageXyrtsStatic : ImageXyrts" />
      </div>

      <!-- 单产品封面 start -->
      <div v-if="verifyTheTruth === 'single'" class="bg-marker">
        <img width="100%" :src="ImageMarker" />
      </div>
      <div v-if="verifyTheTruth === 'single'" class="product-image">
        <img width="100%" :src="ImageProduct2" />
        <img class="img-search" :src="ImageSearch" />
      </div>
      <div v-if="verifyTheTruth === 'single'" class="cover-image" />
      <div v-if="verifyTheTruth === 'single'" class="search-btn-box" @click="searchHandler">
        <div class="search-btn flex-between">
          <IconZoomOut />
          <span class="text-white">获得产品资料</span>
        </div>
      </div>
      <!-- 单产品封面 end -->

      <!-- 多产品封面 start -->
      <div v-if="verifyTheTruth === 'multiple'" class="product-shelf">
        <div class="text-center">
          <img style="width: 86%; transform: translateY(14px);" :src="Imageshelf1" />
          <img width="100%" :src="ImageshelfV1" />
        </div>
        <div class="text-center">
          <img style="width: 86%; transform: translateY(14px);" :src="Imageshelf2" />
          <img width="100%" :src="ImageshelfV1" />
        </div>
        <div class="text-center">
          <img style="width: 86%; transform: translateY(14px);" :src="Imageshelf3" />
          <img width="100%" :src="ImageshelfV1" />
        </div>
        <!-- <img width="100%" :src="ImageLight" /> -->
        <!-- <img width="100%" :src="ImageCart" /> -->
      </div>
      <!-- 多产品封面 end -->

      <div v-if="descriptions.length" class="content bg-white">
        <p class="title text-black text-center">{{ title }}</p>
        <div class="paragraph-box">
          <p
            v-for="(desc, index) in descriptions"
            :key="index"
            class="paragraph text-black"
          >{{ desc }}</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div v-if="agreements.length" class="entrance">
        <div class="entrance__left" @click="explainHandler(0)">说明</div>
        <div class="entrance__right" @click="explainHandler(1)">彩票兑换说明</div>
      </div>
      <img width="100%" :src="ImageFooter" />
    </div>

    <div v-if="agreements.length && showAgreementMix" class="mask">
      <div class="agreement bg-white">
        <p class="agreement__title text-black text-center">{{ title }}</p>
        <div class="agreement__paragraph-box">
          <p
            v-for="(desc, index) in agreements"
            :key="index"
            class="paragraph text-black"
          >{{ desc }}</p>
        </div>
        <div class="agreement__footer flex-between">
          <AClButton type="danger" @click="operateHandler(0)">拒绝</AClButton>
          <AClButton type="success" @click="operateHandler(1)">确定</AClButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageBgLookdown from '@/assets/images/bg_lookdown.png'
import ImageBgAcl from '@/assets/images/bg_acl.png'
import ImageBgAclRounded from '@/assets/images/bg_acl_rounded.png'
import ImageXyrts from '@/assets/images/xyrts.gif'
import ImageXyrtsStatic from '@/assets/images/xyrts.png'
import ImageMarker from '@/assets/images/marker.png'
import ImageProduct2 from '@/assets/images/product_2.jpg'
import ImageshelfV1 from '@/assets/images/shelf_v1.png'
import Imageshelf1 from '@/assets/images/shelf_1.png'
import Imageshelf2 from '@/assets/images/shelf_2.png'
import Imageshelf3 from '@/assets/images/shelf_3.png'
// import ImageLight from '@/assets/images/light.png'
// import ImageCart from '@/assets/images/cart.png'
import ImageSearch from '@/assets/images/search.png'
import ImageFooter from '@/assets/images/footer.png'
import IconZoomOut from '@/assets/icons/IconZoomOut.vue'

// defineProps and defineEmits start
const props = defineProps({
  showBackArrow: {
    type: Boolean,
  },
  title: {
    type: String,
    default: '说明',
  },
  descriptions: {
    type: Array as () => string[],
    default: () => [],
  },
  agreements: {
    type: Array as () => string[],
    default: () => [],
  },
  roundedBg: {
    type: Boolean,
  },
  staticXyrts: {
    type: Boolean,
  },
  showAgreement: {
    type: Boolean,
    default: true,
  },
  verifyTheTruth: {
    type: String,
    default: 'single',
    validator: (val: string) => {
      return ['single', 'multiple'].includes(val);
    }
  },
});
const emits = defineEmits([
  'search-click',
  'explain-click',
  'operate-click',
])
// defineProps and defineEmits end

function searchHandler(): void {
  emits('search-click')
}

function explainHandler(index: number): void {
  emits('explain-click', index)
}

const showAgreementMix = ref<boolean>(props.showAgreement)
function operateHandler(index: number): void {
  showAgreementMix.value = false;
  emits('operate-click', index)
}
</script>

<style scoped lang="less">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .nav-back {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 12;
  }

  .body {
    flex: 1;
    .bg-lookdown {
      width: 100%;
      height: 0;
    }

    .bg-acl {
      height: calc(100vh - 77px);
    }

    .gif-static-xyrts {
      position: absolute;
      top: 120px;
      right: 20px;
    }

    .bg-marker {
      position: absolute;
      top: 260px;
      left: 20px;
      right: 20px;
      margin: auto;
    }
    .product-image {
      position: absolute;
      top: 220px;
      left: 0;
      right: 0;
      margin: auto;
      .img-search {
        position: relative;
        z-index: 6;
        width: 282px;
        height: 299px;
        transform: translate3d(70px, -390px, 0px);
      }
    }
    .product-shelf {
      position: absolute;
      top: 240px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .cover-image {
      position: absolute;
      top: 190px;
      left: -64px;
      width: 500px;
      height: 500px;
      background-image: url('@/assets/images/product_3.png');
      background-repeat: no-repeat;
      background-size: 100% 104%;
      clip-path: circle(20%);
    }
    .search-btn-box {
      position: absolute;
      left: 40px;
      right: 40px;
      bottom: 150px;
      z-index: 8;
      margin: auto;
      width: 180px;
      height: 52px;
      border-radius: 79px;
      background: linear-gradient(0deg, #EDCD9B 13.41%, #E44 100%);
      .search-btn {
        margin: 4px auto auto;
        padding-inline: 20px;
        width: 170px;
        height: 42px;
        border-radius: 79px;
        border: 1px solid #FFF;
      }
    }

    .content {
      position: absolute;
      top: 265px;
      right: 15px;
      left: 15px;
      bottom: 94px;
      z-index: 10;
      padding: 16px 16px 36px;
      border-radius: 10px;
      overflow: hidden;
      .title {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 140.625%;
        margin-block: 2px 6px;
      }
      .paragraph-box {
        height: 100%;
        overflow: auto;
        .paragraph {
          margin-top: 0;
          font-family: "Microsoft New Tai Lue";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  .footer {
    // position: relative;
    // bottom: -3px;
    z-index: 2;
    flex-shrink: 0;
    width: 100%;

    .entrance {
      position: relative;
      bottom: 55px;
      .entrance__left {
        position: absolute;
        left: 0;
        width: 112px;
        height: 40px;
        line-height: 42px;
        text-align: center;
        border-radius: 0px 50px 50px 0px;
        background: linear-gradient(180deg, rgba(223, 223, 223, 0.90) 0%, rgba(247, 255, 197, 0.90) 100%);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
        color: #690D0D;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        // line-height: normal;
      }
      .entrance__right {
        position: absolute;
        right: 0;
        width: 112px;
        height: 40px;
        line-height: 42px;
        text-align: center;
        border-radius: 50px 0px 0px 50px;
        background: linear-gradient(180deg, rgba(223, 223, 223, 0.90) 0%, rgba(247, 255, 197, 0.90) 100%);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
        color: #690D0D;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        // line-height: normal;
      }
    }
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

    .agreement {
      position: absolute;
      top: 94px;
      right: 15px;
      left: 15px;
      bottom: 94px;
      padding: 16px 16px 36px;
      border-radius: 5px;
      overflow: hidden;
      .agreement__title {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 140.625%;
        margin-block: 2px 6px;
      }
      .agreement__paragraph-box {
        height: calc(100% - 100px);
        overflow: auto;
        .paragraph {
          margin-top: 0;
          font-family: "Microsoft New Tai Lue";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .agreement__footer {
        gap: 20px;
        padding-top: 40px;
      }
    }
  }
}
</style>