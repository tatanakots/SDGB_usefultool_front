<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 在组件挂载时清空所有 cookie
onMounted(() => {
  // 获取所有 cookie 并逐一清除
  const cookies = document.cookie.split(";")
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=")
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim()
    // 清空 cookie（设置过期时间为过去）
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }
})
</script>

<template>
    <img src="/img/title_logout.png" class="title m_10" />
    <div class="container_black p_10">
        <div class="p_5 f_12 gray break">再见！</div>
        <img src="/img/chara_02.png" class="w_84 m_15" />
    </div>
    <img src="/img/line_02.png" class="w_450" />
    <div class="t_c">
        <button type="button" onclick="location.href='/';" class="f_0">
            <img src="/img/btn_back.png" class="w_80 m_t_10" />
        </button>
    </div>
</template>

<style scoped>
/* 你的样式 */
</style>
