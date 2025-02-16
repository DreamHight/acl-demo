<script setup lang="ts">
import useAppStore from '@/stores/modules/app'
import router from '@/router'
import img from '@/assets/images/banner1x1.jpg'

definePage({
  name: 'homecopy',
  meta: {
    level: 1,
    // title: '全国人力资源投诉平台',
    // i18n: '',
  },
})
const menuItems = [
  { title: '在线投诉', label: '提交您的诉求，我们将尽快处理', route: 'create', icon: 'records-o' },
  { title: '热线投诉', label: '拨打 0755 联系人工客服', route: '', icon: 'phone-o' },
  { title: '查询投诉', label: '查看您的投诉进度和结果', route: 'query', icon: 'search' },
]

/**
 * 随机
 */
const quotes = ref<string[]>(generateRandomQuotes(4))
const currentIndex = ref(0) // 当前索引

// 随机名言数组
function getRandomMotivationalQuote(): string {
  const quotesList: string[] = [
    '让每一份劳动得到尊重!',
    '团结一致，共同前行!',
    '您的声音，我们倾听!',
    '维护权益，从我做起!',
    '一起创造更好的工作环境!',
    '勇敢表达，改变从现在开始!',
    '为每位劳动者发声!',
    '心手相连，共筑和谐!',
    '相信自己，追求公正!',
    '保护权益，让辛勤付出有回报!',
    '坚持立场，捍卫尊严!',
    '您的努力，值得被肯定!',
    '人人平等，权利共享!',
    '勇气是一种力量!',
    '共同奋斗，成就未来!',
    '发声无畏，彼此支持!',
    '每位劳动者都应被尊重!',
    '团结的力量，无可阻挡!',
    '携手并进，创造美好明天!',
  ]

  // 随机选择一句话
  const randomIndex = Math.floor(Math.random() * quotesList.length)
  return quotesList[randomIndex]
}

// 生成指定数量的唯一随机名言
function generateRandomQuotes(count: number): string[] {
  const uniqueQuotes = new Set<string>()

  while (uniqueQuotes.size < count) {
    uniqueQuotes.add(getRandomMotivationalQuote())
  }

  return Array.from(uniqueQuotes)
}

// 更新名言
function updateQuotes() {
  quotes.value = generateRandomQuotes(2) // 重新生成 4 条随机名言
}

/**
 * 拨打热线电话，仅移动端访问
 */
const appStore = useAppStore()
function handleClick(item: any, index: number) {
  if (index === 1 && appStore.isMobile) {
    window.location.href = 'tel:0755'
  }
  else {
    router.push(item.route)
  }
}
</script>

<template>
  <div class="home">
    <div class="title">
      人力欠薪投诉
    </div>
    <van-swipe v-model:current="currentIndex" class="my-swipe" :autoplay="3000" indicator-color="white">
      <!--      <van-swipe-item v-for="(quote, index) in quotes" :key="index">
        <img :src="img" alt="">
        <div class="quote">
          {{ quote }}
        </div>
      </van-swipe-item> -->
      <van-swipe-item>
        <img :src="img" alt="">
        <div class="quote">
          携手并进，创造美好明天!
        </div>
      </van-swipe-item>
    </van-swipe>
    <VanCellGroup>
      <template v-for="(item, index) in menuItems" :key="item.route">
        <VanCell class="item" center :to="item.route" is-link @click="handleClick(item, index)">
          <template #icon>
            <van-icon class="icon" color="#5666d7" :name="item.icon" size="32" />
          </template>
          <template #right-icon>
            <van-icon class="icon" color="#5666d7" name="arrow" />
          </template>

          <template #title>
            <div class="item-title">
              {{ item.title }}
            </div>
          </template>
          <template #label>
            <div class="label">
              {{ item.label }}
            </div>
          </template>
        </VanCell>
      </template>
    </VanCellGroup>
  </div>
</template>

<style scoped lang="less">
.home {
  background-color: white;
  padding-bottom: 8vh; //tab-bar高度
  min-height: 92vh;
  .title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px;
    text-align: center;
    z-index: 1;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.8);
  }
  .my-swipe .van-swipe-item {
    height: 100vw;
    img {
      width: 100%;
      height: 100%;
    }
    .quote {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      padding: 8px;
      text-align: center;
      z-index: 1;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #c0ddff;
    }
  }
  .item {
    .icon {
      margin-right: 10px;
    }
    .item-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 32px;
      color: @primary;
    }
    .label {
      font-size: 14px;
      color: @secondary;
    }
  }
}

:deep(.van-cell) {
  height: 100px;
}
:deep(.van-cell-group:after) {
  border: none;
}
:deep(.van-cell:last-child:after) {
  border: none; /* 去掉最后一个 VanCell 的边框 */
}
</style>
