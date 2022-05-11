<template>
  <div
    class="m-2 flex max-w-sm basis-full flex-col justify-between rounded-xl bg-white shadow-lg dark:bg-graphite-light xl:max-w-lg"
  >
    <img class="w-fit self-center rounded-t-lg" :src="gif" alt="" />
    <div class="flex flex-col p-4">
      <div class="text-xl text-green-500 dark:text-purple-500"> 
        {{ titolo }}
      </div>
      <div class="text-sm dark:text-white">{{ descrizione }}</div>
    </div>
    <div class="flex flex-col xl:flex-row xl:justify-around">
      <h1 class="self-center dark:text-white xl:ml-3">Livello</h1>
      <div class="m-3 flex self-center">
        <div
          @click="clicked(1)"
          :class="{
            'bg-green-500 text-white dark:bg-purple-500': level === 1,
          }"
          class="flex h-10 w-10 items-center justify-center self-center rounded-l border-r-2 border-white bg-white shadow shadow-gray transition-all hover:cursor-pointer hover:shadow-md hover:shadow-gray dark:border-graphite-light"
        >
          1
        </div>
        <div
          @click="clicked(2)"
          :class="{
            'bg-green-500 text-white dark:bg-purple-500': level === 2,
          }"
          class="flex h-10 w-10 items-center justify-center self-center border-r-2 border-white bg-white shadow shadow-gray transition-all hover:cursor-pointer hover:shadow-md hover:shadow-gray dark:border-graphite-light"
        >
          2
        </div>
        <div
          @click="clicked(3)"
          :class="{
            'bg-green-500 text-white dark:bg-purple-500': level === 3,
          }"
          class="flex h-10 w-10 items-center justify-center self-center rounded-r bg-white shadow shadow-gray transition-all hover:cursor-pointer hover:shadow-md hover:shadow-gray"
        >
          3
        </div>
      </div>
      <button
        class="custom-button m-2 from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600 xl:self-end"
        @click="$emit('play-game', level)"
      >
        Gioca!
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
    required: true,
    type: String,
  },
  level: {
    //required: true,
    type: Number,
  },
});

const level = ref(1);

const emits = defineEmits(["play-game"]);

function clicked(num) {
  level.value = num;
}
</script>

<style lang="scss" scoped></style>
