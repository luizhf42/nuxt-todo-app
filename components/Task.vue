<template>
  <li>
    <span :class="taskProps.done && 'done'">{{ taskProps.text }}</span>
    <div class="actions">
      <img
        src="~/assets/images/undo.svg"
        alt="Undo the task"
        v-if="taskProps.done"
        role="button"
      />
      <img
        src="~/assets/images/check.svg"
        alt="Mark the task as done"
        v-else
        role="button"
      />
      <img
        src="~/assets/images/trash.svg"
        alt="Delete the task"
        role="button"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  taskProps: Object,
});
</script>

<style lang="postcss" scoped>
li {
  @apply w-full p-1 bg-slate-200 border-slate-300 border mb-2 flex items-center justify-between;
  height: 35px;
}

.done {
  @apply line-through;
  opacity: 0.8;
}

span {
  @apply text-lg;
}
.actions {
  @apply h-full flex items-center gap-3;
}

img {
  @apply aspect-square;
  height: 95%;
}
</style>