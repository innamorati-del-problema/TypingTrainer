<template>
  <div
    class="m-2 flex max-w-xl basis-full flex-col justify-between rounded-xl bg-white p-4 shadow-lg dark:bg-graphite-light"
  >
    <div class="flex flex-col">
      <div class="text-xl text-green-500 dark:text-purple-500">
        {{ titolo }}
      </div>
      <div class="text-sm dark:text-white">{{ descrizione }}</div>
    </div>
    <div class="flex flex-col xl:flex-row xl:justify-between">
      <img class="m-2 max-w-xs self-center rounded-lg" :src="gif" alt="" />
      <button
        class="custom-button m-2 from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600 xl:self-end"
        @click="$emit('play-game')"
      >
        Gioca!
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  titolo: {
    required: true,
    type: String,
  },
  descrizione: {
    required: true,
    type: String,
  },
  gif: {
    require: true,
    type: String,
  },
});

const emits = defineEmits(["play-game"]);
</script>

<style lang="scss" scoped></style>
