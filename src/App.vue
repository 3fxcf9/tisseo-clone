<script setup lang="ts">
import TapBar from './components/TapBar.vue'
</script>

<template>
  <main>
    <router-view></router-view>
  </main>

  <!-- Nav -->
  <TapBar />
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
