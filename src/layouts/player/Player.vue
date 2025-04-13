<template>
  <PlayerBar />
  <div class="wrapper main_wrapper t_c">
    <PlayerHeader />
    <PlayerView />
    <PlayerFooter />
  </div>
  <!-- <PlayerScript /> -->
</template>

<script setup lang="ts">
import PlayerBar from './AppBar.vue'
import PlayerHeader from './Header.vue'
import PlayerView from './View.vue'
import PlayerFooter from './Footer.vue'
// import PlayerScript from './EndScript.vue'
</script>
