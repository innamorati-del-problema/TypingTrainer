<template>
        <div class="practice-text">
                <span v-for="(letter, index) in string">
                        <span :class="{ wrong: letterValues[index] == 1 , right: letterValues[index] == 3, text: true, corrected : letterValues[index] == 2 }">{{ letter }}</span>
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
let letterValues = ref(new Array(string.length).fill(0));
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
                                if (position == string.length) {
                                        position = string.length - 1;                               
                                }
                                else if (position <= 0) {
                                        position = 0;
                                }
                                else {
                                        (position)--;
                                }
                                (letterValues.value)[position] = -1;
                        }
                        else if (ev.key != string[position]) {
                                (letterValues.value)[position] = 1;
                                (position)++;
                        }
                        else {
                                if ((letterValues.value)[position] != 0)
                                {
                                        (letterValues.value)[position] = 2;
                                }
                                else {
                                        (letterValues.value)[position] = 3;
                                }
                                
                                (position)++;
                        }
                })
        }
}


</script>

<style lang="scss" scoped>

@keyframes right {
    from {
        background-color: rgba(0, 0, 0, 0);
        
    }
    to {
        background-color: rgba(66, 181, 66, 0.387);
    }
}

@keyframes wrong {
    from {
        background-color: rgba(0, 0, 0, 0);
        
    }
    to {
        background-color: rgba(255, 0, 0, 0.34);
    }
}

@keyframes corrected {
    from {
        background-color: rgba(0, 0, 0, 0);
        
    }
    to {
        background-color:  rgba(253, 253, 24, 0.831);
    }
}
.practice-text {
        width: 80%;
        margin-left: 50%;
        transform: translateX(-50%);
        background-color: white;
        border-radius: 12px;
        padding: 10px;
        box-shadow: 0px 4px 18px rgba(19, 39, 40, 0.5);
        
}

.wrong {
        background-color: rgba(255, 0, 0, 0.34);
        border-radius: 2px;
        color:rgba(76, 76, 76, 0.5);
        animation: wrong 200ms linear forwards;
}

.right {
        border-radius: 2px;
        color:rgba(76, 76, 76, 0.5);
        background-color: rgba(66, 181, 66, 0.387);
        animation: right 200ms linear forwards;
}

.text {
        font-size: 20px;
       

}

.corrected {
        background-color: rgba(253, 253, 24, 0.831);
        animation: corrected 200ms linear forwards;
        color:rgba(76, 76, 76, 0.5);
}
</style>