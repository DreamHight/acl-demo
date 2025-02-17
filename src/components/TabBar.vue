<script setup lang="ts">
const { t } = useI18n()
const active = ref(0)
const route = useRoute()

const display = computed(() => {
  return route.meta.level && route.meta.level !== 2
})
</script>

<template>
  <van-tabbar v-show="display" v-model="active" class="tab-bar" route>
    <van-tabbar-item replace to="/">
      {{ t('layouts.home') }}
      <template #icon>
        <div class="i-carbon:home" size="28" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/query">
      {{ t('layouts.profile') }}
      <template #icon>
        <div class="i-carbon:user" size="28" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less" scoped>
.tab-bar {
  height: 8vh;
  min-height: 60px;
}
</style>
