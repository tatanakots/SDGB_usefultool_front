<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()

</script>

<template>
    <img src="/img/title_error.png" class="title m_10" />
    <div class="container_red p_10">
        <div class="p_5 f_14 ">错误码：404</div>
        <img src="/img/line_01.png" class="w_396" />
        <div class="p_5 f_12 gray break">访问了不存在的页面</div>
        <img src="/img/chara_01.png" class="w_84 m_15" />
    </div>
    <img src="/img/line_02.png" class="w_450" />
    <div class="t_c">
        <button type="button" onclick="history.back();" class="f_0"><img src="/img/btn_back.png"
                class="w_80 m_t_10" /></button>
    </div>
</template>


<style scoped></style>
