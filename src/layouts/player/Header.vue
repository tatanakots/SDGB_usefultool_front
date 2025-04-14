<template>
    <header class="f_0">
        <div class="f_0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 10" preserveAspectRatio="none" style="height:10px">
                <path
                    d="M0,10 v-5 q5,5 10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 v5 Z"
                    fill="#7ed3ff"></path>
            </svg>
            <div class="menu">
                <!-- 首页：严格匹配 -->
                <a href="/player/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_home.png', '/player/')" class="w_112" />
                </a>
                <!-- data 菜单项：对当前路径进行规范化匹配 -->
                <a href="/player/data/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_playerdata.png', '/player/data/')" class="w_112" />
                </a>
                <a href="/player/friend/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_friend.png', '/player/friend/')" class="w_112" />
                </a>
                <a href="/player/photo/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_photo.png', '/player/photo/')" class="w_112" />
                </a>
            </div>
            <div class="menu">
                <a href="/player/record/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_record.png', '/player/record/')" class="w_112" />
                </a>
                <a href="/player/map/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_map.png', '/player/map/')" class="w_112" />
                </a>
                <a href="/player/collection/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_collection.png', '/player/collection/')" class="w_112" />
                </a>
                <a href="/player/ranking/" class="d_ib col4 p_4">
                    <img :src="getImg('/img/menu_ranking.png', '/player/ranking/')" class="w_112" />
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 10" preserveAspectRatio="none" style="height:10px">
                <path
                    d="M0,0 v5 q5,5 10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 v-5 Z"
                    fill="#7ed3ff"></path>
            </svg>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        /**
         * 标准化路径：移除除根路径之外的尾部斜杠
         * 例如 '/player/' 和 '/player' 统一为 '/player'
         * @param {string} path 路径字符串
         * @returns {string} 返回标准化后的路径
         */
        normalizePath(path) {
            if (path !== '/' && path.endsWith('/')) {
                return path.slice(0, -1);
            }
            return path;
        },
        /**
         * 根据当前路由判断图片是否需要加上 _on 后缀
         * @param {string} baseImg 图片的基础路径，例如 '/img/menu_home.png'
         * @param {string} routePath 菜单项对应的路由, 建议写成带斜杠结尾形式，如 '/player/data/'
         * @returns {string} 返回最终的图片路径
         */
        getImg(baseImg, routePath) {
            const currentPath = this.normalizePath(this.$route.path);
            const targetPath = this.normalizePath(routePath);

            // 首页处理：严格匹配 currentPath === '/player'
            if (targetPath === '/player') {
                return currentPath === targetPath ? baseImg.replace('.png', '_on.png') : baseImg;
            } else {
                // 对于其它菜单项：
                // 如果当前路由等于目标路由，或者以 "目标路由 + '/'" 开头时都认为匹配
                if (
                    currentPath === targetPath ||
                    currentPath.indexOf(targetPath + '/') === 0
                ) {
                    return baseImg.replace('.png', '_on.png');
                }
                return baseImg;
            }
        }
    }
}
</script>