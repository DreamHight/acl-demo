<script setup lang="ts">

</script>

<template>
  <div class="content">
    <p class="section-title">
      一、引言
    </p>
    <p class="paragraph">
      尊重您的隐私并保护您的个人信息是我们的重要责任。本政策旨在说明我们如何收集、使用、存储、保护和披露您的个人信息。请您在使用我们的服务之前仔细阅读本政策。
    </p>

    <p class="section-title">
      二、适用范围
    </p>
    <p class="paragraph">
      本政策适用于您通过我们的网站及其他渠道提供的所有个人信息。
    </p>

    <p class="section-title">
      三、我们收集的信息
    </p>
    <p class="paragraph">
      我们可能会收集和处理以下类型的个人信息：
    </p>
    <ul>
      <li><strong>基本信息</strong>：姓名、性别、身份证号码、联系方式等。</li>
      <li><strong>使用信息</strong>：访问时间、IP地址、浏览器类型、设备信息等。</li>
    </ul>

    <p class="section-title">
      四、信息的使用
    </p>
    <p class="paragraph">
      我们将您的个人信息用于以下目的：
    </p>
    <ul>
      <li>提供、维护和改善我们的服务。</li>
      <li>与您沟通，回复您的询问和反馈。</li>
      <li>遵循法律法规的要求。</li>
    </ul>

    <p class="section-title">
      五、信息的分享与披露
    </p>
    <p class="paragraph">
      我们承诺不会将您的个人信息出售给第三方。我们可能在以下情况下共享您的信息：
    </p>
    <ul>
      <li>在您同意的情况下。</li>
      <li>为了遵守法律法规或法律程序。</li>
      <li>为了保护我们的权利、隐私、安全或财产，或他人的权利、隐私、安全或财产。</li>
      <li>与我们的合作伙伴或服务提供商共享，仅限于为提供服务的必要范围。</li>
    </ul>

    <p class="section-title">
      六、信息的存储与安全
    </p>
    <p class="paragraph">
      我们采取合理的技术和管理措施来保护您的个人信息，防止未经授权的访问、使用或泄露。然而，请您理解，没有任何数据传输和存储方式是绝对安全的。因此，我们不能保证您的信息是完全安全的。
    </p>

    <p class="section-title">
      七、您的权利
    </p>
    <p class="paragraph">
      根据相关法律法规，您有权：
    </p>
    <ul>
      <li>请求更正不准确的信息。</li>
      <li>请求删除您的个人信息。</li>
    </ul>
    <p class="paragraph">
      如果您希望行使这些权利，请联系我们。
    </p>

    <p class="section-title">
      八、未成年人保护
    </p>
    <p class="paragraph">
      我们的服务不适用于未满18岁的人士。如果您是未成年人，请在父母或监护人的指导下使用我们的服务，并确保他们已阅读本政策。
    </p>

    <p class="section-title">
      九、政策的更新
    </p>
    <p class="paragraph">
      我们可能会不定期更新本个人信息保护政策。我们将在本页面上发布更新，并建议您定期查看以了解最新的隐私政策变更。
    </p>

    <p class="section-title">
      十、联系我们
    </p>
    <p class="paragraph">
      如果您对本政策有任何疑问或建议，请通过以下方式联系我们：
    </p>
    <ul>
      <li><strong>电话</strong>：</li>
    </ul>

    <p class="paragraph">
      感谢您关注我们的个人信息保护政策！
    </p>
    <!--            <van-button
                  round
                  block
                  type="primary"
                  class="submit-button"
                  @click.prevent="handleAgree"
                >
                  同意
                </van-button> -->
  </div>
</template>

<style scoped lang="less">
.content {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 0 16px;
  //position: relative; /* 设置相对定位以便于绝对定位子元素 */

  .submit-button {
    position: fixed; /* 绝对定位 */
    bottom: 10px; /* 距离底部10px */
    margin: 16px;
    left: 0;
    right: 0; /* 左右占满父容器 */
  }
  .section-title {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .paragraph {
    text-indent: 2em;
    margin-bottom: 15px; /* 段落之间的间距 */
  }

  .list-item {
    text-indent: 2em;
    margin-left: 20px;
  }
}
</style>
