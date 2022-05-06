<script setup>
const props = defineProps(["wpm", "timer", "precision"]);
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center">
    <div
      class="mx-auto flex h-1/2 w-5/6 flex-col items-center rounded-xl bg-white p-6 dark:bg-graphite"
    >
      <h1 class="text-2xl">Complimenti!</h1>
      <div class="mt-4 flex grow flex-col justify-evenly text-center">
        <p class="text-3xl text-green-500 dark:text-purple-500">WPM</p>
        <p>{{ wpm }}</p>
        <p class="text-3xl text-green-500 dark:text-purple-500">Tempo</p>
        <p>{{ timer }}</p>
        <p class="text-3xl text-green-500 dark:text-purple-500">Precisione</p>
        <p>{{ precision }}%</p>
      </div>
      <button
        @click="$emit('close-modal')"
        class="custom-button-big primary mt-2"
      >
        Chiudi
      </button>
    </div>
  </div>
</template>

<style scoped></style>
