<template>
  <Navigation />
  <div
    class="scores m-2 flex justify-evenly text-3xl text-graphite dark:text-white"
  >
    <div class="score timer">
      <h4>{{ timer }}</h4>
    </div>
    <div class="score wpm">
      <h4>WPM: {{ wpm }}</h4>
    </div>
    <div class="score errPercent">
      <h4>Precisione: {{ precision }}</h4>
    </div>
  </div>

  <div
    class="text-md shadow-x relative m-4 mx-auto w-5/6 rounded-xl bg-white p-3 text-black dark:bg-graphite-light dark:text-white"
    @click="start"
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
      v-if="started && !finished"
      :style="{
        left: refs[position].offsetLeft
          ? refs[position].offsetLeft + 'px'
          : '12px',
        top:
          refs[position].offsetTop > 0
            ? refs[position].offsetTop + 'px'
            : '12px',
      }"
      class="absolute h-6 w-[3px] rounded-md bg-green-500 transition-all duration-200 ease-out"
    ></div>
    <span
      class="text-xl"
      :class="{
        'blur-[7px]': !started,
        active: index == position,
        'rounded-sm text-[#ff0000]  dark:text-[#ff00007d] ':
          letterValues[index] == 1,
        'rounded-sm text-[#42b542]  dark:text-[#42b5427b] ':
          letterValues[index] == 3,
        'rounded-sm text-[#e1e100]  dark:text-[#fdfd187d] ':
          letterValues[index] == 2,
      }"
      v-for="(letter, index) in string"
    >
      <span :ref="(el) => refs.push(el)">{{ letter }}</span>
    </span>
  </div>

  <Transition name="modal">
    <div v-if="finished">
      <CompleteModal
        class="bg-gray-dark bg-opacity-50 dark:text-white"
        :wpm="wpm"
        :precision="precision"
        :timer="timer"
        @close-modal="router.go()"
      />
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, ref as vueref, watch } from "vue";
import { useRouter } from "vue-router";
import wordsArray from "../../assets/words.json";
import "../Navigation.vue";
import Navigation from "../Navigation.vue";
import CompleteModal from "../CompleteModal.vue";
import { getDatabase, ref, onValue, set, push } from "firebase/database";

const db = getDatabase();
const router = useRouter();
var string = [];
let position = vueref(0);
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

const props = defineProps(["level"]);
const finished = vueref(false);

let started = vueref(false);
let precision = vueref(100);
let timer = vueref("0:00");
let secs = 0;
let words = 0;

var timerStop = false;

var wrong = 0;

const wpm = vueref(0);
let i = 0;
let n = getRndInteger(0, 9);
console.log(wordsArray);
for (i = 0; i < 50; i++) {
  string =
    props.level == 1
      ? string.concat(
          wordsArray["1"][getRndInteger(0, wordsArray["1"])].split("")
        )
      : string.concat(
          wordsArray["2"][getRndInteger(0, wordsArray["2"])].split("")
        );
  string.push(" ");
}
string.pop();
let letterValues = vueref(new Array(string.length).fill(0));

function start() {
  if (!started.value) {
    started.value = true;
    timerStart();
    window.addEventListener("keydown", keyHandler);
  }
}

function keyHandler(ev) {
  if (specialCharacters.indexOf(ev.key) != -1) {
    return;
  } else if (ev.key == "Backspace") {
    if (string[position.value - 1] == " ") {
    } else if (position.value <= 0) {
      position.value = 0;
    } else {
      if (letterValues.value[position.value - 1] == 1) {
        wrong--;
      }
      position.value--;
    }
    letterValues.value[position.value] = -1;
  } else if (string[position.value] == " ") {
    words++;
    wpm.value = Math.floor((words * 60) / secs);
    if (ev.key == " ") letterValues.value[position.value] = 3;
    else {
      letterValues.value[position.value] = 1;
      wrong++;
    }
    position.value++;
  } else if (ev.key != string[position.value]) {
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
  timerStop = position.value >= string.length;
  if (timerStop) {
    window.removeEventListener("keydown", keyHandler);
    finished.value = true;
    sendData(wpm.value, precision.value, timer.value);
    wpm.value = Math.round(50 / (secs / 60));
  }
});

function timerStart() {
  if (!timerStop) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;

    if (seconds < 10) timer.value = "" + minutes + ":0" + seconds;
    else timer.value = "" + minutes + ":" + seconds;

    secs++;

    setTimeout(timerStart, 1000);
  }
}

function sendData(wpm, precision, timer) {
  const scoresListRef = ref(db, "/timerrush/" + props.level);
  const newScoreRef = push(scoresListRef);
  const date = new Date();
  const wpm_raw = wpm;
  const wpm_good = Math.floor(wpm_raw * (precision / 100));
  set(newScoreRef, {
    username: localStorage.username,
    wpm_raw: wpm_raw,
    wpm: wpm_good,
    precision: precision,
    timer: timer,
    day: date.getDate(),
    month: 1 + date.getMonth(),
    year: 1 + date.getFullYear(),
  });
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>

<style lang="scss" scoped>
@keyframes nextChar {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  50% {
    background-color: rgba(129, 129, 129, 0.581);
  }

  100% {
    background-color: rgba(0, 0, 0, 0);
  }
}

.nextChar {
  animation: nextChar 1200ms cubic-bezier(0, 1.03, 0, 0.99) infinite;
  border-radius: 2px;
}

.blur {
  filter: blur(3px);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
