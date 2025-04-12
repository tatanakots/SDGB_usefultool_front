<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()

</script>

<template>
    <div class="wrapper main_wrapper t_c">
        <img src="/img/title_site_policy.png" class="title m_b_30" />
        <div class="p_r f_0">
            <div class="see_through_block p_r m_15 p_10">
                <div class="t_l">
                    <div class="basic_block m_b_5 p_10">
                        <div class="m_b_5 p_3 t_l f_15"><b>请注意：怂别用，用别怂。</b></div>
                        <div class="m_b_5 p_3 t_l f_15"><b>我也没说过这玩意一直能用，至少现在能用。</b></div>
                        <img src="/img/line_01.png" class="w_396" />
                        <div class="m_b_5 p_3 t_l f_15"><b>推荐系统环境</b></div>
                        <img src="/img/line_01.png" class="w_396" />
                        <div class="p_10 t_l f_15 break">
                            以下是使用舞萌DX科技专页的推荐系统环境：
                        </div>
                        <div class="m_b_0 p_3 t_l f_15"><b>■智能手机</b></div>
                        <div class="p_3 t_l f_12 break">
                            <p>iOS 11.3.1或之后的版本</p>
                            <p>Android 7.0.0或之后的版本</p>
                            <p>建议使用该手机型号所推荐的浏览器。</p>
                            <p>请注意舞萌DX科技专页不确保可以支持所有手机型号或该系统。</p>
                        </div>
                        <div class="m_b_0 p_3 t_l f_15"><b>■关于iPod touch, iPad和其他平板电脑</b></div>
                        <div class="p_3 t_l f_12 break">
                            <p>内容与上述相同。</p>
                            <p>请注意舞萌DX科技专页不确保可以支持所有平板电脑或该系统。</p>
                        </div>
                        <div class="m_b_0 p_3 t_l f_15"><b>■其他</b></div>
                        <div class="p_3 t_l f_12 break">
                            不支持Windows系统的手机。
                        </div>
                        <div class="m_b_5 p_3 t_l f_15 m_t_10"><b>关于'Cookie':</b></div>
                        <img src="/img/line_01.png" class="w_396" />
                        <div class="p_3 t_l f_12 break">
                            <p>浏览器必须启用Cookie功能才可访问'舞萌DX科技专页'。</p>
                            <p>如阁下无法浏览'舞萌DX科技专页'，请检查浏览器设置以确认是否已开启Cookie功能。</p>
                        </div>
                        <div class="m_b_5 p_3 t_l f_15 m_t_10"><b>关于'JavaScript':</b></div>
                        <img src="/img/line_01.png" class="w_396" />
                        <div class="p_3 t_l f_12 break">
                            <p>浏览器必须启用JavaScript功能才可访问'舞萌DX科技专页'。</p>
                            <p>如阁下无法浏览'舞萌DX科技专页'，请检查浏览器设置以确认是否已开启JavaScript功能。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="/img/line_02.png" class="w_450" />
        <div class="t_c">
            <button type="button" onclick="history.back();" class="f_0"><img
                    src="/img/btn_back.png" class="w_80 m_t_10" /></button>
        </div>
    </div>
</template>


<style scoped></style>
