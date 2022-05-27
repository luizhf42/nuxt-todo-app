<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-todo="addTodo" /></template>
    <template #heading><span>Tasks to-do</span></template>
    <Task v-for="todo in todos" :key="todo.text" :taskProps="todo" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";

const store = useTodoStore();
const todos = ref(store.getTasksTodo);

const addTodo = ({ text, done }) => {
  store.addTaskInStore(text, done);
  todos.value = store.getTasksTodo;
};
</script>