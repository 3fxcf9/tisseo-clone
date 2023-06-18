<script setup lang="ts">
import TapBar from './components/TapBar.vue';
import KeyAskModal from './components/KeyAskModal.vue';
</script>

<template>
  <main>
    <router-view></router-view>
  </main>

  <KeyAskModal />

  <!-- Nav -->
  <TapBar />
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
