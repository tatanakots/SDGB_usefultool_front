<template>
	<footer class="f_0">
		<div class="footer_marquee">
			<div class="footer w_480">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 50"
					preserveAspectRatio="none" style="height:50px">
					<path
						d="M0,0 v25 q5,5 10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 v-25 Z"
						fill="#7cbc29"></path>
				</svg>
				<div class="m_15 m_t_0 f_13">
					<div class="m_5"><a href="/termsOfService/" class="white" rel="noopener">使用条款</a></div>
					<div class="m_5"><a href="/sitePolicy/" class="white" rel="noopener">使用须知</a></div>
					<div class="m_5"><a href="https://www.segafave.co.jp/en/privacy/" target="_blank" class="white"
							rel="noopener">隐私政策</a></div>
				</div>
				<img src="/img/line_02.png" class="w_430 m_b_10" />
				<div class="f_l m_15 m_l_30 p_l_10">
					<a href="http://sega.jp" target="_blank" rel="noopener"><img src="/img/logo_sega.png" /></a>
					<div class="f_15 p_5">© SEGA</div>
				</div>
				<div class="m_15">
					<img src="/img/logo_wahlap.png" />
					<div class="f_11 p_3">© 华立科技</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()
export default {
	data() {
		return {
			currentYear: new Date().getFullYear()
		};
	}
};
</script>