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
    <div class="m_15"><img src="/img/title_setting.png" class="title" /></div>
    <div class="town_block m_10 p_10">
        <form action="/player/userOption/updateUserOption/update/" method="post"
            accept-charset="utf-8">
            <div class="see_through_block m_b_10 p_10 f_14 t_l black">
                <table>
                    <tr>
                        <td>简单设置</td>
                        <td class="f_11 l_h_12 gray">可以用更详细的设置</td>
                        <td class="t_r">
                            <select name="optionKind" class="option_select">
                                <option value="0">适合初级玩家的设置</option>
                                <option value="1">适合中级玩家的设置</option>
                                <option value="2">适合高级玩家的设置</option>
                                <option value="3" selected>详细设置</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="see_through_block m_b_10 p_10 f_14 t_l black">
                <div class="m_b_10 f_0"><img src="/img/title_option_speed.png" />
                </div>
                <table>
                    <tr>
                        <td>拍击速度</td>
                        <td class="t_r">
                            <select name="noteSpeed" class="option_select">
                                <option value="0">1.00</option>
                                <option value="1">1.25</option>
                                <option value="2">1.50</option>
                                <option value="3">1.75</option>
                                <option value="4">2.00</option>
                                <option value="5">2.25</option>
                                <option value="6">2.50</option>
                                <option value="7">2.75</option>
                                <option value="8">3.00</option>
                                <option value="9">3.25</option>
                                <option value="10">3.50</option>
                                <option value="11">3.75</option>
                                <option value="12">4.00</option>
                                <option value="13">4.25</option>
                                <option value="14" selected>4.50</option>
                                <option value="15">4.75</option>
                                <option value="16">5.00</option>
                                <option value="17">5.25</option>
                                <option value="18">5.50</option>
                                <option value="19">5.75</option>
                                <option value="20">6.00</option>
                                <option value="21">6.25</option>
                                <option value="22">6.50</option>
                                <option value="23">6.75</option>
                                <option value="24">7.00</option>
                                <option value="25">7.25</option>
                                <option value="26">7.50</option>
                                <option value="27">7.75</option>
                                <option value="28">8.00</option>
                                <option value="29">8.25</option>
                                <option value="30">8.50</option>
                                <option value="31">8.75</option>
                                <option value="32">9.00</option>
                                <option value="33">9.25</option>
                                <option value="34">9.50</option>
                                <option value="35">9.75</option>
                                <option value="36">10.00</option>
                                <option value="37">SONIC</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">调整音符圈的移动速度</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>轻触速度</td>
                        <td class="t_r">
                            <select name="touchSpeed" class="option_select">
                                <option value="0">1.00</option>
                                <option value="1">1.25</option>
                                <option value="2">1.50</option>
                                <option value="3">1.75</option>
                                <option value="4">2.00</option>
                                <option value="5">2.25</option>
                                <option value="6">2.50</option>
                                <option value="7">2.75</option>
                                <option value="8">3.00</option>
                                <option value="9">3.25</option>
                                <option value="10">3.50</option>
                                <option value="11">3.75</option>
                                <option value="12">4.00</option>
                                <option value="13">4.25</option>
                                <option value="14" selected>4.50</option>
                                <option value="15">4.75</option>
                                <option value="16">5.00</option>
                                <option value="17">5.25</option>
                                <option value="18">5.50</option>
                                <option value="19">5.75</option>
                                <option value="20">6.00</option>
                                <option value="21">6.25</option>
                                <option value="22">6.50</option>
                                <option value="23">6.75</option>
                                <option value="24">7.00</option>
                                <option value="25">7.25</option>
                                <option value="26">7.50</option>
                                <option value="27">7.75</option>
                                <option value="28">8.00</option>
                                <option value="29">8.25</option>
                                <option value="30">8.50</option>
                                <option value="31">8.75</option>
                                <option value="32">9.00</option>
                                <option value="33">9.25</option>
                                <option value="34">9.50</option>
                                <option value="35">9.75</option>
                                <option value="36">10.00</option>
                                <option value="37">SONIC</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">调整在触摸之前的显示速度</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>滑动显示时机</td>
                        <td class="t_r">
                            <select name="slideSpeed" class="option_select">
                                <option value="0">-1.0</option>
                                <option value="1">-0.9</option>
                                <option value="2">-0.8</option>
                                <option value="3">-0.7</option>
                                <option value="4">-0.6</option>
                                <option value="5">-0.5</option>
                                <option value="6">-0.4</option>
                                <option value="7">-0.3</option>
                                <option value="8">-0.2</option>
                                <option value="9">-0.1</option>
                                <option value="10" selected>0.0</option>
                                <option value="11">0.1</option>
                                <option value="12">0.2</option>
                                <option value="13">0.3</option>
                                <option value="14">0.4</option>
                                <option value="15">0.5</option>
                                <option value="16">0.6</option>
                                <option value="17">0.7</option>
                                <option value="18">0.8</option>
                                <option value="19">0.9</option>
                                <option value="20">1.0</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">调整提前显示的出现时间</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
            </div>
            <div class="see_through_block m_b_10 p_10 f_14 t_l black">
                <div class="m_b_10 f_0"><img src="/img/title_option_game.png" />
                </div>
                <table>
                    <tr>
                        <td>跳过乐曲</td>
                        <td class="t_r">
                            <select name="trackSkip" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1" selected>长按按键</option>
                                <option value="2">自动/S级</option>
                                <option value="3">自动/SS级</option>
                                <option value="4">自动/SSS级</option>
                                <option value="5">自动/最好成绩</option>
                                <option value="6">生命值/300</option>
                                <option value="7">生命值/100</option>
                                <option value="8">生命值/50</option>
                                <option value="9">生命值/10</option>
                                <option value="10">生命值/1</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">中止游戏进入结算画面</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>镜像模式</td>
                        <td class="t_r">
                            <select name="mirrorMode" class="option_select">
                                <option value="0" selected>OFF</option>
                                <option value="1">⇔</option>
                                <option value="2">⇅</option>
                                <option value="3">↻</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">替换音符的上下和左右的配置</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>旋转滑动</td>
                        <td class="t_r">
                            <select name="starRotate" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1" selected>ON</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">使☆随着滑动操作的速度进行旋转</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>判定调整A</td>
                        <td class="t_r">
                            <select name="adjustTiming" class="option_select">
                                <option value="0">-2.0</option>
                                <option value="1">-1.9</option>
                                <option value="2">-1.8</option>
                                <option value="3">-1.7</option>
                                <option value="4">-1.6</option>
                                <option value="5">-1.5</option>
                                <option value="6">-1.4</option>
                                <option value="7">-1.3</option>
                                <option value="8">-1.2</option>
                                <option value="9">-1.1</option>
                                <option value="10">-1.0</option>
                                <option value="11">-0.9</option>
                                <option value="12">-0.8</option>
                                <option value="13">-0.7</option>
                                <option value="14">-0.6</option>
                                <option value="15">-0.5</option>
                                <option value="16">-0.4</option>
                                <option value="17">-0.3</option>
                                <option value="18">-0.2</option>
                                <option value="19">-0.1</option>
                                <option value="20" selected>0.0</option>
                                <option value="21">0.1</option>
                                <option value="22">0.2</option>
                                <option value="23">0.3</option>
                                <option value="24">0.4</option>
                                <option value="25">0.5</option>
                                <option value="26">0.6</option>
                                <option value="27">0.7</option>
                                <option value="28">0.8</option>
                                <option value="29">0.9</option>
                                <option value="30">1.0</option>
                                <option value="31">1.1</option>
                                <option value="32">1.2</option>
                                <option value="33">1.3</option>
                                <option value="34">1.4</option>
                                <option value="35">1.5</option>
                                <option value="36">1.6</option>
                                <option value="37">1.7</option>
                                <option value="38">1.8</option>
                                <option value="39">1.9</option>
                                <option value="40">2.0</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">适合靠听节奏来游玩的玩家&nbsp;<br>调整音符到达判定线的时间</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>判定调整B</td>
                        <td class="t_r">
                            <select name="judgeTiming" class="option_select">
                                <option value="0">-2.0</option>
                                <option value="1">-1.9</option>
                                <option value="2">-1.8</option>
                                <option value="3">-1.7</option>
                                <option value="4">-1.6</option>
                                <option value="5">-1.5</option>
                                <option value="6">-1.4</option>
                                <option value="7">-1.3</option>
                                <option value="8">-1.2</option>
                                <option value="9">-1.1</option>
                                <option value="10">-1.0</option>
                                <option value="11">-0.9</option>
                                <option value="12">-0.8</option>
                                <option value="13">-0.7</option>
                                <option value="14">-0.6</option>
                                <option value="15">-0.5</option>
                                <option value="16">-0.4</option>
                                <option value="17">-0.3</option>
                                <option value="18">-0.2</option>
                                <option value="19">-0.1</option>
                                <option value="20" selected>0.0</option>
                                <option value="21">0.1</option>
                                <option value="22">0.2</option>
                                <option value="23">0.3</option>
                                <option value="24">0.4</option>
                                <option value="25">0.5</option>
                                <option value="26">0.6</option>
                                <option value="27">0.7</option>
                                <option value="28">0.8</option>
                                <option value="29">0.9</option>
                                <option value="30">1.0</option>
                                <option value="31">1.1</option>
                                <option value="32">1.2</option>
                                <option value="33">1.3</option>
                                <option value="34">1.4</option>
                                <option value="35">1.5</option>
                                <option value="36">1.6</option>
                                <option value="37">1.7</option>
                                <option value="38">1.8</option>
                                <option value="39">1.9</option>
                                <option value="40">2.0</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">适合靠目押来游玩的玩家&nbsp;<br>直接调整判定的时机</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>影像的亮度</td>
                        <td class="t_r">
                            <select name="brightness" class="option_select">
                                <option value="0">暗</option>
                                <option value="1" selected>较暗</option>
                                <option value="2">普通</option>
                                <option value="3">明亮</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">调整游戏过程中背景影像的亮度</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>反馈特效</td>
                        <td class="t_r">
                            <select name="touchEffect" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">只在外圈显示</option>
                                <option value="2" selected>ON</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">改变触碰到屏幕时播放的特效</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
            </div>
            <div class="see_through_block m_b_10 p_10 f_14 t_l black">
                <div class="m_b_10 f_0"><img src="/img/title_option_disp.png" />
                </div>
                <table>
                    <tr>
                        <td>画面中央显示</td>
                        <td class="t_r">
                            <select name="dispCenter" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1" selected>COMBO</option>
                                <option value="2">达成率（+型）</option>
                                <option value="3">达成率（-型1）</option>
                                <option value="4">达成率（-型2）</option>
                                <option value="5">距S级</option>
                                <option value="6">距SS级</option>
                                <option value="7">距SSS级</option>
                                <option value="8">距最好成绩</option>
                                <option value="9">DX分数（+型）</option>
                                <option value="10">DX分数（-型）</option>
                                <option value="11">DX分数（♦型）</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">变更画面中央显示的信息</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>外框显示</td>
                        <td class="t_r">
                            <select name="outFrameType" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1" selected>达成率（+型）</option>
                                <option value="2">达成率（-型1）</option>
                                <option value="3">达成率（-型2）</option>
                                <option value="4">DX分数（+型）</option>
                                <option value="5">DX分数（-型）</option>
                                <option value="6">FAST/LATE</option>
                                <option value="7">判定细节</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">更改屏幕顶部的信息显示</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>判定显示</td>
                        <td class="t_r">
                            <select name="dispJudge" class="option_select">
                                <option value="0">类型1-A</option>
                                <option value="1">类型1-B</option>
                                <option value="2">类型1-C</option>
                                <option value="3">类型1-D</option>
                                <option value="4">类型1-E</option>
                                <option value="5" selected>类型2-A</option>
                                <option value="6">类型2-B</option>
                                <option value="7">类型2-C</option>
                                <option value="8">类型2-D</option>
                                <option value="9">类型2-E</option>
                                <option value="10">类型3-B</option>
                                <option value="11">类型3-C</option>
                                <option value="12">类型3-D</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">改变碰到音符时出现判定的显示设置</td>
                    </tr>
                </table>
                <div class="screw_block m_5">
                    <div class="m_3 m_t_5 f_l f_13">判定显示图像</div>
                    <img src="/img/btn_off.png" id="dispJudgeCtrl"
                        class="h_30 f_r pointer" />
                    <div class="clearfix"></div>
                    <div id="dispJudge" class="f_0">
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_0.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型1-A</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_1.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型1-B</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_2.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型1-C</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_3.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型1-D</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_4.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型1-E</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_5.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型2-A</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_6.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型2-B</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_7.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型2-C</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_8.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型2-D</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_9.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型2-E</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_10.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型3-B</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_11.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型3-C</td>
                                </tr>
                            </table>
                        </div>
                        <div class="option_detail_block">
                            <table class="collapse">
                                <tr>
                                    <td class="w_215"><img
                                            src="/img/option/disp_judge_12.png"
                                            class="w_215" /></td>
                                    <td class="t_c f_13 white f_b">类型3-D</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>拍击判定的显示位置</td>
                        <td class="t_r">
                            <select name="dispJudgePos" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">内侧○・・・・外侧</option>
                                <option value="2">内侧・○・・・外侧</option>
                                <option value="3">内侧・・○・・外侧</option>
                                <option value="4">内侧・・・○・外侧</option>
                                <option value="5" selected>内侧・・・・○外侧</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">调整TOUCH音符以外的评价判定所显示的位置</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>轻触判定的显示位置</td>
                        <td class="t_r">
                            <select name="dispJudgeTouchPos" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1" selected>内侧</option>
                                <option value="2">外侧</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">调整TOUCH音符的判定显示位置</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>显示同步率/对战</td>
                        <td class="t_r">
                            <select name="dispChain" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">达成率（和对手的差距）</option>
                                <option value="2" selected>同步率</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">当多人游戏时会显示</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>在上方画面显示达成率</td>
                        <td class="t_r">
                            <select name="submonitorAchieve" class="option_select">
                                <option value="0" selected>类型＋</option>
                                <option value="1">类型－</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设置游戏时上方画面中达成率的显示方法</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td class="f_13">评级，段位，阶级显示</td>
                        <td class="t_r">
                            <select name="dispRate" class="option_select">
                                <option value="0" selected>全部都显示</option>
                                <option value="1">显示评级和段位</option>
                                <option value="2">显示评级和阶级</option>
                                <option value="3">显示段位和阶级</option>
                                <option value="4">只显示评级</option>
                                <option value="5">只显示段位</option>
                                <option value="6">只显示阶级</option>
                                <option value="7">全部都不显示</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">可以设置是否显示评级，段位，阶级</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>招募邀请</td>
                        <td class="t_r">
                            <select name="submonitorAppeal" class="option_select">
                                <option value="0" selected>OFF</option>
                                <option value="1">不一起来玩吗！</option>
                                <option value="2">一起前进吗？</option>
                                <option value="3">想玩4曲小分队！！</option>
                                <option value="4">以完全同步为目标吧！</option>
                                <option value="5">全制霸者募集！</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">在上方画面中显示说明</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
            </div>
            <div class="see_through_block m_b_10 p_10 f_14 t_l black">
                <div class="m_b_10 f_0"><img
                        src="/img/title_option_design.png" /></div>
                <table>
                    <tr>
                        <td>拍击音符款式</td>
                        <td class="t_r">
                            <select name="tapDesign" class="option_select">
                                <option value="0" selected>简洁</option>
                                <option value="1">经典</option>
                                <option value="2">でらっくま</option>
                                <option value="3">条状</option>
                                <option value="4">タップくん</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">改变拍击音符的款式</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>长按保持音符款式</td>
                        <td class="t_r">
                            <select name="holdDesign" class="option_select">
                                <option value="0" selected>简洁</option>
                                <option value="1">经典</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">改变长按保持音符款式</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>滑动音符款式</td>
                        <td class="t_r">
                            <select name="slideDesign" class="option_select">
                                <option value="0" selected>简洁</option>
                                <option value="1">经典</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">改变滑动音符款式</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>滑动音符的颜色</td>
                        <td class="t_r">
                            <select name="starType" class="option_select">
                                <option value="0" selected>蓝色</option>
                                <option value="1">粉红色</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">☆的颜色变更（拖尾部分不会变）</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>判定线款式</td>
                        <td class="t_r">
                            <select name="outlineDesign" class="option_select">
                                <option value="0">无</option>
                                <option value="1">点</option>
                                <option value="2">简洁</option>
                                <option value="3">感应区</option>
                                <option value="4">maimai</option>
                                <option value="5">GreeN</option>
                                <option value="6">ORANGE</option>
                                <option value="7">PiNK</option>
                                <option value="8">MURASAKi</option>
                                <option value="9">MiLK</option>
                                <option value="10">FiNALE</option>
                                <option value="11">DX</option>
                                <option value="12">Splash</option>
                                <option value="13">UNiVERSE</option>
                                <option value="14" selected>FESTiVAL</option>
                                <option value="15">BUDDiES</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">改变判定线的款式</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
            </div>
            <div class="see_through_block m_b_10 p_10 f_14 t_l black">
                <div class="m_b_10 f_0"><img src="/img/title_option_sound.png" />
                </div>
                <table>
                    <tr>
                        <td>正解音音量</td>
                        <td class="t_r">
                            <select name="ansVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6" selected>6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定以正确时机拍打到音符时的音效音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>Tap成功音效</td>
                        <td class="t_r">
                            <select name="tapSe" class="option_select">
                                <option value="0" selected>默认</option>
                                <option value="1">拍手</option>
                                <option value="2">雨水</option>
                                <option value="3">木块</option>
                                <option value="4">铃铛</option>
                                <option value="5">低鼓&amp;镲片</option>
                                <option value="6">中二节奏</option>
                                <option value="7">音击</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">切换Tap成功时的音效</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>音符判定音</td>
                        <td class="t_r">
                            <select name="criticalSe" class="option_select">
                                <option value="0" selected>GOOD～PERFECT</option>
                                <option value="1">GOOD～CRITICAL PERFECT</option>
                                <option value="2">只有CRITICAL PERFECT</option>
                                <option value="3">PERFECT或以下时</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定播放音效的判定范围</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>音符判定音量</td>
                        <td class="t_r">
                            <select name="tapHoldVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定TAP･HOLD･TOUCH等音符的判定音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>BREAK判定音</td>
                        <td class="t_r">
                            <select name="breakSe" class="option_select">
                                <option value="0" selected>默认</option>
                                <option value="1">犬</option>
                                <option value="2">刀</option>
                                <option value="3">铃鼓</option>
                                <option value="4">歌舞伎</option>
                                <option value="5">空手道</option>
                                <option value="6">中二节奏</option>
                                <option value="7">音击</option>
                                <option value="8">でらっくま</option>
                                <option value="9">はっぴー</option>
                                <option value="10">MI・TSU・YO・SHI</option>
                                <option value="11">maimai Ver.1.0</option>
                                <option value="12">洗衣祭2014 第1天</option>
                                <option value="13">洗衣祭2014 第2天</option>
                                <option value="14">SEGA</option>
                                <option value="15">SEGA SATURN</option>
                                <option value="16">DARTSLIVE</option>
                                <option value="17">DIVA 音效A</option>
                                <option value="18">DIVA 音效B</option>
                                <option value="19">SONIC(RING)</option>
                                <option value="20">SONIC（EMERALD）</option>
                                <option value="21">PSO SOUND</option>
                                <option value="22">PUYOPUYO</option>
                                <option value="23">SAMBA DE AMIGO</option>
                                <option value="24">VIRTUAL-ON</option>
                                <option value="25">Virtua Fighter</option>
                                <option value="26">JACKY</option>
                                <option value="27">An×An</option>
                                <option value="28">Rub Rabbits</option>
                                <option value="29">CODE OF JOKER</option>
                                <option value="30">H×T 奖牌</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">切换BREAK判定的判定音效</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>BREAK音符音量</td>
                        <td class="t_r">
                            <select name="breakVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定BREAK音符的音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>EX判定音</td>
                        <td class="t_r">
                            <select name="exSe" class="option_select">
                                <option value="0" selected>默认</option>
                                <option value="1">电子音1</option>
                                <option value="2">电子音2</option>
                                <option value="3">歌舞伎</option>
                                <option value="4">猫</option>
                                <option value="5">中二节奏</option>
                                <option value="6">音击</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">切换EX判定音的音效</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>EX判定音量</td>
                        <td class="t_r">
                            <select name="exVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定EX音符的判定音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>SLIDE音</td>
                        <td class="t_r">
                            <select name="slideSe" class="option_select">
                                <option value="0" selected>默认</option>
                                <option value="1">犬</option>
                                <option value="2">刀</option>
                                <option value="3">铃鼓</option>
                                <option value="4">歌舞伎</option>
                                <option value="5">空手道</option>
                                <option value="6">中二节奏</option>
                                <option value="7">音击</option>
                                <option value="8">でらっくま</option>
                                <option value="9">はっぴー</option>
                                <option value="10">MI・TSU・YO・SHI</option>
                                <option value="11">maimai Ver.1.0</option>
                                <option value="12">洗衣祭2014 第1天</option>
                                <option value="13">洗衣祭2014 第2天</option>
                                <option value="14">SEGA</option>
                                <option value="15">SEGA SATURN</option>
                                <option value="16">DARTSLIVE</option>
                                <option value="17">DIVA 音效A</option>
                                <option value="18">DIVA 音效B</option>
                                <option value="19">SONIC(DASH)</option>
                                <option value="20">SONIC(GATE)</option>
                                <option value="21">PSO SOUND</option>
                                <option value="22">PUYOPUYO</option>
                                <option value="23">SAMBA DE AMIGO</option>
                                <option value="24">VIRTUAL-ON</option>
                                <option value="25">Virtua Fighter</option>
                                <option value="26">JACKY</option>
                                <option value="27">An×An</option>
                                <option value="28">Rub Rabbits</option>
                                <option value="29">CODE OF JOKER</option>
                                <option value="30">H×T 声呐</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">切换SLIDE时的音效</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>SLIDE时的音量</td>
                        <td class="t_r">
                            <select name="slideVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定SLIDE时的音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>BREAK SLIDE时的音量</td>
                        <td class="t_r">
                            <select name="breakSlideVolume" class="option_select">
                                <option value="0" selected>OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定BREAK SLIDE音符的音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>TOUCH音量</td>
                        <td class="t_r">
                            <select name="touchVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定TOUCH和TOUCH HOLD的音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>TOUCHEFFECT音量</td>
                        <td class="t_r">
                            <select name="touchHoldVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">设定TOUCH EFFECT的音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
                <table>
                    <tr>
                        <td>伤害音音量</td>
                        <td class="t_r">
                            <select name="damageSeVolume" class="option_select">
                                <option value="0">OFF</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="f_11 l_h_12 gray break">可以设定完美挑战曲，段位认定模式下受到伤害时触发的效果音音量</td>
                    </tr>
                </table>
                <img src="/img/line_01.png" class="w_415" />
            </div>
            <button type="submit" class="f_0"><img src="/img/btn_change_submit.png" class="w_120 m_15 m_t_5" /></button>
        </form>
    </div>
    <img src="/img/line_02.png" class="w_450" />
    <div class="t_c">
        <button type="button" onclick="history.back();" class="f_0"><img src="/img/btn_back.png"
                class="w_80 m_t_10" /></button>
    </div>
</template>


<style scoped></style>
