<template>
  <Navigation />
  <div class="scores m-2 flex justify-evenly text-3xl text-graphite dark:text-white">
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
  
  <div class="text-md m-4 mx-auto w-5/6 rounded-xl bg-white p-3 text-center text-black shadow-x dark:bg-black text-white" @click="start"> 
    <div v-if="!started" class="">
      <h1 class="absolute left-0 z-50 mt-2 rght-0 mb-2 w-fit w-full text-4xl text-black dark:text-white">
        Clicca per iniziare
      </h1>
    </div> 
    <span :class="{ blur: !started }" v-for="(letter, index) in string">
      <span
        :class="{
          'rounded-sm bg-[#ff00004d] text-[#858585] transition-colors dark:bg-[#ff00007d] text-[#f5f5f5]':
            letterValues[index] == 1,
          'rounded-sm bg-[#42b5424b] text-[#858585] transition-colors dark:bg-[#42b5427b] text-[#f5f5f5]':
            letterValues[index] == 3,
          'rounded-sm bg-[#fdfd184d] text-[#858585] transition-colors dark:bg-[#fdfd187d] text-[#f5f5f5]':
            letterValues[index] == 2,
          text: true,
          'blur-sm':
            position - 1 != index &&
            position != index &&
            position + 2 != index &&
            position + 1 != index,
          'passed corrected': letterValues[index] == 2,
          nextChar: index == position && started,
        }"
      >
        {{ letter }}
      </span>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import texts from "../../assets/texts.json";
import Navigation from "../Navigation.vue";

var string = [];
let position = ref(0);
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

let started = ref(false);
let precision = ref("100%");
let timer = ref("0:00");
let secs = 0;
let words = 0;

var timerStop = false;

let wrong = 0;

const wpm = ref(0);
let i = 0;
let n = getRndInteger(1, 5);
for (i = 0; i < texts[n].text.length; i++) {
  let s = texts[n].text[i] == " " ? " " : texts[n].text[i];
  string.push(s);
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
  } else if (position.value >= string.length) {
    position.value = string.length - 1;
    timerStop = true;
    window.removeEventListener("keydown", keyHandler);
  } else if (ev.key == "Backspace") {
    if (string[position.value - 1] == " ") {
    } else if (position.value <= 0) {
      position.value = 0;
    } else {
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
      wrong--;
    } else {
      letterValues.value[position.value] = 3;
    }

    position.value++;
  }
  precision.value = Math.floor((1 - wrong / position.value) * 100) + "%";
}

function timerStart() {
  if (!timerStop) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;

    if (seconds < 10) setTimeout(timerStart, 1000);
  }
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

</style>
