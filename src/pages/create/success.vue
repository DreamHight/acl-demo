<script lang="ts" setup>
definePage({
  name: 'success',
  meta: {
    level: 2,
    title: '提交成功',
    i18n: '',
    keepAlive: true,
  },
})
const route = useRoute()
const cmpntNum = route.query.cmpntNum
</script>

<template>
  <div class="success-page">
    <van-icon name="checked" size="100" color="#07c160" class="icon" />

    <p class="message">
      投诉编号:{{ cmpntNum }}
    </p>
    <p class="message">
      感谢您的反馈，我们会尽快处理您的诉求。
    </p>
  </div>
</template>

<style scoped>
.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh; /* 使页面充满整个视口 */
  text-align: center;
  background-color: #f7f8fa; /* 背景色 */
  animation: fadeIn 0.5s ease-in-out; /* 加入淡入动画 */
}

.icon {
  animation: bounce 1s ease forwards; /* 图标弹跳动画，仅播放一次 */
  margin-bottom: 20px; /* 图标底部间距 */
}

.message {
  /*margin: 10px 0 30px; !* 增加上下边距 *!*/
  color: #666;
  font-size: 16px; /* 调整消息字体大小 */
  line-height: 1.2; /* 增加行高，提高可读性 */
  animation: slideUp 0.5s ease-in-out; /* 消息上滑动画 */
  animation-delay: 0.2s; /* 延迟显示 */
}

/* 动画定义 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
