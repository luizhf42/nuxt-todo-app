<template>
  <NuxtLayout name="main">
    <template #heading>Tasks to-do</template>

    <Task v-for="task in tasks" :key="task.text" :text="task.text" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const tasks = [{ text: "Make coffee" }, { text: "Do the dishes" }, { text: "Code" }];
</script>