<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-todo="addTodo" /></template>
    <template #heading><span>Tasks to-do</span></template>
    <Task
      v-for="todo in todos || []"
      :key="todo.text"
      :taskProps="todo"
      @update-todos="updateTodos"
    />
    <p v-if="showMessage" class="no-tasks">No tasks todo!</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";

onBeforeMount(() => changeShowMessage());

const store = useTodoStore();
const todos = ref(store.getTasksTodo);

const addTodo = ({ text, done }) => {
  store.addTaskInStore(text, done);
  updateTodos();
};

const showMessage = ref(false);

const changeShowMessage = () =>
  (showMessage.value = todos.value.length ? false : true);

const updateTodos = () => {
  todos.value = store.getTasksTodo;
  changeShowMessage();
  store.updateTasksInLocalStorage();
};
</script>