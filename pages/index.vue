<template>
  <NuxtLayout name="main">
    <template #heading><span>Tasks to-do</span></template>
    <Task v-for="task in tasks" :key="task.text" :taskProps="task" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const tasks = [
  { text: "Make coffee" },
  { text: "Do the dishes" },
  { text: "Code" },
];
</script>