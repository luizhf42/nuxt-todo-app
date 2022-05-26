<template>
  <NuxtLayout name="main">
    <template #heading><span>Done tasks</span></template>
    <Task v-for="task in doneTasks" :key="task.text" :taskProps="task" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo.js";

const todoStore = useTodoStore();
const tasks = todoStore.tasks;
const doneTasks = tasks.filter((task) => task.done);
</script>

