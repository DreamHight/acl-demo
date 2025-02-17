<script setup lang="ts">

</script>

<template>
  <div class="content">
    <p class="section-title">
      一、协议的接受
    </p>
    <p class="paragraph">
      欢迎您使用本服务。在使用我们的服务前，请您仔细阅读本协议的所有条款。如果您不同意本协议中的任何条款，请您立即停止使用我们的服务。使用本服务即表示您已完全理解并同意遵守本协议的所有条款。
    </p>

    <p class="section-title">
      二、服务内容
    </p>
    <p class="paragraph">
      本服务提供用户投诉的功能，用户可以在平台上提交对服务或产品的意见和投诉。我们将根据投诉的具体情况进行处理，并尽力在合理时间内给予反馈。
    </p>

    <p class="section-title">
      三、个人信息收集与使用
    </p>
    <p class="paragraph">
      信息收集：为方便处理您的投诉，我们可能会收集您的个人信息，包括但不限于姓名、联系电话、电子邮件地址及其他您自愿提供的信息。
    </p>

    <p class="paragraph">
      信息使用：我们将您的个人信息用于以下目的：
    </p>
    <ul class="list-item">
      <li>处理和回复您的投诉；</li>
      <li>改进我们的服务和产品；</li>
      <li>遵循法律法规及相关规定。</li>
    </ul>

    <p class="paragraph">
      信息披露：除非事先获得您的明确同意或法律要求，我们不会向第三方披露您的个人信息。
    </p>

    <p class="section-title">
      四、用户责任
    </p>
    <p class="paragraph">
      用户在使用本服务时，应确保所提交的信息真实、准确、完整，并对其信息的合法性、合规性负责。用户不得通过本服务发布任何违法、侵权、虚假或不当的信息。用户如发现他人侵犯其合法权益，应及时向我们报告，我们将依据相关法律法规采取相应措施。
    </p>

    <p class="section-title">
      五、隐私保护
    </p>
    <p class="paragraph">
      我们承诺尊重并保护用户的隐私。用户在使用本服务时所提供的信息仅用于投诉处理及相关服务。用户在提交投诉时，建议不提交个人敏感信息，以保障用户的个人隐私安全。
    </p>

    <p class="section-title">
      六、服务变更与中断
    </p>
    <p class="paragraph">
      我们有权随时对服务内容进行修改或升级，包括但不限于增加、减少、暂停或终止服务。如因系统维护或其他不可抗力因素导致服务中断，我们将尽量提前通知用户，但不承担因此产生的任何损失。
    </p>

    <p class="section-title">
      七、免责声明
    </p>
    <p class="paragraph">
      对于因技术问题、网络问题或其他不可控原因造成的服务中断或信息延误，我们不承担任何责任。我们不对用户因使用本服务而产生的任何直接、间接、附带、特殊或后果性损害承担责任。
    </p>

    <p class="section-title">
      八、法律适用与争议解决
    </p>
    <p class="paragraph">
      本协议的订立、执行及解释均适用中华人民共和国法律。因本协议引起的或与本协议有关的争议，双方应友好协商解决；如协商不成，任何一方可向我们所在地的人民法院提起诉讼。
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
