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
  </div>
  <div
    class="text-md relative m-4 mx-auto w-5/6 rounded-xl bg-white p-3 text-black shadow-xl dark:bg-graphite-light dark:text-white"
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
</template>

<script setup>
import { ref, watch } from "vue";
import texts from "../../assets/texts.json";

var string = [];

const position = ref(0);
const styles = ref({});

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

const props = defineProps({
  game: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: false,
  },
  string: {
    type: Array,
    required: true,
  },
  timerDirection: {
    type: String,
    required: false,
  },
  timerStartValue: {
    type: Number,
    required: false,
    default: 0,
  },
});

let started = ref(false);
let precision = ref(100);
let timer = ref("0:00");
let secs = props.timerStartValue;
let words = 0;

var timerStop = false;

var wrong = 0;

const wpm = ref(0);
let i = 0;
let n = getRndInteger(0, 9);
for (i = 0; i < texts[n].text.length; i++) {
  string.push(texts[n].text[i]);
}
let letterValues = ref(new Array(string.length).fill(0));

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
    emits("game-end", wpm.value, precision.value, timer.value);
  }
});

function timerStart() {
  if (!timerStop) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    if (seconds < 10) timer.value = "" + minutes + ":0" + seconds;
    else timer.value = "" + minutes + ":" + seconds;
    if (props.timerDirection === "up") secs++;
    else {
      secs--;
      if (secs < 0) {
        window.removeEventListener("keydown", keyHandler);
        emits("game-end", wpm.value, precision.value, timer.value);
        timerStop = true;
      }
    }
    setTimeout(timerStart, 1000);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const emits = defineEmits(["game-end"]);
</script>

<style lang="scss" scoped></style>
