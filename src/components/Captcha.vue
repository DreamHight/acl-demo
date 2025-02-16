<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { showToast } from 'vant'
import { storeToRefs } from 'pinia'
import { getCaptcha } from '@/api'
import useAppStore from '@/stores/modules/app'

const appStore = useAppStore()
const { token } = storeToRefs(appStore)
const captchaImg = ref('')
defineExpose({ token, getCaptchaCode })
function getCaptchaCode() {
  getCaptcha(token.value)
    .then((res: any) => {
      if (res.token && res.captcha) {
        console.log(res)
        appStore.setToken(res.token)
        captchaImg.value = `data:image/png;base64,${res.captcha}`
      }
      else {
        showToast('获取验证码失败')
      }
    })
    .catch((err) => {
      showToast('获取验证码失败')
      console.log(err)
    })
}
onMounted(() => {
  getCaptchaCode()
})
</script>

<template>
  <div>
    <img :src="captchaImg" alt="获取验证码" style="width: 100px; height: 40px" @click="getCaptchaCode">
  </div>
</template>

<style scoped>
</style>
