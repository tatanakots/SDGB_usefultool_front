<script setup>
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { API_BASE_URL } from '../../config.js'  // 根据项目路径修改

const { t } = useI18n()

// 校验是否为8位纯数字的正则表达式
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

// 响应式数据
const playerName = ref('ｍａｉｍａｉ')
const playerRating = ref('0')
const totalAwake = ref('0')
const iconId = ref(0)
const userId = ref(0)
const lastRomVersion = ref('0.0.0')
const lastDataVersion = ref('0.0.0')
const lastLoginDate = ref('1970-01-01 00:00:00')
const lastPlayDate = ref('1970-01-01 00:00:00')
const banState = ref(0)
const isLogin = ref('未登录')

// 根据 playerRating 计算应显示的评分框图片
const ratingImage = computed(() => {
    const rating = parseInt(playerRating.value) || 0
    if (rating >= 15000) {
        return '/img/rating_base_rainbow.png'
    } else if (rating >= 14500) {
        return '/img/rating_base_platinum.png'
    } else if (rating >= 14000) {
        return '/img/rating_base_gold.png'
    } else if (rating >= 13000) {
        return '/img/rating_base_silver.png'
    } else if (rating >= 12000) {
        return '/img/rating_base_bronze.png'
    } else if (rating >= 10000) {
        return '/img/rating_base_purple.png'
    } else if (rating >= 7000) {
        return '/img/rating_base_red.png'
    } else if (rating >= 4000) {
        return '/img/rating_base_orange.png'
    } else if (rating >= 2000) {
        return '/img/rating_base_green.png'
    } else if (rating >= 1000) {
        return '/img/rating_base_blue.png'
    } else {
        return '/img/rating_base_normal.png'
    }
})

// 根据 iconId 计算新的 Icon 图片 URL
const iconSource = computed(() => {
    // 将 iconId 转为6位数字字符串，不足6位补零
    const padded = iconId.value.toString().padStart(6, '0')
    return `/img/gameasset/icon/UI_Icon_${padded}.png`
})

// 跳转错误页面的函数
const redirectToError = (code, msg) => {
    location.href = `/error/?code=${code}&msg=${encodeURIComponent(msg)}`
}

// 请求 /api/v1/player/preview 接口，并提取返回数据中的信息
// 使用 POST 方法，并以 Cookie 中的 userId 作为请求参数
const fetchPreviewData = async (uid) => {
    try {
        const url = `${API_BASE_URL}/api/v1/player/preview`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: uid })
        })
        const data = await response.json()
        // 如果接口返回的 stat 不为 1，重定向到错误页面（错误代码 100001）
        if (data.stat !== 1) {
            redirectToError(100001, '登录失败，请重试。')
            return
        }
        // 更新响应式变量
        playerName.value = data.data.userName
        playerRating.value = data.data.playerRating
        totalAwake.value = data.data.totalAwake
        iconId.value = data.data.iconId
        lastDataVersion.value = data.data.lastDataVersion
        lastRomVersion.value = data.data.lastRomVersion
        lastLoginDate.value = data.data.lastLoginDate
        lastPlayDate.value = data.data.lastPlayDate
        banState.value = data.data.banState
        if (data.data.isLogin === true) {
            isLogin.value = '已登录'
        } else {
            isLogin.value = '未登录'
        }
    } catch (error) {
        console.error('请求出错:', error)
        redirectToError(100001, '登录失败，请重试。')
    }
}

// 页面加载后先检查 Cookie，再请求预览数据
onMounted(() => {
    const uid = getCookie('userId')
    if (!uid || !isValidUserId(uid)) {
        redirectToError(100001, '登录失败，请重试。')
        return
    }
    userId.value = uid
    fetchPreviewData(uid)
})
</script>

<template>
    <div class="m_t_5 m_b_10 t_l f_0">
        <a href="/player/" class="p_r d_ib">
            <img src="/img/menu_sub_home_home.png" class="w_120" />
            <img src="/img/icon_on.png" class="submenu_selected" />
        </a>
        <img src="/img/menu_sub_home.png" class="w_120" />
        <img src="/img/menu_sub_home.png" class="w_120" />
        <img src="/img/menu_sub_home.png" class="w_120" />
    </div>

    <div class="see_through_block m_15 m_t_10 p_10 p_r t_l f_0">
        <div class="basic_block p_10 f_0">
            <!-- 使用新的iconSource替换原有Icon -->
            <img loading="lazy" :src="iconSource" class="w_112 f_l" />
            <div class="p_l_10 f_l">
                <div class="trophy_block trophy_Rainbow p_3 t_c f_0">
                    <div class="trophy_inner_block f_13">
                        <span>怂别用，用别怂</span>
                    </div>
                </div>
                <div class="m_b_5">
                    <div class="name_block f_l f_16">{{ playerName }}</div>
                    <div class="f_r t_r f_0">
                        <div class="p_r p_3">
                            <!-- 根据 playerRating 显示不同评分框 -->
                            <img :src="ratingImage" class="h_30 f_r" />
                            <div class="rating_block">{{ playerRating }}</div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <img src="/img/line_01.png" class="user_data_block_line" />
                <div class="clearfix"></div>
                <div class="p_l_10 f_l f_14">玩家ID：{{ userId }}</div>
                <div class="p_l_10 f_l f_14">
                    <img src="/img/icon_star.png" class="h_30 m_3 v_m" />×{{ totalAwake }}
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <img loading="lazy" src="/img/Chara/48b0cead09dbc370.png" class="w_120 m_t_10 f_r" />
        <div class="comment_block break f_l f_12">
            <div class="comment_inner_block">{{ playerName }}，你好呀！欢迎使用舞萌DX科技专页~</div>
            <div class="comment_inner_block">你目前的登录状态是：{{ isLogin }}</div>
            <div class="comment_inner_block">你上一次游玩的大版本是：{{ lastRomVersion }}</div>
            <div class="comment_inner_block">你目前的游戏存档版本是：{{ lastDataVersion }}</div>
            <div class="comment_inner_block">你上一次登录的时间是：{{ lastLoginDate }}</div>
            <div class="comment_inner_block">你上一次游玩的时间是：{{ lastPlayDate }}</div>
            <div class="comment_inner_block">你账号的封禁状态是：BS-{{ banState }}</div>
        </div>
        <div class="clearfix"></div>
    </div>
    <a href="/player/userOption/updateUserOption/">
        <img src="/img/btn_home_option.png" />
    </a>
    <div class="container p_10">
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/">
                    <img src="/img/menu_home.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/" class="d_b m_b_5">主页</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/data/">
                    <img src="/img/menu_playerdata.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/data/" class="d_b m_b_5">玩家数据</a>
                <a href="/player/data/ticket/" class="d_b m_b_5">功能票</a>
                <a href="/player/data/stampCard/" class="d_b">集章卡</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/friend/">
                    <img src="/img/menu_friend.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/friend/" class="d_b m_b_5">好友</a>
                <a href="/player/friend/search/" class="d_b m_b_5">搜索</a>
                <a href="/player/friend/matching/" class="d_b m_b_5">联机</a>
                <a href="/player/friend/invite/" class="d_b m_b_5">申请中</a>
                <a href="/player/friend/accept/" class="d_b">接受中</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/photo/">
                    <img src="/img/menu_photo.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/photo/album/" class="d_b">相册</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/record/">
                    <img src="/img/menu_record.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/record/" class="d_b m_b_5">游戏记录</a>
                <a href="/player/record/musicGenre/" class="d_b m_b_5">乐曲成绩</a>
                <a href="/player/record/course/" class="d_b">段位认定</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/map/">
                    <img src="/img/menu_map.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/map/" class="d_b m_b_5">区域</a>
                <a href="/player/map/eventMap/" class="d_b m_b_5">活动区域</a>
                <a href="/player/map/eventMapLog/" class="d_b m_b_5">已结束活动区域</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
        <div class="w_430 m_15 m_t_0 m_b_0 f_14">
            <div class="w_112 f_l f_0">
                <a href="/player/collection/">
                    <img src="/img/menu_collection.png" class="w_112" />
                </a>
            </div>
            <div class="p_10 f_l t_l v_t">
                <a href="/player/collection/" class="d_b m_b_5">头像</a>
                <a href="/player/collection/nameplate/" class="d_b m_b_5">姓名框</a>
                <a href="/player/collection/frame/" class="d_b m_b_5">背景</a>
                <a href="/player/collection/trophy/" class="d_b m_b_5">称号</a>
                <a href="/player/collection/character/" class="d_b m_b_5">旅行伙伴</a>
                <a href="/player/collection/partner/" class="d_b">搭档</a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img src="/img/line_01.png" class="w_430" />
    </div>
    <div class="m_15 p_10">
        <button type="button" onclick="location.href='/logout/';" class="f_0">
            <img src="/img/btn_home_logout.png" class="w_80 pointer" />
        </button>
    </div>
</template>

<style scoped></style>
