<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { API_BASE_URL } from '../../config.js'  // 根据项目路径修改

const { t } = useI18n()
// 校验是否为8位数字的正则表达式
const isValidUserId = (value) => /^[0-9]{8}$/.test(value)

// 1. 解析 URL 中的 diff 参数，转成整数
const urlParams = new URLSearchParams(window.location.search)
const raw = parseInt(urlParams.get('diff'), 10)

// 2. 定义允许的 diff 值列表
const validDiffs = [0, 1, 2, 3, 4, 99]

// 3. 如果 raw 在 validDiffs 里，就用 raw，否则用 99
const diff = ref(validDiffs.includes(raw) ? raw : 99)

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

// 控制更新中遮罩层显示
const isUpdating = ref(false)

// 更新玩家数据
const updateData = async () => {
    const uid = getCookie('userId')
    if (!uid || !isValidUserId(uid)) {
        alert('登录失败，请重试。')
        return
    }
    isUpdating.value = true
    try {
        const url = `${API_BASE_URL}/api/v1/player/updatedata`
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: uid })
        })
        const result = await response.json()
        alert(result.msg)
    } catch (error) {
        console.error('请求失败:', error)
        alert('请求出错，请检查网络设置后重试。')
    } finally {
        isUpdating.value = false
    }
}

// 页面加载后检查 Cookie
onMounted(() => {
    const uid = getCookie('userId')
    if (!uid || !isValidUserId(uid)) {
        location.href = '/error/?code=100001&msg=' + encodeURIComponent('登录失败，请重试。')
    }
})
</script>

<template>
    <div class="m_t_5 m_b_10 t_l f_0">
        <a href="/player/data/" class="p_r d_ib">
            <img src="/img/menu_sub_playerdata_playerdata.png?ver=1.30" class="w_96" />
            <img src="/img/icon_on.png" class="submenu_selected" /> </a>
        <a href="/player/data/ticket/" class="p_r d_ib">
            <img src="/img/menu_sub_playerdata_ticket.png?ver=1.30" class="w_96" />
        </a>
        <a href="/player/data/stampCard/" class="p_r d_ib">
            <img src="/img/menu_sub_playerdata_stamp.png?ver=1.30" class="w_96" />
        </a>
        <img src="/img/menu_sub_playerdata.png" class="w_96" />
        <img src="/img/menu_sub_playerdata.png" class="w_96" />
    </div>

    <!-- 玩家数据更新区 -->
    <img src="/img/title_playerdata.png" class="title m_10" />
    <div class="town_block m_l_10 m_r_10 m_b_10 p_10 p_b_0 f_0 t_c p_s" id="nav">
        <div class="p_5 f_14">
            由于使用的是游戏API，获取玩家详细数据需要登录，
            请确保现在拥有有效的二维码后点击下方按钮进行更新。
        </div>
        <table class="collapse f_0">
            <tr>
                <td class="col4"></td>
                <td class="col4"></td>
                <td class="col4"></td>
                <td class="col4">
                    <button type="button" @click="updateData" :disabled="isUpdating">
                        <img src="/img/btn_change_submit.png" class="h_50 m_t_10" />
                    </button>
                </td>
            </tr>
        </table>
    </div>

    <!-- 更新中遮罩层 -->
    <div v-if="isUpdating" class="overlay">
        <div class="overlay-content">
            <p><img src="/img/chara_03.png" class="w_84 m_15" /></p>
            <p>正在更新数据中...</p>
            </br>
            <p>需要一定时间，请耐心等待，请不要关闭网页，未正确退出可能会进入15分钟小黑屋。</p>
        </div>
    </div>

    <div class="see_through_block m_15 m_t_0 p_10 p_r t_l f_0">
        <div class="basic_block p_10 f_0">
            <img loading="lazy" src="/img/gameasset/icon/UI_Icon_000000.png" class="w_112 f_l" />
            <div class="p_l_10 f_l">
                <div class="trophy_block trophy_Bronze p_3 t_c f_0">
                    <div class="trophy_inner_block f_13">
                        <span>111</span>
                    </div>
                </div>
                <div class="m_b_5">
                    <div class="name_block f_l f_16">ｍａｉｍａｉ</div>
                    <div class="f_r t_r f_0">
                        <div class="p_r p_3">
                            <img src="/img/rating_base_rainbow.png?ver=1.30" class="h_30 f_r" />
                            <div class="rating_block">0</div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <img src="/img/line_01.png" class="user_data_block_line" />
                <div class="clearfix"></div>
                <img src="/img/course/course_rank_03GUKh4La2.png" class="h_35 f_l" />
                <img src="/img/class/class_rank_s_00ZqZmdpb8.png" class="p_l_10 h_35 f_l">
                <div class="p_l_10 f_l f_14"><img src="/img/icon_star.png" class="h_30 m_3 v_m" />×114514</div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
        <div class="m_5 m_b_5 t_r f_12">当前版本的游玩次数：114<br>舞萌DX的累计游玩次数：514</div>

        <div>
            <form action="/player/data/search/" method="get" accept-charset="utf-8">
                <div class="m_t_10 m_b_10 f_0">
                    <!-- “全部” -->
                    <button type="submit" name="diff" value="99" class="p_r f_0">
                        <img src="/img/btn_music_all.png" class="w_71" />
                        <img v-if="diff === 99" src="/img/icon_on.png" class="diffbtn_selected" />
                    </button>

                    <!-- 基础 -->
                    <button type="submit" name="diff" value="0" class="p_r f_0">
                        <img src="/img/btn_music_basic.png" class="w_71" />
                        <img v-if="diff === 0" src="/img/icon_on.png" class="diffbtn_selected" />
                    </button>

                    <!-- 进阶 -->
                    <button type="submit" name="diff" value="1" class="p_r f_0">
                        <img src="/img/btn_music_advanced.png" class="w_71" />
                        <img v-if="diff === 1" src="/img/icon_on.png" class="diffbtn_selected" />
                    </button>

                    <!-- 专家 -->
                    <button type="submit" name="diff" value="2" class="p_r f_0">
                        <img src="/img/btn_music_expert.png" class="w_71" />
                        <img v-if="diff === 2" src="/img/icon_on.png" class="diffbtn_selected" />
                    </button>

                    <!-- 大师 -->
                    <button type="submit" name="diff" value="3" class="p_r f_0">
                        <img src="/img/btn_music_master.png" class="w_71" />
                        <img v-if="diff === 3" src="/img/icon_on.png" class="diffbtn_selected" />
                    </button>

                    <!-- 变奏 -->
                    <button type="submit" name="diff" value="4" class="p_r f_0">
                        <img src="/img/btn_music_remaster.png" class="w_71" />
                        <img v-if="diff === 4" src="/img/icon_on.png" class="diffbtn_selected" />
                    </button>
                </div>
            </form>
        </div>

        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 p_l_0 f_l"><img src="/img/music_icon_sssp.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_app.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 p_l_0 f_l"><img src="/img/music_icon_sss.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_ap.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 p_l_0 f_l"><img src="/img/music_icon_ssp.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_fcp.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 p_l_0 f_l"><img src="/img/music_icon_ss.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_fc.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 p_l_0 f_l"><img src="/img/music_icon_sp.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_fdxp.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 p_l_0 f_l"><img src="/img/music_icon_s.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_fdx.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block p_5 f_l"><img src="/img/music_icon_clear.png" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_fsp.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_dxstar_5.png" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_fs.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_dxstar_4.png" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_sync.png?ver=1.30" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_dxstar_3.png" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_dxstar_2.png" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <div class="musiccount_block t_r f_l f_0">
            <div class="musiccount_img_block t_c f_l"><img src="/img/music_icon_dxstar_1.png" /></div>
            <div class="musiccount_counter_block f_13">0/4,603</div>
        </div>
        <div class="clearfix"></div>
        <img src="/img/chara_03.png" class="playerdata_back" />
    </div>

    <img src="/img/title_class.png" class="title m_10" />
    <div class="town_block m_15 m_t_0 p_5 f_0">
        <div class="p_t_10 p_r_10">
            <div class="d_ib t_c v_t w_180">
                <img src="/img/class/icon_class_current.png" class="w_120 p_b_10 m_r_10" />
                <img src="/img/class/class_rank_l_00ZqZmdpb8.png" class="w_160 p_15 m_r_10" />
            </div>
            <div class="d_ib t_c w_230 p_r">
                <div class="class_point_box d_ib p_10 p_r w_230">
                    <img src="/img/class/icon_class_jewel_off.png" class="h_25" />
                    <div class="p_t_10">
                        <img class="p_r w_180" src="/img/class/icon_class_geuge_base.png" />
                        <img class="class_geuge_meter p_a w_180" src="/img/class/icon_class_geuge_meter.png"
                            style="clip: rect(0, 0px, 62px, 0);" />
                        <img class="class_geuge_frame p_a w_180" src="/img/class/icon_class_geuge_frame.png">
                    </div>
                </div>
                <img src="/img/class/icon_class_cp_count.png" class="p_r p_t_10 w_215" />
                <div class="class_point_txt p_a t_c red f_20 w_230"><span class="f_29 f_b">0</span><span class="f_20">
                        CP / 10 </span><span class="f_13">CP</span></div>
            </div>
        </div>
        <img src="/img/class/note_rankup.png" class="p_10 h_50" />
    </div>
</template>


<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
}
</style>
