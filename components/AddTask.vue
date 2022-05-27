<template>
  <form @submit.prevent="addTask">
    <input v-model="inputText" type="text" placeholder="Add your task" />
    <button>+</button>
  </form>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";

const emit = defineEmits(["add-todo", "add-done-task"]);
const todoStore = useTodoStore();
const inputText = ref("");

const addTask = () => {
  const text = inputText.value.trim();
  const isInTheDonePage = window.location.pathname == "/done" ? true : false;

  if (isInTheDonePage) emit("add-done-task", { text: text, done: true });
  else emit("add-todo", { text: text, done: false });

  // todoStore.addTaskInStore(text, isInTheDonePage);

  inputText.value = "";
};
</script>

<style lang="postcss" scoped>
form {
  @apply flex items-center justify-center w-full mb-6;
}
input {
  @apply p-1 bg-slate-200 border-slate-300 border;
  height: 35px;
  padding-right: 8px;
  width: clamp(250px, 80%, 400px);
}

input:focus {
  @apply outline-slate-500;
}

button {
  @apply bg-sky-800 aspect-square text-2xl text-white font-bold;
  height: 35px;
  margin-left: -5px;
}
</style>
