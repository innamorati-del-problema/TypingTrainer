<template>

    <textarea style="height: 0;"  v-model="text" name="" id="" cols="30" rows="10"></textarea>
    <br>
    <Keyboard />
    <br>
    <h1>{{ text }}</h1>
</template>

<script setup>
import Keyboard from "./Keyboard.vue";
import {ref} from "vue";
let text = ref("");

// window.addEventListener('keydown', (ev) => {
//     if (ev.key == "Backspace") { text.value = text.value.substring(0,text.value.length-1)}
//     else {
//         text.value = text.value + ev.key;
//     }
// });

</script>

<style lang="scss" scoped>

</style>