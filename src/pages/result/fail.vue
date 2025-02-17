<template>
  <div class="container">
    <div class="content text-center">
      <img width="148px" height="158px" :src="ImageError" />

      <p class="title">本产品未经”细叶榕”平台验证</p>
      <p class="desc">你所验证的产品未经”细叶榕”平台登记注册过,请联系该产品厂家或厂家合法授权经销商检验</p>

      <div class="close-btn" @click="backHandler">
        <AClButton type="info">關閉本程序</AClButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageError from '@/assets/images/error_v1.png'

definePage({
  name: 'fail',
  meta: {
    level: 2,
  },
})

const router = useRouter()

function backHandler(): void {
  router.back()
}
</script>

<style scoped lang="less">
.container {
  position: relative;
  min-height: 100vh;
  overflow: auto;
  background: linear-gradient(0deg, #F9B2A2 0%, #A2403D 100%);
  .content {
    position: absolute;
    top: 10vh;
    right: 30px;
    left: 30px;
    margin: auto;
    padding: 45px 35px;
    border-radius: 5px;
    background-color: #FFF;
    .title {
      color: #000;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140.625%;
    }
    .desc {
      color: #000;
      font-family: "Microsoft New Tai Lue";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .close {
      width: 169px;
      height: 38px;
      line-height: 38px;
      border-radius: 79px;
      background: linear-gradient(0deg, #BFBFBF 0%, #778C97 100%);
      margin: 30px auto 0;
      padding-inline: 10px;
    }
    .close-btn {
      width: 169px;
      margin: 30px auto 0;
    }
  }
}
</style>