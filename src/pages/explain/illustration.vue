<template>
  <ExplainBox
    :title="title"
    :descriptions="descriptions"
    :show-back-arrow="true"
    :rounded-bg="roundedBg"
    :verify-the-truth="verifyTheTruth"
  />
</template>

<script setup lang="ts">
import { decodeBase64 } from '@/utils'

definePage({
  name: 'illustration',
  meta: {
    level: 2,
  },
})

const route = useRoute()

const title: string = '说明'
const descriptions: string[] = [
  '细叶榕营销验真小程序是彩研科技、深圳市蓝海智链科技有限公司联合官方出品的正版小程序，为专利性的创新型供应链管理解决装置提供营销、验真功能，向全国的零售品牌的消费者，提供高效便捷，具有公信力的营销、验真服务，全力保障消费者权益。',
  '每个产品创新型供应链管理解决装置上的防伪码含有对应的产品身份编码信息，消费者通过细叶榕营销验真平台小程序扫码查询,  既可营销活动又能辨别产品真伪，从此放心购物。',
  '为促进全国正品流通，助力企业搭建全方位品牌安全以及营销体系，提高产品吸引力及消费者验真积极性，每个创新型供应链管理解决装置中包含一张中国体育彩票，消费者可以参考本小程序的信息到最近的中国体育彩票代销店进行核销。',
]

const roundedBg = ref<boolean>(false)
const verifyTheTruth = ref<string>('single')
onMounted(() => {
  const data = JSON.parse(decodeBase64(route.query.data as string))
  roundedBg.value = data.roundedBg === 'true'
  verifyTheTruth.value = data.verifyTheTruth
})
</script>