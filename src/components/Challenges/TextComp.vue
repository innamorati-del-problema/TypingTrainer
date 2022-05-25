<template>
  <div class="m-2 flex justify-evenly text-3xl text-graphite dark:text-white">
    <div class="">
      <h4>{{ timer }}</h4>
    </div>
    <div v-if="game != 'timerrush'" class="">
      <h4>WPM: {{ wpm }}</h4>
    </div>
    <div class="">
      <h4>Precisione: {{ precision }}%</h4>
    </div>
    <div v-if="game == 'timerrush'" class="">
      <h4>Parole completate: {{ words }}</h4>
    </div>
  </div>
  <div
    class="text-md relative m-4 mx-auto w-[60%] rounded-xl bg-white p-3 text-black shadow-xl dark:bg-graphite-light dark:text-white"
    @click="start"
    @keyup.space="start"
    @keyup.enter="start"
  >
    <div
      v-if="!started"
      class="absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center"
    >
      <h1 class="mb-2 text-4xl text-black dark:text-white">
        Clicca per iniziare
      </h1>
    </div>
    <div
      v-if="started"
      :style="{
        left: refs[position].offsetLeft
          ? refs[position].offsetLeft - 2 + 'px'
          : '10px',
        top:
          refs[position].offsetTop > 0
            ? refs[position].offsetTop + 'px'
            : '12px',
      }"
      class="absolute h-6 w-[3px] rounded-md bg-green-500 transition-all duration-200 ease-out dark:bg-purple-500"
    ></div>
    <span :class="{ 'blur-[7px]': !started }" v-for="(letter, index) in string">
      <span
        class="text-xl"
        :class="{
          'rounded-sm text-[#ff0000]  dark:text-[#ff00007d] ':
            letterValues[index] == 1,
          'rounded-sm text-[#42b542]  dark:text-[#42b5427b] ':
            letterValues[index] == 3,
          'rounded-sm text-[#e1e100]  dark:text-[#fdfd187d] ':
            letterValues[index] == 2,
          'text-white dark:text-graphite-light':
            game == 'deadend' && position + 4 - level < index,
        }"
      >
        <span :ref="(el) => refs.push(el)">{{ letter }}</span>
      </span>
    </span>
  </div>
  <Transition name="modal">
    <div v-if="timerStop">
      <CompleteModal
        v-if="game != 'timerrush'"
        class="bg-gray-dark bg-opacity-50 dark:text-white"
        :wpm="wpm"
        :precision="precision"
        :timer="timer"
        @close-modal="router.go()"
      />
      <CompleteModal
        v-else
        class="bg-gray-dark bg-opacity-50 dark:text-white"
        :words="words"
        :precision="precision"
        @close-modal="router.go()"
      />
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { ref as fbref, set, push, getDatabase } from "firebase/database";
import CompleteModal from "../CompleteModal.vue";
import { useUserStore } from "../../stores/userStore";

const router = useRouter();
const db = getDatabase();
const position = ref(0);
const userStore = useUserStore();

let specialCharacters = [
  "Tab",
  "CapsLock",
  "Shift",
  "Control",
  "Alt",
  "Enter",
  "Esc",
  "AltGraph",
];

var refs = [];

const startListener = window.addEventListener("keydown", keyStart);

function keyStart(ev) {
  if (ev.key == " " || ev.key == "Enter") start();
}

const props = defineProps({
  //nome del gioco, sono importanti solo deadend e timerrush per ora
  //perchè dettano alcune proprietà di visualizzazione
  game: {
    type: String,
    required: true,
  },
  //il livello del gioco che si gioca, potrebbe non essere necessario
  //perchè passato nell'url. Tocca vedere
  level: {
    type: String,
    required: false,
  },
  //specificare la funzione era trobbi sbatti inutile, meglio passare
  //l'array gia processato nei componenti DeadEnd, Practice, etc...
  string: {
    type: Array,
    required: true,
  },
  //direzione del timer ('up' o 'down'), principalmente usato per il
  //timerrush, detta se incrementa o aumenta il timer
  timerDirection: {
    type: String,
    required: false,
  },
  //punto di partenza del timer, di default 0 ma viene usato per impostare
  //la durata del timerrush
  timerStartValue: {
    type: Number,
    required: false,
    default: 0,
  },
});

let started = ref(false);
let precision = ref(100);
let timer = ref("0:00");
let words = ref(0);
let secs = props.timerStartValue;
let string = props.string;
var timerStop = ref(false);

var wrong = 0;

const wpm = ref(0);

let letterValues = ref(new Array(string.length).fill(0));

function start() {
  if (!started.value) {
    started.value = true;
    timerStart();
    window.removeEventListener("keydown", startListener);
    window.addEventListener("keydown", keyHandler);
  }
}

function keyHandler(ev) {
  if (specialCharacters.indexOf(ev.key) != -1) {
    return;
  } else if (ev.key == "Backspace") {
    if (props.string[position.value - 1] == " ") {
    } else if (position.value <= 0) {
      position.value = 0;
    } else {
      if (letterValues.value[position.value - 1] == 1) {
        wrong--;
      }
      position.value--;
    }
    letterValues.value[position.value] = -1;
  } else if (props.string[position.value] == " ") {
    words.value++;
    wpm.value = Math.floor((words.value * 60) / secs);
    if (ev.key == " ") letterValues.value[position.value] = 3;
    else {
      letterValues.value[position.value] = 1;
      wrong++;
    }
    position.value++;
  } else if (ev.key != props.string[position.value]) {
    letterValues.value[position.value] = 1;
    position.value++;
    wrong++;
  } else {
    if (letterValues.value[position.value] != 0) {
      letterValues.value[position.value] = 2;
    } else {
      letterValues.value[position.value] = 3;
    }

    position.value++;
  }
  precision.value = Math.floor(
    ((position.value - wrong) / position.value) * 100
  );
}

watch(position, () => {
  timerStop.value = position.value >= props.string.length;
  if (timerStop.value) {
    window.removeEventListener("keydown", keyHandler);
    
    if (props.game === "timerrush")
      sendDataTimerRush(words.value, precision.value);
    else sendData(wpm.value, precision.value, timer.value);
  }
});

function timerStart() {
  if (!timerStop.value) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    if (seconds < 10) timer.value = "" + minutes + ":0" + seconds;
    else timer.value = "" + minutes + ":" + seconds;
    if (props.timerDirection === "up") secs++;
    else {
      secs--;
      if (secs < 0) {
        window.removeEventListener("keydown", keyHandler);
        
        timerStop.value = true;
      }
    }
    setTimeout(timerStart, 1000);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sendDataTimerRush(words, precision) {
  const scoresListRef = fbref(db, "/" + props.game + "/" + props.level);
  const newScoreRef = push(scoresListRef);
  const date = new Date();
  set(newScoreRef, {
    username: userStore.username,
    words_raw: words,
    precision: precision,
    words: Math.floor(words * (precision / 100)),
    day: date.getDate(),
    month: 1 + date.getMonth(),
    year: date.getFullYear(),
  });
}

function sendData(wpm, precision, timer) {
  const scoresListRef = fbref(db, "/" + props.game + "/" + props.level);
  const newScoreRef = push(scoresListRef);
  const date = new Date();
  const wpm_raw = wpm;
  const wpm_good = Math.floor(wpm_raw * (precision / 100));
  set(newScoreRef, {
    username: userStore.username,
    wpm_raw: wpm_raw,
    wpm: wpm_good,
    precision: precision,
    timer: timer,
    day: date.getDate(),
    month: 1 + date.getMonth(),
    year: date.getFullYear(),
  });
}

const emits = defineEmits(["game-end"]);
</script>

<style lang="scss" scoped></style>
