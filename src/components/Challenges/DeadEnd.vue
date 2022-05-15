<template>
  <div class="h-screenszd">
    <Navigation />
    <div class="mx-auto mt-10 max-w-[1000px]">
      <TextComp
        game="deadend"
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
import texts from "../../assets/texts.json";
import Navigation from "../Navigation.vue";
import TextComp from "./TextComp.vue";
import Keyboard from "../Keyboard/Keyboard.vue";

import { ref } from "vue";
let string = ref([]);
defineProps(["level"]);
let n = getRndInteger(0, 9);
let i;
for (i = 0; i < texts[n].text.length; i++) {
  string.value.push(texts[n].text[i]);
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>

<style lang="scss" scoped></style>
