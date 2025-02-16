<template>
  <ExplainBox
    :title="title"
    :agreements="agreements"
    :show-agreement="showAgreement"
    :show-search="true"
    :static-xyrts="true"
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
  name: 'homeIndex',
  meta: {
    level: 1,
    // title: '细叶榕营销验真平台',
    // i18n: '',
    // keepAlive: true,
  },
})

const title: string = '条款与条件'
const agreements: string[] = [
  `下述銷售條款在您與 Apple 之間建立了協議（下稱「協議」）。請仔細閱讀本協議內容。確認您已瞭解並同意協議內容後，請按一下「同意」。
Apple Distribution International Ltd. （下稱「Apple」）為大量內容服務之提供者。該服務 (a) 為 App Store 提供，允許經核可之機構僅為分銷予該機構員工或相關人員（例如您依 App Store條款與約定授權之承包商、員工、代理人及學生）、或 (b) Apple Books允許 (i) 經批准的學校或學區教育機構（不包括且不限於圖書館）大量購買 Apple Books內容，僅用於分發給在該機構的員工、教職員工或助教（無論他們是否直接受僱於該機構）或在該機構註冊為學生，或 (ii) 經批准的機構，根據適用的 Apple 媒體服務條款和條件（如適用），僅用於分發給受僱於該機構或與該機構有關聯的人員（例如承包商、僱員和代理），視情況而定。該大批購買之 App Store產品及 Apple Books內容總稱為「大量內容」。與您分銷大量內容之機構相關的終端使用者，包含但不限於使用管理式 Apple ID (MAIDs) 創建的帳戶，總稱為「授權最終使用人」。您同意對於服務及大量內容之使用受此等條款（「大量內容條款」過去稱為「大量採購計劃條款」或「VPP 條款」）之拘束，其他 Apple 媒體服務所適用之條款與約定及使用規則（網址：http://www.apple.com/legal/internet-services/itunes/）亦納入本條款為本條款之一部分（以下總稱為「條款」）。如有任何衝突或不一致之規定，應優先適用大量內容條款。
大量內容服務 Apple ID
您同意您只會使用為購買該服務提供之大量內容所建立的，僅服務於大量內容服務所用的 Apple ID（「大量內容 Apple ID」），或具有適當特權的授權最終使用人購買、管理和分發大量內容服務中的大量內容。您同意提供正確資訊，以依要求建立您的大量內容 Apple ID或管理式 Apple ID，例如公司名稱、實體地址、D-U-N-S碼，公司付款資訊、稅務識別號碼（如適用）、或其他經要求之資訊。
內容提供者將使用您的大量內容 Apple ID（不同於您的密碼，該密碼不應揭露予任何人）核對您的帳戶，以達透過服務為常例內容分銷之目的。
僅得於台灣銷售
您僅得於台灣境內及其領土與屬地使用本服務。
內容碼僅得由您的台灣授權最終使用人進行兌換。App Store 大量內容碼僅能分發給您在該地區的授權最終使用人，但 App Store 大量內容可透過管理分銷分配給您在此類大量內容中可大批供應的任何國家/地區的授權最終使用人，此條件隨時可能變更。您使用大量內容服務購買應用程序內容僅適用於該地區的應用程式商店，任何後續下載或轉讓均不會在您與任何其他 Apple 實體之間建立單獨的協議或銷售交易。您同意不得使用大量內容服務來規避任何國家/地區的法律或大量內容提供商規定的限制。
付款、稅金及退款政策
您同意您將為所有您或您的授權最終使用人透過服務購買的大量內容付款。如果您擁有授權最終使用人，您有權代表與您的授權最終使用人相關的採購機構進行此類購買，且 Apple 得透過您提供的付款方式就您購買的產品及您的帳戶所產生或與您的帳戶相關之任何額外費用（包括任何稅金及遲延費用，依情形而定）向您收費。您應按時給付所有費用並提供 Apple 有效的付款方式以支付所有費用。所有費用將依您註冊時所指定之付款方式請款。
您的所有費用將僅涵蓋產品價格。並不包含任何應適用之增值稅，且已扣除任何相關扣繳稅。您承認若購買有任何扣繳稅或類似稅費之問題，所有稅金應全額由顧客帳戶自行負擔，且顧客應賠償與避免 Apple 不受稅捐主管機關因任何該等扣繳稅或類似稅費之漏繳、及任何罰款和/或其利息所為之任何及所有請求之損害。並且同意，按照現行稅法的要求，自行申報和支付適用的增值稅。您理解並同意，您應負責確定和支付因您將 App Store 內容或 Apple Books內容轉讓給您的大量內容 Apple ID 或授權最終使用人註冊地區以外地區而產生的任何稅款或徵稅 。
如果您是為了免稅組織或個人帳戶下訂單，請透過 https://support.apple.com/business-education-programs 聯繫客服人員。請準備好提供免稅身份證明。
貨物既出，概不退換。
透過服務提供之大量內容價金得不時變動，且如有減價或促銷活動，服務不提供價格保護或退款機制。
如有App Store或 Apple Books 產品於交易後下載前無法供貨，您唯一的補償方式為退款。若該退款經同意，Apple 保留取消未使用內容碼（定義見下文）之權利及透過管理分銷轉讓大量內容之能力。如因技術問題導致無法交付或不合理地遲延交付您的大量內容，您唯一的補償方式為依 Apple 決定就已付價金為換貨或退款。
大量內容點數
與商店點數及禮品卡或代碼相關的條款請參閱：https://www.apple.com/legal/internet-services/itunes/giftcards/。
審計權利
由於 Apple 得就顧客透過本服務所為之購買進行審計，以確保所有訂單均屬合格購買，及所有購買條款與使用規則皆被遵守，您同意保留所有您購買之大量內容完整及正確之使用紀錄。若交付後有任何審計顯示您下訂單時並非合格購買者，或您未遵守所有您購買之相關條款，Apple 得：
• 取消您的大量內容 Apple ID 或管理式 Apple ID；
• 若您以信用卡訂購，向您的信用卡額外索取您就交付貨品所支付之價金及您訂購當日 Apple 透過本服務提供之同一貨品向大眾收費之金額之間差額；及
• 若您以信用卡以外之方式付款，(a)將寄發依交付貨品付款價金及 Apple 透過本服務提供之同一貨品向大眾收費金額差額之發票予您，並應於發票開立日期十五日內付款，(b)若您未於到期前付款，將於有管轄權之法院向您提起訴訟，並由敗訴之一方負擔律師費用。
若 Apple 未提供您透過大量內容服務所購買之特定產品，將就交付貨品所支付之價金及您訂購當日 Apple透過服務提供之最近似貨品向大眾收費之金額之間差額，向您的信用卡索取或出具請款發票予您。
於法律允許範圍內，Apple 有權要求補充資訊及審計相關紀錄，以確保您已遵守本條款。
內容取得
Apple 保留權利不經通知即變更內容選項（包括特定功能之合適性）。
內容分銷
每個透過本服務以大量內容方式購買的 App Store 產品或 Apple Books內容得以下列方式之一提供予您的授權最終使用人進行使用：(i) 透過直接傳輸之方式提供至每個授權最終使用人的 Apple 或管理式 Apple ID帳戶中（即「管理分銷」選項），或(ii) 透過傳送 Apple 產生的字母與數字代碼（即「內容碼」），並使用內容碼於 App Store 兌換特定應用程式內容，或於Apple Books 兌換特定書籍內容；或 (iii) 僅適用於應用程式中透過直接分配給 iOS 裝置，在此情況下 (a) 必須為每個裝置單獨購買（即單個許可證無法由多個裝置同時共享）； 以及 (b) 就任何最終使用人許可協議、使用條款或您的授權最終使用人就任何 App Store 大量內容簽訂之其他協議而言，您應被視為 「最終使用人」。
僅針對您的調整，Apple 同意允許您 (1) 使用單個內容碼將 App Store 內容同步到多台裝置，最多為您購買的代碼數量（而不必兌換單獨代碼）， 前提是您同意同步之副本數量不得超過您購買之代碼數量； (2) 購買相同 Apple Books內容的多份拷貝並分發給機構員工、教職員工或助教（無論他們是否直接受僱於該機構）或在貴校或學區中註冊的學生。所述的調整僅於有限時間內使用，並且 Apple 無法保證這些調整在未來的可用性。
管理分銷
當您完成購買大量內容時，你即可將您購買的特定 Apple Books 內容或 App Store產品依您選擇的數量轉讓給您授權的最終使用人所擁有或控制的 Apple 帳戶中。或是在 App Store 大量內容的情況下，傳輸到您或您的授權最終使用人之一擁有或控制的唯一裝置。只要該特定產品仍可取得，該等轉讓權均不會過期。當您使用帶有移動設備管理系統（即「MDM」）的大量內容 Apple ID時，您可以邀請您的授權最終使用人將其 Apple 帳號與您的大量內容 Apple ID相連接。當該等授權最終使用人接受您的邀請後，您可以將 Apple Books 內容及 App Store 產品轉讓至您的授權最終使用人的 Apple ID 中，或在App Store 內容情況下，轉讓至他們的裝置。為了取得該產品，您的授權最終使用人必須擁有有效的 Apple 帳號或管理式Apple ID（應先接受本條款內容）、可相容的硬體設備、軟體設備和網路連線。
就 Apple Books 內容：您不得在圖書館類型的借閱情境中使用 Apple Books 的內容。您理解並同意，分配給 Apple Books產品的 Apple 帳戶擁有者會成為該產品的擁有者，並在遵守條款的前提下享有所有相關權利。此類產品不可轉讓。
就 App Store產品：無論您是否有轉讓您的 App Store 內容至您的授權最終使用人的 Apple 帳戶、管理式 Apple ID 或特定裝置 ID 中，您均將保有該帳戶之 App Store 內容的所有權。在符合一定服務限制下，您可以撤回先前的轉讓並重新轉讓您的 App Store產品予另一個授權最終使用人或裝置 ID 。當您一旦撤回對某一特定用戶之產品轉讓，該使用者將不再有權使用該 App Store 產品。
內容碼
當您購買大量內容 Apple ID 時， Apple 會提供您一定數量的內容碼。每個內容碼可在 App Store 中兌換某一特定 App Store 產品，或於 Apple Books 中購買某一特定內容。當您完成購買時，內容碼將透過電子郵件以電子方式提供予您。該內容碼將立即生效，而您的授權最終使用人即可進行兌換。只要該特定產品仍可得取得，該等轉讓權均不會過期。您和／或您的授權最終使用人僅可在符合本條款之情形下兌換內容碼。每個 App Store 產品的內容碼必須由您的組織機構或您的授權最終使用人所擁有或控制的 Apple 帳戶進行兌換。每個 Apple Books 內容碼必須由您的授權最終使用人所擁有或控制的帳戶進行兌換。您了解並同意進行兌換的 Apple 帳戶擁有者將成為 (i) App Store 產品及該產品的被授權人；以及(ii) Apple Books內容拷貝之擁有者，並應享有所有相關權利。該項授權或產品均不可轉讓。
您僅可分銷內容碼予您的授權最終使用人，且您同意下列授權最終使用人條款與約定，該條款與約定適用於可用來分銷以購買內容的內容碼之設備（如證書、卡片、電子郵件）：
就應用程式及書籍而言：
「內容碼僅可於台灣的 App Store 及 Apple Books 中兌換。兌換人需先行接受授權及使用條款並取得 Apple 帳戶始可兌換。Apple 帳戶之使用需有相容軟體、硬體器材、及網路連線（可能需支付費用）。帳戶不可轉售。完整條款請見：http://www.apple.com/legal/internet-services/itunes」。`
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