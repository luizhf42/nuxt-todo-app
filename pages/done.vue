<template>
  <NuxtLayout name="main">
    <template #heading><span>Done tasks</span></template>
    <Task v-for="task in doneTasks" :key="task.text" :taskProps="task" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const doneTasks = [
  { text: "Make coffee" },
  { text: "Do the dishes" },
  { text: "Code" },
];
</script>
