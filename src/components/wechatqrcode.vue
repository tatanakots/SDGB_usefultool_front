<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()

</script>

<template>
    <img src="/img/play/play_about02.png" class="title m_10" />
    <img src="/img/line_02.png" class="w_450" />
    <div class="t_c">
        <button type="button" onclick="history.back();" class="f_0"><img src="/img/btn_back.png"
                class="w_80 m_t_10" /></button>
    </div>
</template>


<style scoped></style>
