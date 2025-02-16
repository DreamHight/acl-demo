<script lang="ts" setup>
import { showToast } from 'vant'
import moment from 'moment'
import { query } from '@/api'
import { decodeBase64 } from '@/utils'

definePage({
  name: 'progress',
  meta: {
    level: 2,
    title: '处理进展',
    i18n: '',
    keepAlive: true,
  },
})

const loading = ref(false)
const route = useRoute()
const resData = ref<any>({})
const reqData = ref<any>({})
onMounted(() => {
  const data = JSON.parse(decodeBase64(route.query.data as string))
  resData.value = data.resData
  reqData.value = data.reqData
})
function onSubmit() {
  return new Promise((resolve, reject) => {
    // todo
    query({ ...reqData.value }).then((res) => {
      loading.value = false
      if (res.code === 0) {
        resData.value = res.data
        resolve(res)
      }
      else {
        showToast(res.msg)
      }
    })
      .catch((err) => {
        console.log(err)
        showToast(err.msg)
        reject(err)
        loading.value = false
      })
  })
}
function onRefresh() {
  // todo 每次都需要刷新验证码，下拉刷新无效
  onSubmit().then(() => {
    showToast('刷新成功')
  })
}
function formatTime(timestamp) {
  return timestamp ? moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') : ''
}
</script>

<template>
  <Container>
    <!--    <van-pull-refresh v-model="loading" style="height: 100%;" pulling-text="刷新..." loosing-text="刷新..." @refresh="onRefresh"> -->
    <van-skeleton title :row="10" :loading="loading">
      <van-cell-group inset class="group">
        <van-cell :title="`投诉编号:${resData.cmpntNum}`">
          <template #right-icon>
            <van-tag v-if="resData.status === '0'" round type="success" size="medium">
              已办结
            </van-tag>
            <van-tag v-else round type="primary" size="medium">
              已受理
            </van-tag>
          </template>
        </van-cell>
        <van-steps direction="vertical" :active="0">
          <van-step v-if="resData.status === '0'">
            <h3>已办结</h3>
            <p>您的诉求已处理完结。</p>
            <p>{{ resData.content }}</p>
            <p>{{ resData.processTime }}</p>
          </van-step>
          <van-step>
            <h3>已受理</h3>
            <p>我们会尽快处理您的诉求，请耐心等待。</p>
            <p>{{ resData.cmpntTime }}</p>
          </van-step>
          <van-step>
            <h3>诉求登记成功</h3>
            <p>感谢您的反馈，您的诉求已成功登记。</p>
            <p>{{ resData.cmpntTime }}</p>
          </van-step>
        </van-steps>
      </van-cell-group>
    </van-skeleton>
    <!--    </van-pull-refresh> -->
  </Container>
</template>

<style scoped>
.group {
  margin: 20px 0;
}
:deep(.van-cell__title) {
  color: #666666 !important;
}
</style>
