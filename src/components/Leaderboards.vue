<template>
  <div class="m-0 flex h-screen w-[99%] flex-col justify-start p-0">
    <Navigation />

    <div class="m-4 flex h-[calc(100vh-100px)] full flex-wrap gap-2">
      <div
        class="flex h-full hide-scroll overflow-scroll w-full grow basis-96 flex-col rounded-xl bg-white p-8 shadow-lg dark:bg-graphite-light"
      >
        <h1 class="mb-5 self-center dark:text-white">Classifica Pratica</h1>
        <div class="flex justify-between text-green-500 dark:text-purple-500">
          <h1 class="m-1 shrink grow basis-8">Username</h1>
          <h1 class="m-1 shrink grow basis-8">WPM</h1>
          <h1 class="m-1 shrink grow basis-8">RawWPM</h1>
          <h1 class="m-1 shrink grow basis-8">Precisione</h1>
        </div>
        <div
          v-if="allTime.length != 0"
          class="flex w-full flex-col"
          v-for="score in allTime"
        >
          <div class="flex justify-between dark:text-white">
            <h1 class="m-1 shrink grow basis-8">{{ score.username }}</h1>
            <h1 class="m-1 shrink grow basis-8">{{ score.wpm }}</h1>
            <h1 class="m-1 shrink grow basis-8">{{ score.wpm_raw }}</h1>
            <h1 class="m-1 shrink grow basis-8">{{ score.precision }}%</h1>
          </div>
        </div>
      </div>
      <div
        class="flex h-full w-full grow basis-96 flex-col rounded-xl bg-white p-4 shadow-lg dark:bg-graphite-light"
      >
        <h1 class="self-center dark:text-white">Classifica globale</h1>
      </div>
      <div
        class="flex h-full w-full grow basis-96 flex-col rounded-xl bg-white p-4 shadow-lg dark:bg-graphite-light"
      >
        <h1 class="self-center dark:text-white">Classifica globale</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./Navigation.vue";
import {
  ref,
  onValue,
  getDatabase,
  query,
  orderByChild,
  limitToFirst,
} from "@firebase/database";
import { ref as vueref } from "vue";

const db = getDatabase();
let allTime = vueref([]);

const topTenWpm = query(
  ref(db, "/practice/"),
  orderByChild("wpm"),
  limitToFirst(20)
);
onValue(topTenWpm, (snapshot) => {
  snapshot.forEach(function (scoreSnapshot) {
    allTime.value.push(scoreSnapshot.val());
  });
  allTime.value.reverse();
});
</script>

<style lang="scss" scoped>

.hide-scroll {
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
</style>
