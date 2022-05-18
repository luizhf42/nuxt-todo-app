<template>
  <li>{{ taskProps.text }}</li>
</template>

<script setup lang="ts">
const props = defineProps({
  taskProps: Object,
});
</script>

<style lang="postcss" scoped>
li {
  @apply w-full p-1 bg-slate-200 border-slate-300 border mb-2;
}
</style>