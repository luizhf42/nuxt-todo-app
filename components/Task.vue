<template>
  <li>{{ text }}</li>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<style lang="postcss" scoped>
li {
  @apply w-full p-1 bg-slate-200 border-slate-300 border mb-2;
}
</style>