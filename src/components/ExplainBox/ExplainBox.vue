<template>
  <div class="container">
    <div v-if="showBackArrow" class="nav-back">
      <ArrowBack />
    </div>

    <div class="body">
      <div class="bg-lookdown">
        <img class="bg-img" :src="ImageBgLookdown" />
      </div>
      <div class="bg-acl">
        <img class="bg-img" :src="roundedBg ? ImageBgAclRounded : ImageBgAcl" />
      </div>
      <div v-if="!roundedBg" class="gif-static-xyrts">
        <img
          width="100px"
          height="100px"
          :src="staticXyrts ? ImageXyrtsStatic : ImageXyrts"
        />
      </div>

      <!-- 单产品封面 start -->
      <div v-if="verifyTheTruth === 'single'" class="bg-marker">
        <img :src="ImageMarker" />
        <div class="img-product" />
        <img class="cover-image" :src="ImageProduct3" />
        <div class="zoom-big" :class="{ 'zoom-big--motion': zoomBigMotion }" />
      </div>
      <!-- 单产品封面 end -->

      <!-- 多产品封面 start -->
      <div v-if="verifyTheTruth === 'multiple'" class="product-shelf">
        <div class="product-shelf__item">
          <img class="bg-img0 bg-img1" :src="Imageshelf1" />
          <img class="bg-imgv1" :src="ImageshelfV1" />
        </div>
        <div class="product-shelf__item">
          <img class="bg-img0 bg-img2" :src="Imageshelf2" />
          <img class="bg-imgv1" :src="ImageshelfV1" />
        </div>
        <div class="product-shelf__item">
          <img class="bg-img0 bg-img3" :src="Imageshelf3" />
          <img class="bg-imgv1" :src="ImageshelfV1" />
        </div>

        <div class="product-show">
          <img class="product-show__img" :src="ImageProduct3" />
          <img
            class="product-show__img-search"
            :src="ImageSearch"
          />
        </div>

        <div v-show="zoomBigMotion" class="light-cart">
          <img class="light-cart__light" :src="ImageLight" />
          <img class="light-cart__cart" :src="ImageCart" />
        </div>
      </div>
      <!-- 多产品封面 end -->

      <div v-if="showLeftBottomLogo" class="left-bottom-logo">
        <img
          width="75px"
          height="75px"
          :src="ImageXyrtsStatic"
        />
      </div>
      <div v-if="showSearch" class="search-btn-box" @click="searchHandler">
        <div class="search-btn">
          <IconZoomOut />
          <span class="text">獲得產品資料</span>
        </div>
      </div>

      <div v-if="descriptions.length" class="content">
        <p class="title">{{ title }}</p>
        <div class="paragraph-box">
          <p
            v-for="(desc, index) in descriptions"
            :key="index"
            class="paragraph"
          >{{ desc }}</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div v-if="agreements.length" class="entrance">
        <div class="entrance__left" @click="explainHandler(0)">说明</div>
        <div class="entrance__right" @click="explainHandler(1)">彩票兑换说明</div>
      </div>
      <img class="footer__img" :src="ImageFooter" />
    </div>

    <div v-if="showAgreementMix && agreements.length" class="mask">
      <div class="agreement">
        <p class="agreement__title">{{ title }}</p>
        <div class="agreement__paragraph-box">
          <p
            v-for="(desc, index) in agreements"
            :key="index"
            class="paragraph"
          >{{ desc }}</p>
        </div>
        <div class="agreement__footer">
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
import ImageProduct3 from '@/assets/images/product_3.png'
import ImageshelfV1 from '@/assets/images/shelf_v1.png'
import Imageshelf1 from '@/assets/images/shelf_1.png'
import Imageshelf2 from '@/assets/images/shelf_2.png'
import Imageshelf3 from '@/assets/images/shelf_3.png'
import ImageLight from '@/assets/images/light.png'
import ImageCart from '@/assets/images/cart.png'
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
    default: '說明',
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
  zoomBigMotion: {
    type: Boolean,
  },
  showAgreement: {
    type: Boolean,
    default: true,
  },
  showLeftBottomLogo: {
    type: Boolean,
  },
  showSearch: {
    type: Boolean,
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
@keyframes lightMotion {
  from {
    bottom: 30vh;
    opacity: 0.3;
  }
  to {
    bottom: 50vh;
    opacity: 0.7;
  }
}
@keyframes cartMotion {
  from {
    right: -1000px;
  }
  to {
    right: 0;
  }
}
@keyframes zoomOutMotion {
  from {
    transform: rotate(0deg) translate(25px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(25px) rotate(-360deg);
  }
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #f7e9a2;

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
      transform: translateX(-45px);
      .bg-img {
        width: 120vw;
      }
    }

    .bg-acl {
      height: 0;
      transform: translateY(-40px);
      .bg-img {
        width: 100vw;
      }
    }

    .gif-static-xyrts {
      position: absolute;
      top: 90px;
      right: 14px;
    }

    .bg-marker {
      position: absolute;
      top: 220px;
      left: 0;
      right: 0;
      text-align: center;
      .img-product {
        position: absolute;
        top: -40px;
        width: 90vw;
        height: 495px;
        background-image: url('@/assets/images/product_2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }
      .cover-image {
        position: absolute;
        top: -42px;
        left: -63px;
        width: 500px;
        -webkit-mask-image: radial-gradient(circle at center, black 10%, transparent 30%);
        mask-image: radial-gradient(circle at center, black 10%, transparent 30%);
      }
      .zoom-big {
        position: absolute;
        top: 120px;
        left: 85px;
        width: 252px;
        height: 260px;
        background-image: url('@/assets/images/search.png');
        background-repeat: no-repeat;
        background-size: cover;
        &--motion {
          animation: zoomOutMotion 2s linear infinite;
        }
      }
    }

    .product-shelf {
      position: absolute;
      top: 200px;
      left: 0;
      right: 0;
      margin: auto;
      .product-shelf__item {
        text-align: center;
        .bg-img0 {
          transform: translateY(14px);
        }
        .bg-img1 {
          width: 80vw;
        }
        .bg-img2 {
          width: 86vw;
        }
        .bg-img3 {
          width: 88vw;
        }
        .bg-imgv1 {
          width: 100vw;
        }
      }

      .product-show {
        position: absolute;
        top: -70px;
        left: -20px;
        .product-show__img {
          width: 200px;
        }
        .product-show__img-search {
          position: absolute;
          bottom: -30px;
          left: 60px;
          width: 150px;
        }
      }

      .light-cart {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.5);
        .light-cart__light {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 30vh;
          margin: auto;
          width: 200px;
          opacity: 0;
          animation: lightMotion 0.8s linear forwards 0.5s;
        }
        .light-cart__cart {
          position: absolute;
          right: -1000px;
          bottom: 130px;
          margin: auto;
          width: 90%;
          animation: cartMotion 0.5s linear forwards;
        }
      }
    }

    .left-bottom-logo {
      position: fixed;
      left: 10px;
      bottom: 120px;
    }
    .search-btn-box {
      position: fixed;
      left: 40px;
      right: 40px;
      bottom: 130px;
      z-index: 8;
      margin: auto;
      width: 180px;
      height: 52px;
      border-radius: 79px;
      background: linear-gradient(0deg, #EDCD9B 13.41%, #E44 100%);
      .search-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 4px auto auto;
        padding-inline: 20px;
        width: 170px;
        height: 42px;
        border-radius: 79px;
        border: 1px solid #FFF;
        .text {
          color: #FFF;
          text-align: center;
          font-family: Roboto;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }

    .content {
      position: absolute;
      top: 215px;
      right: 15px;
      left: 15px;
      bottom: 94px;
      z-index: 10;
      padding: 16px 16px 36px;
      border-radius: 10px;
      overflow: hidden;
      background-color: #FFF;
      .title {
        text-align: center;
        color: #000;
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
          color: #000;
          margin-top: 0;
          font-family: "Microsoft New Tai Lue";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }
  }

  .footer {
    z-index: 2;
    flex-shrink: 0;
    width: 100%;
    transform: translateY(3px);

    .entrance {
      position: relative;
      bottom: 50px;
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
      }
    }
    .footer__img {
      width: 100%;
      height: 16vw;
    }
  }

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
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
      background-color: #FFF;
      .agreement__title {
        text-align: center;
        color: #000;
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
          color: #000;
          margin-top: 0;
          font-family: "Microsoft New Tai Lue";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
        }
      }
      .agreement__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding-top: 40px;
      }
    }
  }
}
</style>