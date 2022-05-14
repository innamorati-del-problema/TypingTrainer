<template>
  <div class="flex h-screen flex-col">
    <Navigation />
    <div class="my-20 mx-auto max-w-[1000px]">
      <TextComp
        game="timerrush"
        :level="level"
        :string="string"
        timerDirection="down"
        :timerStartValue="30"
      />
    </div>
    <div class="text-center">
      <Keyboard lang="it" class="text-center" />
    </div>
  </div>
</template>

<script setup>
import words from "../../assets/words.json";
import Navigation from "../Navigation.vue";
import TextComp from "./TextComp.vue";
import Keyboard from "../Keyboard/Keyboard.vue";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomLevel(level) {
  var probs = [[1], [1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 1, 2, 2, 3, 3]];
  var idx = Math.floor(Math.random() * probs[level - 1].length);
  return probs[level - 1][idx].toString();
}

let string = [];
const props = defineProps(["level"]);
let i = 0;
for (i = 0; i < 51; i++) {
  let rLevel = randomLevel(Number.parseInt(props.level));
  string = string.concat(
    words[rLevel][getRndInteger(0, words[rLevel].length)].split("")
  );
  string.push(" ");
}
string.pop();
</script>

<style lang="scss" scoped></style>
