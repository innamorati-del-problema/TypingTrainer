<template>
        <div class="practice-text">
                <span v-for="(letter, index) in string">
                        <span :class="{ wrong: wrongs[index], right: rights[index], text: true }">{{ letter }}</span>
                </span>
        </div>

        <br>
        <KeyboardUS />
        <br>
        <button @click="start">START!</button>
</template>

<script setup>
import { ref } from 'vue';
import KeyboardUS from "./Keyboard/KeyboardUS.vue";

let string = ['L', 'o', 'r', 'e', 'm', ' ', 'I', 'p', 's', 'u', 'm', ' ', 'i', 's', ' ', 's', 'i', 'm', 'p', 'l', 'y', ' ', 'd', 'u', 'm', 'm', 'y', ' ', 't', 'e', 'x', 't', ' ', 'o', 'f', ' ', 't', 'h', 'e', ' ', 'p', 'r', 'i', 'n', 't', 'i', 'n', 'g', ' ', 'a', 'n', 'd', ' ', 't', 'y', 'p', 'e', 's', 'e', 't', 't', 'i', 'n', 'g', ' ', 'i', 'n', 'd', 'u', 's', 't', 'r', 'y', '.', ' ', 'L', 'o', 'r', 'e', 'm', ' ', 'I', 'p', 's', 'u', 'm', ' ', 'h', 'a', 's', ' ', 'b', 'e', 'e', 'n', ' ', 't', 'h', 'e', ' ', 'i', 'n', 'd', 'u', 's', 't', 'r', 'y', "'", 's', ' ', 's', 't', 'a', 'n', 'd', 'a', 'r', 'd', ' ', 'd', 'u', 'm', 'm', 'y', ' ', 't', 'e', 'x', 't', ' ', 'e', 'v', 'e', 'r', ' ', 's', 'i', 'n', 'c', 'e', ' ', 't', 'h', 'e', ' ', '1', '5', '0', '0', 's', ',', ' ', 'w', 'h', 'e', 'n', ' ', 'a', 'n', ' ', 'u', 'n', 'k', 'n', 'o', 'w', 'n', ' ', 'p', 'r', 'i', 'n', 't', 'e', 'r', ' ', 't', 'o', 'o', 'k', ' ', 'a', ' ', 'g', 'a', 'l', 'l', 'e', 'y', ' ', 'o', 'f', ' ', 't', 'y', 'p', 'e', ' ', 'a', 'n', 'd', ' ', 's', 'c', 'r', 'a', 'm', 'b', 'l', 'e', 'd', ' ', 'i', 't', ' ', 't', 'o', ' ', 'm', 'a', 'k', 'e', ' ', 'a', ' ', 't', 'y', 'p', 'e', ' ', 's', 'p', 'e', 'c', 'i', 'm', 'e', 'n', ' ', 'b', 'o', 'o', 'k', '.', ' ', 'I', 't', ' ', 'h', 'a', 's', ' ', 's', 'u', 'r', 'v', 'i', 'v', 'e', 'd', ' ', 'n', 'o', 't', ' ', 'o', 'n', 'l', 'y', ' ', 'f', 'i', 'v', 'e', ' ', 'c', 'e', 'n', 't', 'u', 'r', 'i', 'e', 's', ',', ' ', 'b', 'u', 't', ' ', 'a', 'l', 's', 'o', ' ', 't', 'h', 'e', ' ', 'l', 'e', 'a', 'p', ' ', 'i', 'n', 't', 'o', ' ', 'e', 'l', 'e', 'c', 't', 'r', 'o', 'n', 'i', 'c', ' ', 't', 'y', 'p', 'e', 's', 'e', 't', 't', 'i', 'n', 'g', ',', ' ', 'r', 'e', 'm', 'a', 'i', 'n', 'i', 'n', 'g', ' ', 'e', 's', 's', 'e', 'n', 't', 'i', 'a', 'l', 'l', 'y', ' ', 'u', 'n', 'c', 'h', 'a', 'n', 'g', 'e', 'd', '.', ' ', 'I', 't', ' ', 'w', 'a', 's', ' ', 'p', 'o', 'p', 'u', 'l', 'a', 'r', 'i', 's', 'e', 'd', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', '1', '9', '6', '0', 's', ' ', 'w', 'i', 't', 'h', ' ', 't', 'h', 'e', ' ', 'r', 'e', 'l', 'e', 'a', 's', 'e', ' ', 'o', 'f', ' ', 'L', 'e', 't', 'r', 'a', 's', 'e', 't', ' ', 's', 'h', 'e', 'e', 't', 's', ' ', 'c', 'o', 'n', 't', 'a', 'i', 'n', 'i', 'n', 'g', ' ', 'L', 'o', 'r', 'e', 'm', ' ', 'I', 'p', 's', 'u', 'm', ' ', 'p', 'a', 's', 's', 'a', 'g', 'e', 's', ',', ' ', 'a', 'n', 'd', ' ', 'm', 'o', 'r', 'e', ' ', 'r', 'e', 'c', 'e', 'n', 't', 'l', 'y', ' ', 'w', 'i', 't', 'h', ' ', 'd', 'e', 's', 'k', 't', 'o', 'p', ' ', 'p', 'u', 'b', 'l', 'i', 's', 'h', 'i', 'n', 'g', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'l', 'i', 'k', 'e', ' ', 'A', 'l', 'd', 'u', 's', ' ', 'P', 'a', 'g', 'e', 'M', 'a', 'k', 'e', 'r', ' ', 'i', 'n', 'c', 'l', 'u', 'd', 'i', 'n', 'g', ' ', 'v', 'e', 'r', 's', 'i', 'o', 'n', 's', ' ', 'o', 'f', ' ', 'L', 'o', 'r', 'e', 'm', ' ', 'I', 'p', 's', 'u', 'm', '.'];
let wrongs = ref(new Array(string.length).fill(false));
let rights = ref(new Array(string.length).fill(false));
var position = 0;
let specialCharacters = ['Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Enter', 'Esc']

var started = false;

function start() {
        if (!started) {
                started = true;
                window.addEventListener("keydown", (ev) => {
                        if (specialCharacters.indexOf(ev.key) != -1) {
                                return
                        }

                        else if (ev.key == "Backspace") {
                                if (position >= string.length) {
                                        position = string.length - 1;
                                        (wrongs.value)[position] = false;
                                        (rights.value)[position] = false;
                                }
                                else if (position <= 0) {
                                        position = ref(0);
                                        (wrongs.value)[position] = false;
                                        (rights.value)[position] = false;
                                }
                                else {
                                        (position)--;
                                        (wrongs.value)[position] = false;
                                        (rights.value)[position] = false;

                                }

                        }
                        else if (ev.key != string[position]) {
                                (wrongs.value)[position] = true;
                                (position)++;
                        }
                        else {
                                (rights.value)[position] = true;
                                (position)++;
                        }
                })
        }
}


</script>

<style lang="scss" scoped>
.practice-text {
        width: 80%;
        margin-left: 50%;
        transform: translateX(-50%);
        background-color: white;
        border-radius: 12px;
        padding: 10px;
        box-shadow: 0px 4px 18px rgba(19, 39, 40, 0.5);
        ;
}

.wrong {
        background-color: rgba(255, 0, 0, 0.34);
        border-radius: 2px;
}

.right {
        background-color: rgba(66, 181, 66, 0.387);
        border-radius: 2px;
}

.text {
        font-size: 20px;

}
</style>