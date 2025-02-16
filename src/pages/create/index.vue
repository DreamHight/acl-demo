<script setup lang="ts">
import { ref } from 'vue'
import { useCascaderAreaData } from '@vant/area-data'
import { showToast } from 'vant'
import { storeToRefs } from 'pinia'
import ServiceAgreement from '@/pages/agreement/serviceAgreement.vue'
import InfoAgreement from '@/pages/agreement/infoAgreement.vue'
import { add } from '@/api'
import router from '@/router'
import { checkIdCard, checkMobileNumber } from '@/utils'
import Captcha from '@/components/Captcha.vue'
import useAppStore from '@/stores/modules/app'

definePage({
  name: 'create',
  meta: {
    level: 2,
    title: '在线投诉',
    i18n: '',
    keepAlive: true,
  },
})

const inputData = ref({
  // 拖欠工资单位名称
  companyName: '',
  // 拖欠工资单位电话
  companyPhone: '',
  // 实际工作地址
  workAddress: '',
  // 是否有签订劳动合同
  hasContract: 'Y',
  // 欠薪时间段
  wageArrearsPeriod: '',
  // 欠薪金额
  amount: '',
  // 欠薪基本情况摘要
  summary: '',
  // 反映人姓名
  cmpntName: '',
  // 反映人身份证号码
  cmpntIdCard: '',
  // 反映人性别
  cmpntSex: '',
  // 联系人
  // contact: '',
  // 联系电话
  cmpntPhone: '',
})
/**
 * 地区
 */
const area = ref('')
const areaCascaderValue = ref('')
const detailAddress = ref('')
const showArea = ref(false)
const options = useCascaderAreaData()
function onFinish({ selectedOptions }) {
  showArea.value = false
  area.value = selectedOptions.map(option => option.text).join('')
}
watch(
  [area, detailAddress],
  ([newArea, newDetailAddress]) => {
    inputData.value.workAddress = newArea + newDetailAddress
  },
)
/**
 * 验证码
 */
const appStore = useAppStore()
const { token } = storeToRefs(appStore)
const captcha = ref<string>('')
const captchaRef = ref()
/**
 * 用户协议
 */
const isAgree = ref<boolean>(false)
const showServiceAgreement = ref(false)
function handleServiceAgreement() {
  showServiceAgreement.value = true
}
const showInfoAgreement = ref(false)
function handleInfoAgreement() {
  showInfoAgreement.value = true
}
// Step 5: 定义失败处理函数
function onFailed(errorInfo: any): void {
  console.log('failed', errorInfo)
  showToast(errorInfo.errors[0].message)
}

/**
 * 提交
 */
const loading = ref(false)
const disabled = ref(false)
function onSubmit() {
  const reqData = {
    ...inputData.value,
    token: token.value,
    captcha: captcha.value,
  }
  loading.value = true
  disabled.value = true
  add(reqData).then((res) => {
    console.log(res)
    loading.value = false
    if (res.code === 0) {
      router.push({ path: '/create/success', query: { cmpntNum: res.data } })
    }
    else if (res.code === 1002030000) {
      disabled.value = false
      showToast(res.msg)
      captchaRef.value.getCaptchaCode()
    }
    else {
      showToast(res.msg)
      captchaRef.value.getCaptchaCode()
      disabled.value = false
    }
  })
    .catch((err) => {
      // todo
      loading.value = false
      disabled.value = false
      console.log(err)
    })
}
</script>

<template>
  <Container>
    <van-form required="auto" :disabled="disabled" @failed="onFailed" @submit="onSubmit">
      <p class="title">
        投诉对象
      </p>
      <van-cell-group inset class="group">
        <van-field
          v-model="inputData.companyName"
          name="companyName"
          label="单位名称"
          label-align="top"
          size="large"
          :rules="[{ required: true, message: '请输入单位名称' }]"
        />
        <van-field
          v-model="inputData.companyPhone"
          name="companyPhone"
          label="单位联系电话"
          label-align="top"
          size="large"
          type="digit"
          :rules="[{ required: true, message: '请输入单位联系电话' }]"
        />
      </van-cell-group>
      <p class="title">
        基本情况
      </p>
      <van-cell-group inset class="group">
        <van-field
          v-model="area"
          readonly
          label="实际工作所在地区"
          label-align="top"
          size="large"
          placeholder="请选择实际工作所在地区"
          :rules="[{ required: true, message: '请选择实际工作所在地区' }]"
          @click="showArea = true"
        />
        <van-popup v-model:show="showArea" round position="bottom">
          <van-cascader
            v-model="areaCascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="showArea = false"
            @finish="onFinish"
          />
        </van-popup>

        <van-field
          v-model="detailAddress"
          name="detailAddress"
          label="详细地址"
          label-align="top"
          size="large"
          :rules="[{ required: true, message: '请输入详细地址' }]"
        />
        <van-field
          v-model="inputData.wageArrearsPeriod"
          name="wageArrearsPeriod"
          label="欠薪时间段"
          placeholder=""
          label-align="top"
          size="large"
          :rules="[{ required: true, message: '请输入正确内容' }]"
        />
        <van-field
          v-model="inputData.amount"
          name="amount"
          label="欠薪金额"
          label-align="top"
          size="large"
          type="number"
          :rules="[{ required: true, message: '请输入欠薪金额' }]"
        />
        <van-field
          name="hasContract" label="是否有签订劳动合同" label-align="top"
          size="large"
          :rules="[{ required: true, message: '请选择是否有签订劳动合同' }]"
        >
          <template #input>
            <van-radio-group v-model="inputData.hasContract" :disabled="disabled" direction="horizontal">
              <van-radio name="0">
                是
              </van-radio>
              <van-radio name="1">
                否
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="inputData.summary"
          label="欠薪基本情况摘要"
          label-align="top"
          size="large"
          type="textarea"
          rows="4"
          autosize
          maxlength="500"
          placeholder="参考模板:本人于XX年XX月至XX年XX月在XX单位(XX项目XX单位XX班组)从事XX工作，自XX年XX月开始XX单位拖欠工资，目前拖欠本人XX年XX月至XX年XX月的工资，共计XXXX元。"
          show-word-limit
          :rules="[{ required: true, message: '请输入欠薪基本情况摘要' }]"
        />
      </van-cell-group>
      <p class="title">
        联系人信息
      </p>
      <van-cell-group inset class="group">
        <van-field
          v-model="inputData.cmpntName"
          name="cmpntName"
          label="姓名"
          placeholder=""
          label-align="top"
          size="large"
          :rules="[{ required: true, message: '请输入姓名' }]"
        />
        <van-field
          v-model="inputData.cmpntIdCard"
          name="cmpntIdCard"
          label="身份证号码"
          label-align="top"
          size="large"
          maxlength="18"
          :rules="[{ required: true, validator: checkIdCard }]"
        />
        <van-field
          v-model="inputData.cmpntPhone"
          name="cmpntPhone"
          label="手机号"
          label-align="top"
          size="large"
          type="digit"
          maxlength="11"
          :rules="[{ required: true, validator: checkMobileNumber }]"
        />
        <van-field
          name="cmpntSex" label="性别" label-align="top"
          size="large" :rules="[{ required: true, message: '请选择性别' }]"
        >
          <template #input>
            <van-radio-group v-model="inputData.cmpntSex" :disabled="disabled" direction="horizontal">
              <van-radio name="1">
                男
              </van-radio>
              <van-radio name="2">
                女
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="captcha"
          name="captcha"
          label="验证码"
          size="large"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <template #right-icon>
            <Captcha ref="captchaRef" />
          </template>
        </van-field>
        <van-field
          name="agreement"
          size="large" :rules="[{ required: true, message: '请阅读并同意《用户服务协议》及《个人信息保护政策》' }]"
        >
          <template #input>
            <van-checkbox v-model="isAgree" :disabled="disabled">
              我已阅读并同意
              <a href="#" @click.stop.prevent="handleServiceAgreement">《用户服务协议》</a>
              及
              <a href="#" @click.stop.prevent="handleInfoAgreement">《个人信息保护政策》</a>
            </van-checkbox>
          </template>
        </van-field>
        <van-action-sheet v-model:show="showServiceAgreement" title="《用户服务协议》">
          <ServiceAgreement />
        </van-action-sheet>
        <van-action-sheet v-model:show="showInfoAgreement" title="《个人信息保护政策》">
          <InfoAgreement />
        </van-action-sheet>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" :disabled="disabled" :loading="loading" loading-text="处理中..." native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </Container>
</template>

<style lang="less" scoped>
.group {
  margin: 0 0 20px 0;
}
.title {
  margin: 0;
  font-size: 16px;
  line-height: 40px;
  color: #969799;
}
</style>
