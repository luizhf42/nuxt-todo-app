<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-todo="addTodo" /></template>
    <template #heading><span>Tasks to-do</span></template>
    <Task v-for="todo in todos" :key="todo.text" :taskProps="todo" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoStore } from "~~/store/todo";

const store = useTodoStore();
const { tasks } = storeToRefs(store);
const todos = store.getTasksTodo;

const addTodo = ({ text, done }) => {
  store.addTaskInStore(text, done);
  todos.push({ text: text, done: done });
  console.log(todos)
};
</script>