<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { API_BASE_URL } from '../config.js'  // 根据项目路径修改导入路径

const { t } = useI18n()

// 定义响应式变量
const maid = ref('')
const userId = ref('(玩家ID应为8位数字)')

// 提交请求的函数
const handleSubmit = async () => {
    try {
        const url = `${API_BASE_URL}/api/v1/qrcode`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ maid: maid.value })
        })

        const data = await response.json()

        if (data.stat !== 1) {
            alert(data.msg)
        } else {
            userId.value = data.userId
        }
    } catch (error) {
        console.error('请求出错:', error)
        alert('请求出错')
    }
}
</script>

<template>
    <div class="see_through_block m_15 p_10 t_c">
        <div class="black m_10 f_13 l_h_12">
            <div>请识别玩家二维码并获得MAID，将获得的MAID填在下方。</div>
            <input type="text" name="maid" maxlength="100" placeholder="MAID" v-model="maid" />
            <div>请注意，二维码的有效时间是10分钟。</div>
        </div>
        <button type="submit" class="m_t_5" @click="handleSubmit">
            <img src="/img/btn_decision.png" class="h_50" />
        </button>
        <img src="/img/line_02.png" class="w_396" />
        <div class="black m_10 f_13 l_h_12">
            阁下的玩家ID是：<span id="userId">{{ userId }}</span>
        </div>
    </div>
    <img src="/img/line_02.png" class="w_450" />
    <div class="t_c">
        <button type="button" onclick="history.back();" class="f_0">
            <img src="/img/btn_back.png" class="w_80 m_t_10" />
        </button>
    </div>
</template>

<style scoped></style>
