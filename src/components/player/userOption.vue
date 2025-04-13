<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()
// 校验是否为8位数字的正则表达式
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
        // 若userId不存在或不符合条件，重定向到错误页面
        // 注意：msg中包含中文，建议对参数进行编码，如需要的话可以调用 encodeURIComponent
        location.href = '/error/?code=100001&msg=' + encodeURIComponent('登录失败，请重试。')
    }
})
</script>

<template>
    <div class="p_15">
        <img src="/img/title_setting.png" class="title">
        <div class="town_block m_t_10 p_10 p_b_0 f_14 t_l black">
            <table>
                <tr>
                    <td>
                        玩家ID获取器
                    </td>
                    <td class="t_r f_0">
                        <a href="/qrcode/">
                            <img src="/img/btn_detail.png" class="h_40" />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><img src="/img/line_01.png" class="w_430" />
                    </td>
                </tr>
                <tr>
                    <td>
                        设置
                    </td>
                    <td class="t_r f_0">
                        <a href="/player/userOption/updateUserOption/">
                            <img src="/img/btn_change.png" class="h_40" />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><img src="/img/line_01.png" class="w_430" />
                    </td>
                </tr>
                <tr>
                    <td>
                        我的收藏设置
                    </td>
                    <td class="t_r f_0">
                        <a href="/player/userOption/favorite/musicList">
                            <img src="/img/btn_change.png" class="h_40" />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><img src="/img/line_01.png" class="w_430" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="p_10 t_r">
                        <button type="button" onclick="location.href='/logout/';" class="m_t_5"><img
                            src="/img/btn_logout.png" class="h_50"></button>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</template>


<style scoped></style>
