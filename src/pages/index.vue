<template>
  <ExplainBox
    :title="title"
    :agreements="agreements"
    :show-agreement="showAgreement"
    :show-search="true"
    :rounded-bg="roundedBg"
    :zoom-big-motion="zoomBigMotion"
    :show-left-bottom-logo="showLeftBottomLogo"
    :verify-the-truth="verifyTheTruth"
    @search-click="searchHandler"
    @explain-click="explainHandler"
    @operate-click="operateHandler"
  />
</template>

<script setup lang="ts">
import router from '@/router'
import { decodeBase64, encodeBase64 } from '@/utils'

const route = useRoute()

definePage({
  name: 'home',
  meta: {
    level: 1,
    // title: '细叶榕营销验真平台',
    // i18n: '',
    // keepAlive: true,
  },
})

const title: string = '条款与条件'
const agreements: string[] = [
  '细叶榕营销验真小程序是彩研科技、深圳市蓝海智链科技有限公司联合官方出品的正版小程序，为专利性的创新型供应链管理解决装置提供营销、验真功能，向全国的零售品牌的消费者，提供高效便捷，具有公信力的营销、验真服务，全力保障消费者权益。',
  '每个产品创新型供应链管理解决装置上的防伪码含有对应的产品身份编码信息，消费者通过细叶榕营销验真平台小程序扫码查询,  既可营销活动又能辨别产品真伪，从此放心购物。',
  '为促进全国正品流通，助力企业搭建全方位品牌安全以及营销体系，提高产品吸引力及消费者验真积极性，每个创新型供应链管理解决装置中包含一张中国体育彩票，消费者可以参考本小程序的信息到最近的中国体育彩票代销店进行核销。',
]

const zoomBigMotion = ref<boolean>(false)
function searchHandler(): void {
  zoomBigMotion.value = true
  setTimeout(() => {
    if (detailsStatus === 'fail') {
      router.push('/result/fail')
    } else {
      router.push('/product/details')
    }
    // router.push('/product/details')
    zoomBigMotion.value = false
  }, 2000)
}
const roundedBg = ref<boolean>(false);
function explainHandler(index: number): void {
  if (index) {
    const stringifyData = JSON.stringify({
      roundedBg: String(roundedBg.value),
      verifyTheTruth: verifyTheTruth.value,
    })
    const data = encodeBase64(stringifyData)
    router.push({ path: '/explain/awarding', query: { data } })
  } else {
    const stringifyData = JSON.stringify({
      roundedBg: String(roundedBg.value),
      verifyTheTruth: verifyTheTruth.value,
    })
    const data = encodeBase64(stringifyData)
    router.push({ path: '/explain/illustration', query: { data } })
  }
}
function operateHandler(index: number): void {
  window.sessionStorage.setItem('agree', String(index))
}

const showAgreement = ref<boolean>(true)
function init(): void {
  const isAgree: string = window.sessionStorage.getItem('agree')
  showAgreement.value = !isAgree
}
init()

const showLeftBottomLogo = ref<boolean>(false)
const verifyTheTruth = ref<string>('single')
let detailsStatus: string = 'success'
onMounted(() => {
  // const type: string = decodeBase64(route.query.type as string)
  detailsStatus = route.query.status as string
  const type: string = route.query.type as string
  verifyTheTruth.value = type
  roundedBg.value = type === 'multiple'
  showLeftBottomLogo.value = type === 'multiple'
  // const data = JSON.parse(decodeBase64(route.query.data as string))
})
</script>