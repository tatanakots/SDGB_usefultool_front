<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 从 URL 中获取参数
const urlParams = new URLSearchParams(window.location.search)
// 如果 URL 中没有传递 code 或 msg，则使用默认值
const errorCode = ref(urlParams.get('code') || '500000')
const errorMsg = ref(urlParams.get('msg') || '出现未知错误。')
</script>

<template>
    <img src="/img/title_error.png" class="title m_10" />
    <div class="container_red p_10">
        <div class="p_5 f_14">错误码：{{ errorCode }}</div>
        <img src="/img/line_01.png" class="w_396" />
        <div class="p_5 f_12 gray break">{{ errorMsg }}</div>
        <img src="/img/chara_01.png" class="w_84 m_15" />
    </div>
    <div class="m_15 p_10">
        <button type="button" onclick="location.href='/logout/';" class="f_0"><img
                src="https://maimai.wahlap.com/maimai-mobile/img/btn_home_logout.png" class="w_80 pointer"></button>
    </div>
    <img src="/img/line_02.png" class="w_450" />
    <div class="t_c">
        <button type="button" onclick="location.href='/'" class="f_0">
            <img src="/img/btn_back.png" class="w_80 m_t_10" />
        </button>
    </div>
</template>

<style scoped>
/* 你的样式 */
</style>
