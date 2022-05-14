<template>
  <div class="h-screenszd">
    <Navigation />
    <div class="mx-auto mt-10 max-w-[1000px]">
      <TextComp
        game="freewords"
        :level="level"
        :string="string"
        timerDirection="up"
        :timerStartValue="0"
      />
    </div>
    <div class="text-center">
      <Keyboard lang="it" class="text-center" />
    </div>
  </div>
</template>

<script setup>
import letters from "../../assets/letters.json";
import Navigation from "../Navigation.vue";
import TextComp from "./TextComp.vue";
import Keyboard from "../Keyboard/Keyboard.vue";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomLevel(level) {
  var probs = [[1], [1, 1, 1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1, 2, 3]];
  var idx = Math.floor(Math.random() * probs[level - 1].length);
  return probs[level - 1][idx].toString();
}

let string = [];
const props = defineProps(["level"]);
let i = 0;
for (i = 0; i < 30; i++) {
  let rLevel = randomLevel(Number.parseInt(props.level));
  let j;
  let wrdLength = getRndInteger(2, 8);
  for (j = 0; j < wrdLength; j++) {
    string = string.concat(
      letters[rLevel][getRndInteger(0, letters[rLevel].length)]
    );
  }
  string.push(" ");
}
string.pop();
</script>

<style lang="scss" scoped></style>
