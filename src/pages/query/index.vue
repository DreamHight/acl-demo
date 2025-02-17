<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'
import { storeToRefs } from 'pinia'
import img from '@/assets/images/banner3x2.jpg'
import router from '@/router'
import { query } from '@/api'
import { checkIdCard, checkMobileNumber, encodeBase64 } from '@/utils'
import Captcha from '@/components/Captcha.vue'
import useAppStore from '@/stores/modules/app'

definePage({
  name: 'query',
  meta: {
    level: 1,
    title: '查询投诉',
    i18n: '',
  },
})
const inputData = ref({
  // 投诉编号
  // cmpntNum: '123456789',
  // 反映人姓名
  cmpntName: '',
  // 联系电话
  cmpntPhone: '',
  // 反映人身份证号码
  cmpntIdCard: '',
})
/**
 * 验证码
 */
const appStore = useAppStore()
const { token } = storeToRefs(appStore)
const captcha = ref<string>('')
const captchaRef = ref()
// 失败处理函数
function onFailed(errorInfo: any): void {
  console.log('failed', errorInfo)
  showToast(errorInfo.errors[0].message)
}
/**
 * 提交
 */
const loading = ref(false)
const success = ref(false)
function onSubmit() {
  // todo
  loading.value = true
  const reqData = {
    ...inputData.value,
    token: token.value,
    captcha: captcha.value,
  }
  query(reqData).then((res) => {
    loading.value = false
    console.log(res)
    if (res.code === 0 && res.data.cmpntNum) {
      const data = encodeBase64(JSON.stringify({ reqData, resData: res.data }))
      router.push({ path: '/query/progress', query: { data } })
    }
    else if (res.code === 1002030000) {
      showToast(res.msg)
      captchaRef.value.getCaptchaCode()
    }
    else {
      showToast('未查询到信息')
      captchaRef.value.getCaptchaCode()
    }
  })
    .catch((err) => {
      loading.value = false
      showToast(err.msg)
    })
}
</script>

<template>
  <div class="query">
    <van-cell-group inset class="group">
      <img :src="img" alt="">
    </van-cell-group>

    <van-form required="auto" :disabled="success" @failed="onFailed" @submit="onSubmit">
      <van-cell-group inset>
        <!--        <van-field
          v-model="inputData.cmpntNum"
          name="cmpntNum"
          label="投诉编号"
          size="large"
        /> -->
        <van-field
          v-model="inputData.cmpntName"
          name="cmpntName"
          label="姓名"
          placeholder=""
          size="large"
          :rules="[{ required: true, message: '请输入姓名' }]"
        />
        <van-field
          v-model="inputData.cmpntPhone"
          name="cmpntPhone"
          label="手机号"
          size="large"
          type="digit"
          maxlength="11"
          :rules="[{ required: true, validator: checkMobileNumber }]"
        />
        <van-field
          v-model="inputData.cmpntIdCard"
          name="cmpntIdCard"
          label="身份证号码"
          size="large"
          maxlength="18"
          :rules="[{ required: true, validator: checkIdCard }]"
        />
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
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" :disabled="success" :loading="loading" loading-text="处理中..." native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="less" scoped>
.query {
  padding-bottom: 12vh; //tab-bar高度
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: -8px;
}
.group {
  border-radius: 8px;
  margin-top: 60px;
  margin-bottom: 16px;
}
</style>
