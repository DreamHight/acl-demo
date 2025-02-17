<template>
  <div
    class="acl-button flex-between"
    :class="[
      'acl-button--' + type
    ]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      viewBox="0 0 7 7" fill="none"
    >
      <circle cx="3.5" cy="3.5" r="3.5" :fill="type === 'info' ? '#D9D9D9' : '#FFF'" />
    </svg>
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7" height="7"
      viewBox="0 0 7 7"
      fill="none"
    >
      <circle cx="3.5" cy="3.5" r="3.5" :fill="type === 'info' ? '#D9D9D9' : '#FFF'" />
    </svg>
  </div>
</template>

<script setup lang="ts">
// defineProps and defineEmits start
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (val: string) => {
      return ['default', 'danger', 'success', 'info'].includes(val);
    }
  },
});
// defineProps and defineEmits end
</script>

<style scoped lang="less">
@bg-white: white;
@text-white: white;
@text-black: black;
.acl-button {
  width: 100%;
  border-radius: 80px;
  padding: 10px 10px;
  &--default {
    background: @bg-white;
    color: @text-black;
  }
  &--success {
    background: linear-gradient(0deg, #49A700 0%, #CBE77E 100%);
    color: @text-white;
  }
  &--danger {
    background: linear-gradient(0deg, #C54F4F 0%, #F9BB82 100%);
    color: @text-white;
  }
  &--info {
    background: linear-gradient(0deg, #BFBFBF 0%, #778C97 100%);
    color: @text-white;
  }
}
</style>