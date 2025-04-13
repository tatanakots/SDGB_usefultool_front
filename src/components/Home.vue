<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 响应式变量，绑定输入和复选框
const userId = ref('')
const saveCookie = ref(false)

// 校验 Cookie 中的 userId 是否存在且为 8 位数字
const isValidUserId = (value) => /^[0-9]{8}$/.test(value)

// 获取指定名称的 Cookie
const getCookie = (name) => {
  const cookieArr = document.cookie.split(';')
  for (const cookie of cookieArr) {
    const [key, value] = cookie.split('=')
    if (key.trim() === name) {
      return value
    }
  }
  return null
}

// 页面加载后立即检测 Cookie 是否满足条件
onMounted(() => {
  const uid = getCookie('userId')
  if (uid && isValidUserId(uid)) {
    location.href = '/player'
  }
})

// 登录按钮点击处理函数
const handleLogin = () => {
  if (!isValidUserId(userId.value)) {
    alert('请输入8位数字的用户ID')
    return
  }

  let cookieConfig = 'path=/'
  if (saveCookie.value) {
    // 设置永久有效的 Cookie，这里以设置100年后过期为例
    const expDate = new Date()
    expDate.setFullYear(expDate.getFullYear() + 100)
    cookieConfig += `; expires=${expDate.toUTCString()}`
  }
  // 设置Cookie
  document.cookie = `userId=${userId.value}; ${cookieConfig}`

  // 登录成功后直接跳转到 /player 页面
  location.href = '/player'
}
</script>

<template>
    <div class="see_through_block m_15 p_10 t_c">
        <div class="black m_10 f_13 l_h_12">
            <input type="text" name="userId" maxlength="8" placeholder="玩家 ID" v-model="userId" />
            <label class="p_r m_5">
                <input type="checkbox" name="save_cookie" v-model="saveCookie">
                <span>记住我</span>
            </label>
            <div class="m_t_5 f_12">（请不要在共享设备上勾选）</div>
            <div>
              登录即代表同意
              <a href="/termsOfService/" class="sub_color">使用条款</a>
              和
              <a href="/sitePolicy/" class="sub_color">使用须知</a>
            </div>
        </div>
        <button type="button" class="m_t_5" @click="handleLogin">
          <img src="/img/btn_login.png" class="h_50" />
        </button>
    </div>
    <img src="/img/title_use.png" class="title m_15 m_b_5" />
    <div class="town_block m_15 m_t_0 p_10 t_l">
        <div class="see_through_block p_r p_15 f_12">
            <span class="f_14">①</span> 关注公众号 「
            <a href="/wechatqrcode">舞萌 | 中二</a>」 来获取 「玩家二维码」
            <img src="/img/line_01.png" class="w_396">
            <span class="f_14">②</span> 在 「
            <a href="/qrcode">玩家ID获取器</a>」 中获取 「玩家ID」
            <img src="/img/line_01.png" class="w_396">
            <span class="f_14">③</span> 使用 「玩家ID」 登录舞萌DX科技专页
            <img src="/img/line_01.png" class="w_396">
            <div class="m_r_5 t_r f_b">
                <img src="/img/icon_each.png" class="h_16 v_b">
                <a href="/playTutorial/play/index.html#about03" target="_blank">详情请参考</a>
            </div>
        </div>
    </div>
    <img src="/img/title_getuserid.png" class="title m_15 m_b_5" />
    <a href="/qrcode">
      <img src="/img/btn_getuserid.png" class="m_10 m_b_5" />
    </a>
    <div class="m_b_30">
      <a href="/wechatqrcode" class="f_14 f_b white">没有玩家二维码？</a>
    </div>
</template>

<style scoped>
/* 你的样式 */
</style>
