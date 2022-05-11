<template>
  <div class="m-2 flex justify-evenly text-3xl text-graphite dark:text-white">
    <div class="">
      <h4>{{ timer }}</h4>
    </div>
    <div class="">
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
import { useRouter } from "vue-router";

var string = [];
const router = useRouter();

const position = ref(0);

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

const props = defineProps(["key"]);

var refs = [];
console.log(refs);

let started = ref(false);
let precision = ref(100);
let timer = ref("0:00");
let secs = 0;
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
});

function timerStart() {
  if (!timerStop) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;

    if (seconds < 10) timer.value = "" + minutes + ":0" + seconds;
    else timer.value = "" + minutes + ":" + seconds;

    secs++;

    setTimeout(timerStart, 1000);
  } else {
    window.removeEventListener("keydown", keyHandler);
    emits("practice-end", wpm.value, precision.value, timer.value);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const emits = defineEmits(["practice-end"]);
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
</style>
