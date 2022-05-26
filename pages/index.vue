<template>
  <NuxtLayout name="main">
    <template #heading><span>Tasks to-do</span></template>
    <Task v-for="todo in todos" :key="todo.text" :taskProps="todo" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoStore } from "~~/store/todo.js";

const store = useTodoStore();
const todoStore = storeToRefs(store);
const todos = todoStore.tasks.filter((task) => !task.done);
</script>