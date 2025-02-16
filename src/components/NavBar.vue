<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const { t } = useI18n()

const title = computed(() => {
  if (!route.meta)
    return ''

  return route.meta.i18n ? t(route.meta.i18n) : (route.meta.title || '')
})
const showArrow = computed(() => {
  return route.meta.level !== 1
})
</script>

<template>
  <VanNavBar
    v-if="title"
    class="navBar"
    :fixed="true"
    clickable left-arrow
    @click-left="onBack"
  >
    <template #title>
      <div class="title">
        {{ title }}
      </div>
    </template>
    <template #left>
      <van-icon class="title" name="arrow-left" size="18" />
    </template>
  </VanNavBar>
</template>
