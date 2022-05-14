<template>
  <div class="m-0 flex h-screen w-[99%] flex-col justify-start p-0">
    <Navigation />

    <div class="full m-4 flex h-[calc(100vh-100px)] flex-wrap gap-2">
      <div
        class="hide-scroll flex h-full w-full grow basis-96 flex-col rounded-xl bg-white p-4 shadow-lg dark:bg-graphite-light"
      >
        <div class="mb-2 flex w-full justify-end">
          <select
            class="bg-slate rounded-lg text-right shadow dark:bg-graphite-light dark:text-white"
            name="selectTimerrush"
            v-model="timerrushLevel"
            id=""
          >
            <option value="1">Livello 1</option>
            <option value="2">Livello 2</option>
            <option value="3">Livello 3</option>
          </select>
        </div>
        <h1 class="dark:text-white">Classifica Prova a Tempo</h1>
        <div class="flex justify-between text-green-500 dark:text-purple-500">
          <h1 class="m-1 shrink grow basis-8">Username</h1>
          <h1 class="m-1 shrink grow basis-8">Parole</h1>
          <h1 class="m-1 shrink grow basis-8">Precisione</h1>
        </div>
        <div class="overflow-scroll">
          <div
            v-if="timerrush.length != 0"
            class="flex w-full flex-col"
            v-for="score in gamesScores.timerrush[timerrushLevel]"
          >
            <div class="flex justify-between dark:text-white">
              <h1 class="m-1 shrink grow basis-8">{{ score.username }}</h1>
              <h1 class="m-1 shrink grow basis-8">{{ score.words }}</h1>
              <h1 class="m-1 shrink grow basis-8">{{ score.precision }}%</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hide-scroll flex h-full w-full grow basis-96 flex-col rounded-xl bg-white p-4 shadow-lg dark:bg-graphite-light"
      >
        <div class="mb-2 flex w-full justify-end">
          <select
            class="bg-slate rounded-lg text-right shadow dark:bg-graphite-light dark:text-white"
            name="selectTimerrush"
            v-model="freewordsLevel"
            id=""
          >
            <option value="1">Livello 1</option>
            <option value="2">Livello 2</option>
            <option value="3">Livello 3</option>
          </select>
        </div>
        <h1 class="dark:text-white">Classifica Parole in Libertà</h1>
        <div class="flex justify-between text-green-500 dark:text-purple-500">
          <h1 class="m-1 shrink grow basis-8">Username</h1>
          <h1 class="m-1 shrink grow basis-8">WPM</h1>
          <h1 class="m-1 shrink grow basis-8">Precisione</h1>
        </div>
        <div class="overflow-scroll">
          <div
            v-if="freewords.length != 0"
            class="flex w-full flex-col"
            v-for="score in gamesScores.freewords[freewordsLevel]"
          >
            <div class="flex justify-between dark:text-white">
              <h1 class="m-1 shrink grow basis-8">{{ score.username }}</h1>
              <h1 class="m-1 shrink grow basis-8">{{ score.wpm }}</h1>
              <h1 class="m-1 shrink grow basis-8">{{ score.precision }}%</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="hide-scroll flex h-full w-full grow basis-96 flex-col rounded-xl bg-white p-4 shadow-lg dark:bg-graphite-light"
      >
        <div class="mb-2 flex w-full justify-end">
          <select
            class="bg-slate rounded-lg text-right shadow dark:bg-graphite-light dark:text-white"
            name="selectTimerrush"
            v-model="deadendLevel"
            id=""
          >
            <option value="1">Livello 1</option>
            <option value="2">Livello 2</option>
            <option value="3">Livello 3</option>
          </select>
        </div>
        <h1 class="dark:text-white">Classifica Vicolo Cieco</h1>
        <div class="flex justify-between text-green-500 dark:text-purple-500">
          <h1 class="m-1 shrink grow basis-8">Username</h1>
          <h1 class="m-1 shrink grow basis-8">WPM</h1>
          <h1 class="m-1 shrink grow basis-8">Precisione</h1>
        </div>
        <div class="overflow-scroll">
          <div
            v-if="deadend.length != 0"
            class="flex w-full flex-col"
            v-for="score in gamesScores.deadend[deadendLevel]"
          >
            <div class="flex justify-between dark:text-white">
              <h1 class="m-1 shrink grow basis-8">{{ score.username }}</h1>
              <h1 class="m-1 shrink grow basis-8">{{ score.wpm }}</h1>
              <h1 class="m-1 shrink grow basis-8">{{ score.precision }}%</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hide-scroll hidden h-full w-full grow basis-96 flex-col rounded-xl sm:flex xl:hidden"
      ></div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./Navigation.vue";
import {
  ref as fbref,
  onValue,
  getDatabase,
  orderByChild,
  limitToFirst,
  query,
  off,
  get,
} from "@firebase/database";
import { ref } from "vue";

const db = getDatabase();
const freewords = ref([[], [], []]);
const timerrush = ref([[], [], []]);
const deadend = ref([[], [], []]);

const gamesInfo = [
  {
    game: "timerrush",
    order: "words",
    limit: 50,
    levels: 3,
  },
  {
    game: "deadend",
    order: "wpm",
    limit: 50,
    levels: 3,
  },
  {
    game: "freewords",
    order: "wpm",
    limit: 50,
    levels: 3,
  },
];

const gamesScores = ref({
  timerrush: {
    1: [],
    2: [],
    3: [],
  },
  deadend: {
    1: [],
    2: [],
    3: [],
  },
  freewords: {
    1: [],
    2: [],
    3: [],
  },
});

const freewordsLevel = ref(1);
const deadendLevel = ref(1);
const timerrushLevel = ref(1);

gamesInfo.forEach(function (game) {
  let level = 0;
  for (level = 1; level < 4; level++) {
    let dbQuery = query(
      fbref(db, "/" + game.game + "/" + level),
      orderByChild(game.order),
      limitToFirst(game.limit)
    );
    fetchData(dbQuery, level, game);
  }
});

function fetchData(query, level, game) {
  get(query).then((snapshot) => {
    snapshot.forEach(function (scoreSnapshot) {
      gamesScores.value[game.game][level].push(scoreSnapshot.val());
    });
    gamesScores.value[game.game][level].reverse();
  });
}
</script>

<style lang="scss" scoped>
.hide-scroll {
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
</style>
