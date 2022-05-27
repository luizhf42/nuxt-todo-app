<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-done-task="addDoneTask" /></template>
    <template #heading><span>Done tasks</span></template>
    <Task v-for="task in doneTasks" :key="task.text" :taskProps="task" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoStore } from "~~/store/todo";

const store = useTodoStore();
const { tasks } = storeToRefs(store);
const doneTasks = store.getDoneTasks;

const addDoneTask = ({ text, done }) => {
  doneTasks.push({ text: text, done: done });
  store.addTaskInStore(text, done);
  console.log(doneTasks);
};
</script>

