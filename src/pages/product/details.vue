<template>
  <div class="container" :class="['container--' + bgType]">
    <div class="nav-back">
      <ArrowBack />
    </div>

    <div class="flex-between pt-50px mx-20px">
      <div class="title__line"></div>
      <p class="title__title">产品基本资料</p>
      <div class="title__line "></div>
    </div>

    <div class="product-image">
      <img width="100px" height="100px" :src="ImageXyrtsStatic" />
      <div class="text-center">
        <img width="263px" :src="productItem.images" />
      </div>
      <img
        v-if="productItem.certified"
        class="ficus_discovery"
        width="153px"
        height="153px"
        :src="ImageFicusDiscovery"
      />
    </div>

    <div class="block-box already-scan flex-between">
      <span
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 53px;
          height: 53px;
          border-radius: 50%;
          background-color: #F8B2B2;
        "
      >
        <span
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 39px;
            height: 39px;
            border-radius: 50%;
            background-color: #F28686;
          "
        >
          <span
            style="
              display: inline-block;
              width: 29px;
              height: 29px;
              line-height: 29px;
              text-align: center;
              border-radius: 50%;
              background-color: #D84040;
              font-family: Inter;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            "
          >!</span>
        </span>
      </span>
      <span class="already-scan__text">{{ productItem.scanTime }}</span>
    </div>

    <div class="block-box ticket-box">
      <div class="flex-between">
        <div class="ticket-list__btn flex-center">
          <IconGift />
          <span class="ml-8px">兑换彩票</span>
        </div>
        <span class="ticket-list__desc">彩票号码列表</span>
        <IconArrowDown class="ticket-list__icon" @click="toggleTicketHandler" />
      </div>
      <div v-show="toggleTicketNumHandler" class="ticket-num">
        <div
          v-for="(ticket, index) in productItem.ticketList"
          :key="index"
          class="ticket-num__item flex-between"
        >
          <span class="name">彩票号码</span>
          <span class="num">{{ ticket }}</span>
          <IconCopy @click.native="clipboardHandler(ticket)" />
        </div>
      </div>
    </div>

    <div class="flex-between product-box">
      <div class="flex-1 product-box__left">
        <div class="pro-title">产品名称</div>
        <div class="pro-name">{{ productItem.productName }}</div>
      </div>
      <div class="flex-shrink-0 flex-center product-box__right">
        <img width="75px" height="75px" :src="ImageProductLogo" />
      </div>
    </div>

    <div class="product-parameters" :class="[toggleProductClass]">
      <h4 class="parameter-title text-center" @click="toggleProductHandler">产品参数</h4>
      <div class="parameter-icon" @click="toggleProductHandler">
        <IconArrowDown />
      </div>
      <div class="parameter-box">
        <div
          v-for="(item, index) in productItem.parameterList"
          :key="index"
          class="parameter-item"
        >
          <div
            class="rounded"
            :style="{
              backgroundColor: item.color,
            }"
          />
          <div class="name">{{ item.name }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import ImageXyrtsStatic from '@/assets/images/xyrts.png'
import ImageFicusDiscovery from '@/assets/images/ficus_discovery.png'
import ImageProduct1 from '@/assets/images/product_1.jpg'
import ImageProduct3 from '@/assets/images/product_3.png'
import ImageProductLogo from '@/assets/images/product_logo.jpeg'
import IconArrowDown from '@/assets/icons/IconArrowDown.vue'
import IconGift from '@/assets/icons/IconGift.vue'
import IconCopy from '@/assets/icons/IconCopy.vue'

definePage({
  name: 'details',
  meta: {
    level: 2,
  },
})

const route = useRoute()

interface IParameterList {
  color: string;
  name: string;
  value: string;
}
interface IProduct {
  id: string;
  productName: string;
  images: string;
  certified?: boolean;
  scanTime?: string;
  parameterList?: IParameterList[];
  ticketList?: string[];
}
const productList: IProduct[] = [
  {
    id: '1',
    productName: '潮迹潮汕-潮汕牛肉丸',
    images: ImageProduct1,
    certified: true,
    scanTime: '此產品已在30/12/2024於北京市掃瞄過',
    ticketList: [
      '310842600132413000',
    ],
    parameterList: [
      {
        color: '#F00',
        name: '品牌',
        value: '百威236',
      },
      {
        color: '#FCC864',
        name: '酒精度',
        value: '3.6%',
      },
      {
        color: '#9747FF',
        name: '淨含量',
        value: '236ml x24',
      },
      {
        color: '#0FA388',
        name: '儲藏方法',
        value: '5度-25度',
      },
      {
        color: '#6307DC',
        name: '生產廠家',
        value: '百威英博',
      },
      {
        color: '#FF47AA',
        name: '包裝方式',
        value: '箱體',
      },
      {
        color: '#37CFFF',
        name: '產地',
        value: '四川省資陽市',
      },
      {
        color: '#B7B343',
        name: '貨號',
        value: 'GB/T4927',
      },
      {
        color: '#FF47ED',
        name: '類型',
        value: '啤酒',
      },
      {
        color: '#42737E',
        name: '商品條型碼',
        value: '563746876989789985',
      },
      {
        color: '#D48D22',
        name: '原料與配料',
        value: '水,麥芽,大米,啤酒花',
      },
      {
        color: '#FF4747',
        name: '生產日期',
        value: '見瓶身',
      },
      {
        color: '#FF47ED',
        name: '產品包裝日期',
        value: '見瓶身',
      },
    ]
  },
  {
    id: '2',
    productName: 'L&S-DEAR.SARA',
    images: ImageProduct3,
    certified: true,
    scanTime: '此產品已在30/12/2024於北京市掃瞄過',
    ticketList: [
      '310842600132413600',
      '310842600132413599',
    ],
    parameterList: [
      {
        color: '#F00',
        name: '品牌',
        value: '百威236',
      },
      {
        color: '#FCC864',
        name: '酒精度',
        value: '3.6%',
      },
      {
        color: '#9747FF',
        name: '淨含量',
        value: '236ml x24',
      },
      {
        color: '#0FA388',
        name: '儲藏方法',
        value: '5度-25度',
      },
      {
        color: '#6307DC',
        name: '生產廠家',
        value: '百威英博',
      },
      {
        color: '#FF47AA',
        name: '包裝方式',
        value: '箱體',
      },
      {
        color: '#37CFFF',
        name: '產地',
        value: '四川省資陽市',
      },
      {
        color: '#B7B343',
        name: '貨號',
        value: 'GB/T4927',
      },
      {
        color: '#FF47ED',
        name: '類型',
        value: '啤酒',
      },
      {
        color: '#42737E',
        name: '商品條型碼',
        value: '563746876989789985',
      },
      {
        color: '#D48D22',
        name: '原料與配料',
        value: '水,麥芽,大米,啤酒花',
      },
      {
        color: '#FF4747',
        name: '生產日期',
        value: '見瓶身',
      },
      {
        color: '#FF47ED',
        name: '產品包裝日期',
        value: '見瓶身',
      },
    ]
  },
]
const productItem = ref<IProduct>(productList[0])

const bgType = ref<string>('danger')

const toggleTicketNumHandler = ref<boolean>(false)
function toggleTicketHandler(): void {
  toggleTicketNumHandler.value = !toggleTicketNumHandler.value
}
async function clipboardHandler(text: string): Promise<void> {
  const isSupported: boolean = !!navigator.clipboard;
  if (isSupported) {
    try {
      await navigator.clipboard.writeText(text);
      showToast('复制成功')
    } catch (error: any) {
      console.error('Failed to copy: ', error);
    }
  }
}
const toggleProductClass = ref<string>('product-parameters--hide')
function toggleProductHandler(): void {
  toggleProductClass.value = toggleProductClass.value === 'product-parameters--hide'
    ? 'product-parameters--show'
    : 'product-parameters--hide'
}

onMounted(() => {
  const id: string = route.query.id as string;
  const _productItem = productList.find(item => item.id === id)
  if (_productItem) {
    productItem.value = _productItem
  }
})
</script>

<style scoped lang="less">
.container {
  position: relative;
  min-height: 100vh;
  overflow: auto;
  padding-bottom: 90px;
  box-sizing: border-box;
  &--danger {
    background: linear-gradient(0deg, #F9B2A2 0%, #A2403D 100%);
  }
  &--info {
    background: linear-gradient(0deg, #FFF 0%, #999 100%);
  }
  &--warning {
    background: linear-gradient(0deg, #E87522 0%, #FFEFD1 64%, #FFAA05 100%);
  }

  .nav-back {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 12;
  }

  .title__line {
    width: 72px;
    height: 1px;
    background-color: #FFF;
  }
  .title__title {
    color: #FFF;
    text-align: center;
    margin: 0;
  }

  .product-image {
    position: relative;
    padding: 10px 10px 40px 10px;
    overflow: hidden;
    border-radius: 10px;
    margin: 18px;
    background-color: #FFF;
    .ficus_discovery {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotate(20deg);
    }
  }

  .block-box {
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.8);
    color: #FFF;
  }
  .already-scan {
    padding: 4px;
    padding-right: 20px;
    margin: 0 18px 14px;
    .already-scan__text {
      font-family: "Microsoft New Tai Lue";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #D20D0D;
    }
  }
  .ticket-box {
    padding: 10px 20px 10px 10px;
    box-sizing: border-box;
    margin-inline: 18px;
    margin-bottom: 14px;
    .ticket-list__btn {
      width: 110px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      border-radius: 54px;
      background: #FC9B64;
      box-shadow: 0px 1px 2.5px 0px rgba(0, 0, 0, 0.25);
      font-family: "Microsoft New Tai Lue";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
    .ticket-list__desc {
      color: #000;
      font-family: "Microsoft New Tai Lue";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
    .ticket-list__icon {
      color: #000;
      margin-left: 20px;
    }

    .ticket-num {
      .ticket-num__item {
        margin-block: 10px;
      }
      .name {
        color: #F00;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
      .num {
        color: #000;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }

  .product-box {
    gap: 15px;
    margin-inline: 18px;
    .product-box__left {
      height: 97px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.8);
      padding: 20px;
      .pro-title {
        color: #F00;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
      .pro-name {
        color: #000;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }
    .product-box__right {
      width: 97px;
      height: 97px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.9);
    }
  }

  .product-parameters {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    width: 100%;
    border-radius: 30px 30px 0 0;
    background: linear-gradient(180deg, #FFE5BF 0%, #FDE6E6 100%);
    box-shadow: 0px -4px 10.9px 0px rgba(146, 0, 0, 0.15);
    transition: max-height 0.3s ease-in-out;
    &.product-parameters--hide {
      max-height: 74px;
      .parameter-icon {
        top: 25px;
        transform: rotate(-180deg);
      }
    }
    &.product-parameters--show {
      max-height: 100%;
      .parameter-icon {
        transform: rotate(0deg);
      }
    }
    .parameter-title {
      margin-block: 25px 20px;
      color: #8D0808;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
    }
    .parameter-icon {
      position: absolute;
      top: 30px;
      right: 30px;
      color: #8D0808;
      transition: all 0.3s linear;
    }
    .parameter-box {
      max-height: 550px;
      overflow: auto;
      padding-inline: 30px;
      padding-bottom: 80px;
      .parameter-item {
        display: flex;
        align-items: center;
        padding-block: 10px;
        border-block-end: 1px solid #FCC864;
        color: #4A4A4A;
        font-family: "Microsoft New Tai Lue";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        .rounded {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .name {
          min-width: 105px;
        }
      }
    }
  }
}
</style>