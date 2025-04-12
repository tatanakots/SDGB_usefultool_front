import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'
import routes from './routes'

const i18n = createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: 'zh-CN', // set fallback locale
    messages: {
        'zh': zhCN,
        'zh-CN': zhCN,
        'zh-SG': zhCN,
    }
});

const mtfim = createApp(App)

mtfim.use(routes)
mtfim.use(i18n)
mtfim.mount('#app')
