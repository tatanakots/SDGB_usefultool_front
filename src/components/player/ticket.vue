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

// 功能票列表
const chargeList = ref([])

// 根据票券ID返回小图标URL
const getTicketIcon = (id) => {
    const val = id.toString()
    if (val === "0") {
        return '/img/ticket/ticket_icon_none.png'
    }
    const num = parseInt(val)
    if (num >= 2 && num <= 6) {
        const index = (num - 1).toString().padStart(2, '0')
        return `/img/ticket/ticket_icon_paid_${index}.png`
    }
    if (val === "10005" || val === "10105" || val === "10205") {
        return '/img/ticket/ticket_icon_event.png'
    }
    if (val === "11001") {
        return '/img/ticket/ticket_icon_free.png'
    }
    if (val === "30001") {
        return '/img/ticket/ticket_icon_link.png'
    }
    return '/img/ticket/ticket_icon_none.png'
}

// 根据票券ID返回标题
const getTicketTitle = (id) => {
    switch (id) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return `区域前进速度${id}倍票`
        case 10005:
        case 10105:
        case 10205:
            return `（活动）区域前进速度5倍票`
        case 11001:
            return `（免费）区域前进速度1.5倍票`
        case 30001:
            return `（联动）特殊功能票`
        default:
            return `未知票券`
    }
}

// 拉取用户已有功能票（POST 请求）
const loadCharge = async () => {
    const uid = getCookie('userId')
    if (!uid) {
        alert('未获取到有效用户ID')
        return
    }
    try {
        const url = `${API_BASE_URL}/api/v1/player/charge`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: uid })
        })
        const result = await response.json()
        if (result.stat !== 1) {
            alert(result.msg)
            return
        }
        chargeList.value = result.data.userChargeList
    } catch (error) {
        console.error('请求失败:', error)
        alert('请求出错，请检查网络设置后重试。')
    }
}

// 页面加载后检查登录并获取票列表
onMounted(() => {
    const uid = getCookie('userId')
    if (!uid || !isValidUserId(uid)) {
        location.href = '/error/?code=100001&msg=' + encodeURIComponent('登录失败，请重试。')
        return
    }
    loadCharge()
})

// 功能票选项
const chosenTicket = ref("0")

// 根据 chosenTicket 值计算票图片的 URL
const ticketImage = computed(() => getTicketIcon(chosenTicket.value))

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
    <!-- 顶部导航 -->
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

    <!-- 标题 -->
    <img src="/img/title_ticket.png" class="title m_10" />

    <!-- 票券发送区域 -->
    <div class="town_block m_l_10 m_r_10 p_10 p_b_0 f_0 t_c p_s m_b_20" id="nav">
        <div class="m_t_10 m_b_10">
            <img src="/img/title_data_sendticket.png" />
        </div>
        <div class="p_5 f_14">请选择功能票</div>
        <div class="m_t_10">
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
        <img :src="ticketImage" class="w_250 m_t_10" />
        <table class="collapse f_0">
            <tr>
                <td class="col4"></td>
                <td class="col4"></td>
                <td class="col4"></td>
                <td class="col4">
                    <button type="button" @click="sendTicket">
                        <img src="/img/btn_decision.png" class="h_50 m_t_10" />
                    </button>
                </td>
            </tr>
        </table>
    </div>

    <img src="/img/title_ticket_sended.png" class="title m_10" />

    <!-- 动态渲染已有功能票 -->
    <div v-for="ticket in chargeList" :key="ticket.chargeId" class="p_r m_15 w_450 f_0">
        <img src="/img/ticket/ticket_free.png" class="w_450" />
        <div class="ticket_title p_a p_5 t_c f_16 f_b blue">
            {{ getTicketTitle(ticket.chargeId) }}
        </div>
        <img :src="getTicketIcon(ticket.chargeId)" class="ticket_img p_a" />
        <div class="ticket_txt p_a p_5 t_c f_13">
            {{ ticket.stock }}枚保持
        </div>
    </div>
</template>

<style scoped>
/* 样式区，若需微调可在此添加 */
</style>
