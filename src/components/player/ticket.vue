<script setup>
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { API_BASE_URL } from '../../config.js'  // 根据项目路径修改

const { t } = useI18n()

// 校验是否为8位纯数字的正则表达式
const isValidUserId = (value) => /^[0-9]{8}$/.test(value)

// 获取指定名称的 Cookie 值
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

// 页面加载后检查 Cookie
onMounted(() => {
  const uid = getCookie('userId')
  if (!uid || !isValidUserId(uid)) {
    location.href = '/error/?code=100001&msg=' + encodeURIComponent('登录失败，请重试。')
  }
})

// 功能票选项：使用响应式变量保存选中的票（默认为不使用功能票，即值为 "0"）
const chosenTicket = ref("0")

// 根据 chosenTicket 值计算票图片的 URL
const ticketImage = computed(() => {
  const val = chosenTicket.value
  if (val === "0") {
    return '/img/ticket/ticket_icon_none.png'
  }
  const num = parseInt(val)
  // 对于区域前进速度票：票倍率在 2 到 6
  if (num >= 2 && num <= 6) {
    // 显示 ticket_icon_paid_01~05.png, 数字为倍率-1
    const index = (num - 1).toString().padStart(2, '0')
    return `/img/ticket/ticket_icon_paid_${index}.png`
  }
  // 活动票：值为 10005、10105、10205 返回活动票预览图
  if (val === "10005" || val === "10105" || val === "10205") {
    return '/img/ticket/ticket_icon_event.png'
  }
  // 免费票
  if (val === "11001") {
    return '/img/ticket/ticket_icon_free.png'
  }
  // 联动的特殊票
  if (val === "30001") {
    return '/img/ticket/ticket_icon_link.png'
  }
  return '/img/ticket/ticket_icon_none.png'
})

// 提交功能票请求
const sendTicket = async () => {
  const uid = getCookie('userId')
  if (!uid) {
    alert('未获取到有效用户ID')
    return
  }
  try {
    const url = `${API_BASE_URL}/api/v1/player/sendticket`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: uid, ticketId: chosenTicket.value })
    })
    const data = await response.json()
    alert(data.msg)
  } catch (error) {
    console.error('请求失败:', error)
    alert('请求出错，请检查网络设置后重试。')
  }
}
</script>

<template>
    <div class="m_t_5 m_b_10 t_l f_0">
        <a href="/player/data/" class="p_r d_ib">
            <img src="/img/menu_sub_playerdata_playerdata.png" class="w_96" />
        </a>
        <a href="/player/data/ticket/" class="p_r d_ib">
            <img src="/img/menu_sub_playerdata_ticket.png?ver=1.30" class="w_96" />
            <img src="/img/icon_on.png" class="submenu_selected" />
        </a>
        <a href="/player/data/stampCard/" class="p_r d_ib">
            <img src="/img/menu_sub_playerdata_stamp.png?ver=1.30" class="w_96" />
        </a>
        <img src="/img/menu_sub_playerdata.png" class="w_96" />
        <img src="/img/menu_sub_playerdata.png" class="w_96" />
    </div>

    <img src="/img/title_ticket.png" class="title m_10" />
    <div class="town_block m_l_10 m_r_10 p_10 p_b_0 f_0 t_c p_s" id="nav">
        <div class="m_t_10 m_b_10">
            <img src="/img/title_data_sendticket.png" />
        </div>
        <div class="p_5 f_14">请选择功能票</div>
        <div class="m_t_10">
            <!-- 为select元素绑定v-model，更新 chosenTicket -->
            <select name="idx" class="w_430" v-model="chosenTicket">
                <option value="0">不使用功能票</option>
                <option value="2">区域前进速度2倍票</option>
                <option value="3">区域前进速度3倍票</option>
                <option value="4">区域前进速度4倍票</option>
                <option value="5">区域前进速度5倍票</option>
                <option value="6">区域前进速度6倍票</option>
                <option value="10005">（活动）区域前进速度5倍票_1</option>
                <option value="10105">（活动）区域前进速度5倍票_2</option>
                <option value="10205">（活动）区域前进速度5倍票_3</option>
                <option value="11001">（免费）区域前进速度1.5倍票</option>
                <option value="30001">（联动）特殊功能票</option>
            </select>
        </div>
        <!-- 根据选项绑定的ticketImage更新票预览图 -->
        <img :src="ticketImage" class="w_250 m_t_10">
        <table class="collapse f_0">
            <tr>
                <td class="col4"></td>
                <td class="col4"></td>
                <td class="col4"></td>
                <td class="col4">
                    <!-- 将按钮类型设置为button，点击时调用sendTicket方法 -->
                    <button type="button" @click="sendTicket">
                        <img src="/img/btn_decision.png" class="h_50 m_t_10" />
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped></style>
