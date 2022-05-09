<template>
  <div>
    <TextComp
      game="timerrush"
      :level="1"
      :string="string"
      timerDirection="down"
      :timerStartValue="5"
    />
  </div>
  <div>
    <TextComp game="deadend" :level="1" :string="string" timerDirection="up" />
  </div>
  <div>
    <TextComp game="practice" :string="string" timerDirection="up" />
  </div>
</template>

<script setup>
import TextComp from "./Challenges/TextComp.vue";
import texts from "../assets/texts.json";

let string = [];
let i = 0;
let n = getRndInteger(0, 9);
for (i = 0; i < texts[n].text.length; i++) {
  string.push(texts[n].text[i]);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>

<style lang="scss" scoped></style>
