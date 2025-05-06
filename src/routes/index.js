// src/routes/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../components/Home.vue'),
            },
            {
                path: 'error',
                name: 'Error',
                component: () => import('../components/error.vue'),
            },
            {
                path: 'wechatqrcode',
                name: 'wechatqrcode',
                component: () => import('../components/wechatqrcode.vue'),
            },
            {
                path: 'qrcode',
                name: 'qrcode',
                component: () => import('../components/qrcode.vue'),
            },
            {
                path: 'logout',
                name: 'logout',
                component: () => import('../components/logout.vue'),
            },
            {
                path: 'termsOfService',
                name: 'termsOfService',
                component: () => import('../components/termsOfService.vue'),
            },
            {
                path: 'sitePolicy',
                name: 'sitePolicy',
                component: () => import('../components/sitePolicy.vue'),
            },
            {
                // 匹配所有未定义的路径
                path: ':catchAll(.*)',
                name: 'NotFound',
                component: () => import('../components/404.vue'),
            }
        ],
    },
    {
        path: '/player',
        component: () => import('../layouts/player/Player.vue'),
        children: [
            {
                path: '',
                name: 'PlayerHome',
                component: () => import('../components/player/Home.vue'),
            },
            {
                path: 'userOption',
                name: 'PlayerUserOption',
                component: () => import('../components/player/userOption.vue'),
            },
            {
                path: 'userOption/updateUserOption',
                name: 'PlayerUpdateUserOption111',
                component: () => import('../components/player/updateUserOption.vue'),
            },
            {
                path: 'data',
                name: 'PlayerData',
                component: () => import('../components/player/playerData.vue'),
            },
            {
                path: 'data/search',
                name: 'PlayerDataSearch',
                component: () => import('../components/player/playerData.vue'),
            },
            {
                path: 'data/ticket',
                name: 'PlayerTicket',
                component: () => import('../components/player/ticket.vue'),
            },
        ],
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const pageTitle = i18n.t(to.name); // 假设翻译 key 与路由名一致
//     document.title = `${pageTitle} - ${i18n.t('text.description')}`;
//     next();
// });

export default router
