<template>
  <div class="relative flex items-start justify-between md:justify-center">
    <h2
      class="self-center text-center text-lg text-green-500 dark:text-purple-500"
    >
      Statistiche
    </h2>
    <select
      v-model="selected"
      class="bg-slate absolute top-2 right-2 rounded-lg text-left shadow dark:bg-graphite-light dark:text-white"
      name="statistiche"
    >
      <option selected value="practice">Pratica</option>
      <option value="timerrush">Prova a Tempo</option>
      <option value="deadend">Dead End</option>
      <option value="freewords">Parole Libertà</option>
      <option value="js">Codice</option>
    </select>
    <select
      v-model="level"
      v-if="selected != 'practice'"
      class="bg-slate absolute top-10 right-2 rounded-lg text-right shadow dark:bg-graphite-light dark:text-white"
      name="statistiche"
    >
      <option selected value="1">Livello 1</option>
      <option value="2">Livello 2</option>
      <option value="3">Livello 3</option>
    </select>
  </div>

  <div class="mt-4 flex flex-wrap justify-around">
    <LineChart v-if="data" :chart-data="chartData" :css-classes="cssClasses" />
    <LineChart
      v-else
      :chart-data="{
        labels: [],
        datasets: [
          {
            label: 'WPM',
            data: [],
          },
        ],
      }"
      :css-classes="cssClasses"
    />

    <div class="self-center">
      <h1 class="text-xl dark:text-white">
        Media
        <span class="text-green-500 dark:text-purple-500">WPM</span>:
        {{ averageWpm }} WPM
      </h1>
      <h1 class="text-xl dark:text-white">
        Media
        <span class="text-green-500 dark:text-purple-500">Precisione</span>:
        {{ averagePrecision }}%
      </h1>
    </div>
  </div>
</template>

<script setup>
import LineChart from "./Charts/LineChart.vue";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
  limitToFirst,
} from "firebase/database";
import { ref as vueref, watch, watchEffect } from "vue";
import { useUserStore } from "../stores/userStore";
const db = getDatabase();
var chartData = vueref({});
const userStore = useUserStore();
const selected = vueref("practice");
const level = vueref("1");
const data = vueref(false);

let averageWpm = vueref(0);
let averagePrecision = vueref(0);

watchEffect(async () => {
  let labels = [];
  let practiceData = [];
  let finalData = [];
  averageWpm.value = 0;
  averagePrecision.value = 0;

  let dbUrl;
  if (selected.value === "practice") {
    dbUrl = "/practice/";
  } else {
    dbUrl = "/" + selected.value + "/" + level.value;
  }

  data.value = false;
  let practiceDataQuery = query(
    ref(db, dbUrl),
    orderByChild("username"),
    equalTo(userStore.username),
    limitToFirst(40)
  );

  get(practiceDataQuery).then((snapshot) => {
    snapshot.forEach(function (scoreSnapshot) {
      const vals = scoreSnapshot.val();
      practiceData.push(vals.wpm);
      labels.push(scoreSnapshot.val().day + "/" + scoreSnapshot.val().month);
      averagePrecision.value += vals.precision;
      averageWpm.value += vals.wpm;
    });
    finalData.push(practiceData[0]);
    let i;
    for (i = 1; i < practiceData.length; i++) {
      finalData.push((finalData[i - 1] * i + practiceData[i]) / (i + 1));
    }
    chartData.value = {
      labels: labels,
      datasets: [
        {
          label: "WPM",
          data: finalData,
        },
      ],
    };
    averagePrecision.value = Math.round(averagePrecision.value / labels.length);
    averageWpm.value = Math.round(averageWpm.value / labels.length);
    data.value = true;
  });
});

let cssClasses = "m-6 w-[230px] h-[230px] sm:h-[384px] sm:w-[384px]";
</script>

<style lang="scss" scoped></style>
