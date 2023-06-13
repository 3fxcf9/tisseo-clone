<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <section>
    <h2 class="section__title">
      <slot name="icon"></slot>
      {{ title }}
    </h2>
    <slot name="content"></slot>
  </section>
</template>

<style>
section {
  margin-top: 2rem;
}

h2 {
  display: flex;
  gap: 0.5rem;
}

svg {
  width: 1.6rem;
}
</style>
