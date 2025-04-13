<template>
  <default-bar />
  <div class="wrapper main_wrapper t_c">
    <default-view />

    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import DefaultFooter from './Footer.vue'
</script>
