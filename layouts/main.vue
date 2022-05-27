<template>
  <div id="wrapper">
    <Header />
    <main>
      <slot name="addTaskForm"/>
      <h2>
        <slot name="heading" />
      </h2>
      <ul>
        <slot />
      </ul>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
main {
  @apply py-6 px-2 flex flex-col items-center justify-start;
  height: calc(100vh - 7rem);
}

h2 {
  @apply text-2xl font-bold mb-4;
}

ul {
  @apply max-w-lg w-full;
}

@media screen and (min-width: 460px) {
  main {
    height: calc(100vh - 4rem);
  }
}
</style>