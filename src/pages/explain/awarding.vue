<template>
  <ExplainBox
    :title="title"
    :custom-description="true"
    :show-back-arrow="true"
    :rounded-bg="roundedBg"
    :verify-the-truth="verifyTheTruth"
  >
    <template #description>
      未年人不得购彩及兑奖，体彩即开票相关的信息，可浏览中国体育彩票管理中心官方网站 <a href="javascript:void(0)" @click="toLottery">www.lottery.gov.cn</a>，或向本地体育彩票管理机构咨询。
    </template>
  </ExplainBox>
</template>

<script setup lang="ts">
import { decodeBase64 } from '@/utils'

definePage({
  name: 'awarding',
  meta: {
    level: 2,
  },
})

const route = useRoute()

const title: string = '彩票兑奖说明'
function toLottery() {
  window.open('https://www.lottery.gov.cn/', '_blank')
}
// const descriptions: string[] = [
//   `下述銷售條款在您與 Apple 之間建立了協議（下稱「協議」）。請仔細閱讀本協議內容。確認您已瞭解並同意協議內容後，請按一下「同意」。
// Apple Distribution International Ltd. （下稱「Apple」）為大量內容服務之提供者。該服務 (a) 為 App Store 提供，允許經核可之機構僅為分銷予該機構員工或相關人員（例如您依 App Store條款與約定授權之承包商、員工、代理人及學生）、或 (b) Apple Books允許 (i) 經批准的學校或學區教育機構（不包括且不限於圖書館）大量購買 Apple Books內容，僅用於分發給在該機構的員工、教職員工或助教（無論他們是否直接受僱於該機構）或在該機構註冊為學生，或 (ii) 經批准的機構，根據適用的 Apple 媒體服務條款和條件（如適用），僅用於分發給受僱於該機構或與該機構有關聯的人員（例如承包商、僱員和代理），視情況而定。該大批購買之 App Store產品及 Apple Books內容總稱為「大量內容」。與您分銷大量內容之機構相關的終端使用者，包含但不限於使用管理式 Apple ID (MAIDs) 創建的帳戶，總稱為「授權最終使用人」。您同意對於服務及大量內容之使用受此等條款（「大量內容條款」過去稱為「大量採購計劃條款」或「VPP 條款」）之拘束，其他 Apple 媒體服務所適用之條款與約定及使用規則（網址：http://www.apple.com/legal/internet-services/itunes/）亦納入本條款為本條款之一部分（以下總稱為「條款」）。如有任何衝突或不一致之規定，應優`
// ]

const roundedBg = ref<boolean>(false)
const verifyTheTruth = ref<string>('single')
onMounted(() => {
  const data = JSON.parse(decodeBase64(route.query.data as string))
  roundedBg.value = data.roundedBg === 'true'
  verifyTheTruth.value = data.verifyTheTruth
})
</script>
