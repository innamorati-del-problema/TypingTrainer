<template>
        <!-- <Navigation /> -->
        <br>
        <br>
        <br>
        <div class="scores">
                <div class="score timer"><h4>{{ timer }}</h4></div>
                <div class="score wpm"><h4>WPM: {{ wpm }}</h4></div>
                <div class="score errPercent"><h4>Precisione: {{ precision }}</h4></div>
        </div>
        <!-- <h1 style="color: var(--paragraph-text-color);" class="startertext">Clicca per iniziare!</h1> -->
        <div class="practice-text" :class="{ blur: !started }" @click="start">
                <span v-for="(letter, index) in string">
                        <span :class="{
                                'passed wrong': letterValues[index] == 1,
                                'passed right': letterValues[index] == 3,
                                text: true,
                                'passed corrected': letterValues[index] == 2,
                                nextChar: index == position && started
                        }">
                                {{ letter }}
                        </span>
                </span>
        </div>

        <br>
        <KeyboardIT />
</template>

<script setup>
import { ref } from 'vue';
import KeyboardUS from "./Keyboard/KeyboardUS.vue";
import KeyboardIT from "./Keyboard/KeyboardIT.vue";
import texts from "../assets/texts.json";
import Navigation from "./Navigation.vue";

var string = [];
let position = ref(0);
let specialCharacters = ['Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Enter', 'Esc', 'AltGraph']

let started = ref(false);
let precision = ref('100%');
let timer = ref('0:00');
let secs = 0;
let words = 0;

var timerStop = false;

let wrong = 0;

const wpm = ref(0);
let i = 0;
let n = getRndInteger(1,5);
for (i=0; i < texts[n].text.length; i++) {
        string.push(texts[n].text[i]);
}
let letterValues = ref(new Array(string.length).fill(0));

function start() {
        if (!(started.value)) {
                started.value = true;
                timerStart();
                window.addEventListener("keydown", keyHandler )
        }
}

function keyHandler(ev) {
        if (specialCharacters.indexOf(ev.key) != -1) {
                return
        }
        else if (position.value >= string.length) {
                position.value = string.length - 1;
                timerStop = true;
                window.removeEventListener("keydown", keyHandler );
        }
        else if (ev.key == "Backspace") {

                if (string[position.value-1]==' ') 
                {

                }
                else if (position.value <= 0) {
                        position.value = 0;
                }
                else {
                        (position.value)--;
                }
                (letterValues.value)[position.value] = -1;
        }
        else if (string[position.value] == ' ') {
                words++;
                wpm.value = Math.floor(words*60/secs);
                if (ev.key == ' ')
                        (letterValues.value)[position.value] = 3;
                else {
                        (letterValues.value)[position.value] = 1;
                        wrong++;
                }
                (position.value)++;
        }
        else if (ev.key != string[position.value]) {
                (letterValues.value)[position.value] = 1;
                (position.value)++;
                wrong++;
        }
        else {
                if ((letterValues.value)[position.value] != 0) {
                        (letterValues.value)[position.value] = 2;
                        wrong--;

                }
                else {
                        (letterValues.value)[position.value] = 3;
                }

                (position.value)++;
        }
        precision.value = Math.floor((1 - (wrong/(position.value)))*100) + '%'; 
}

function timerStart() {

        let minutes = Math.floor(secs / 60); 
        let seconds = secs % 60;

        
        if (seconds < 10)
                timer.value = ''+minutes+":0"+seconds;
        else
                timer.value = ''+minutes+":"+seconds;

        secs++;
        if (!timerStop)
                setTimeout(timerStart, 1000);

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

</script>

<style lang="scss" scoped>


@keyframes right {
        from {
                background-color: rgba(0, 0, 0, 0);

        }

        to {
                background-color: rgba(66, 181, 66, 0.296);
        }
}

@keyframes wrong {
        from {
                background-color: rgba(0, 0, 0, 0);

        }

        to {
                background-color: rgba(255, 0, 0, 0.328);
        }
}

@keyframes corrected {
        from {
                background-color: rgba(0, 0, 0, 0);

        }

        to {
                background-color: rgba(253, 253, 24, 0.297);
        }
}

@keyframes nextChar {
        0% {
                background-color: rgba(0, 0, 0, 0);
        }

        50% {
                background-color: var(--next-char-color);
        }

        100% {
                background-color: rgba(0, 0, 0, 0);
        }
}

.practice-text {
        width: 80%;
        margin-left: 50%;
        transform: translateX(-50%);
        background-color: var(--alt-background-color);
        border-radius: 12px;
        padding: 10px;
        box-shadow: 0px 4px 47px -9px #7E7E7E;


}

.text {
        font-size: 20px;
        margin: 1px;
        color: var(--paragraph-text-color)
}

.passed {
        border-radius: 2px;
        color: var(--passed-key-color);

        &.right {
                animation: right 200ms linear forwards;
                background-color: rgba(66, 181, 66, 0.296);
        }

        &.wrong {
                background-color: rgba(255, 0, 0, 0.3);
                animation: wrong 200ms linear forwards;
        }

        &.corrected {
                background-color: rgba(253, 253, 24, 0.3);
                animation: corrected 200ms linear forwards;
        }
}

.nextChar {
        animation: nextChar 1200ms cubic-bezier(0, 1.03, 0, 0.99) infinite;
        border-radius: 2px;
}


.blur {
        filter: blur(3px);
}

.scores {
        display: flex;
}

.score {
        flex-grow: 1;
        color: var(--paragraph-text-color);
}
</style>