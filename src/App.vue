<script setup lang="ts">
import TouchBar from './components/TouchBar.vue'
</script>

<template>
  <main>
    <router-view></router-view>
  </main>

  <!-- Nav -->
  <TouchBar />
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
