<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-done-task="addDoneTask" /></template>
    <template #heading><span>Done tasks</span></template>
    <Task
      v-for="(task, index) in doneTasks"
      :key="task.text"
      :id="index"
      :taskProps="task"
      @update-done-tasks="updateDoneTasks"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";

const store = useTodoStore();
const doneTasks = ref(store.getDoneTasks);

const addDoneTask = ({ text, done }) => {
  store.addTaskInStore(text, done);
  updateDoneTasks();
};

const updateDoneTasks = () => (doneTasks.value = store.getDoneTasks);
</script>

