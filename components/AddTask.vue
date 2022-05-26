<template>
  <form @submit.prevent="todoStore.add(inputText.trim())">
    <input v-model="inputText" type="text" placeholder="Add your task" />
    <button>+</button>
  </form>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo.js";

const todoStore = useTodoStore();
const inputText = ref<string>("");
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
