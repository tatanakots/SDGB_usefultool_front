<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()

</script>

<template>
    <div class="wrapper main_wrapper t_c">
        <div class="see_through_block m_15 p_10 t_c">
            <div class="black m_10 f_13 l_h_12">
                <input type="text" name="userId" maxlength="8" placeholder="User ID" value="" />
                <label class="p_r m_5">
                    <input type="checkbox" name="save_cookie">
                    <span>记住我</span>
                </label>
                <div class="m_t_5 f_12">（请不要在共享设备上勾选）</div>
                <div>登录即代表同意<a href="/termsOfService/" class="sub_color">使用条款</a>和<a href="/sitePolicy/"
                        class="sub_color">使用须知</a>
                </div>
            </div>
            <button type="submit" class="m_t_5"><img src="/img/btn_login.png" class="h_50" /></button>
        </div>
        <img src="/img/title_use.png" class="title m_15 m_b_5" />
        <div class="town_block m_15 m_t_0 p_10 t_l">
            <div class="see_through_block p_r p_15 f_12">
                <span class="f_14">①</span> 关注公众号 「<a href="/wechatqrcode">舞萌 | 中二</a>」 来获取 「玩家二维码」
                <img src="/img/line_01.png" class="w_396">
                <span class="f_14">②</span> 在 「<a href="/qrcode">玩家ID获取器</a>」 中获取 「玩家ID」
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
        <a href="/qrcode"><img src="/img/btn_getuserid.png" class="m_10 m_b_5" /></a>
        <div class="m_b_30"><a href="/wechatqrcode" class="f_14 f_b white">没有玩家二维码？</a></div>
    </div>
</template>


<style scoped></style>
