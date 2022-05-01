<template>
                <div class="flex justify-evenly m-2 text-3xl text-graphite dark:text-white">
                        <div class=""><h4>{{ timer }}</h4></div>
                        <div class=""><h4>WPM: {{ wpm }}</h4></div>
                        <div class=""><h4>Precisione: {{ precision }}</h4></div>
                </div>
                <div class="w-5/6 mx-auto text-center text-md bg-white m-4 rounded-xl p-3 shadow-xl"  @click="start">
                        <div v-if='!started' class="">
                                <h1 class="absolute w-screen left-0 text-4xl mt-2 text-black z-50">Clicca per iniziare</h1>
                        </div>
                        <span :class="{ blur: !started }"  v-for="(letter, index) in string">
                                <span :class="{
                                        'passed wrong': letterValues[index] == 1,
                                        'passed right': letterValues[index] == 3,
                                        'passed corrected': letterValues[index] == 2,
                                        nextChar: index == position && started
                                }">
                                        {{ letter }}
                                </span>
                        </span>
                </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import texts from "../assets/texts.json";

var string = [];
let position = ref(0);
let specialCharacters = ['Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Enter', 'Esc', 'AltGraph']

let started = ref(false);
let precision = ref('100%');
let timer = ref('0:00');
let secs = 0;
let words = 0;

var timerStop = false;

var wrong = 0;

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
        else if (ev.key == "Backspace") {

                if (string[position.value-1]==' ') 
                {

                }
                else if (position.value <= 0) {
                        position.value = 0;
                }
                else {
                        if ((letterValues.value)[position.value-1] == 1) {
                                wrong--;
                        }
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
                if ((letterValues.value)[position.value-1] != 1)
                {
                        (letterValues.value)[position.value] = 1;
                        (position.value)++;
                        wrong++;
                }
        }
        else {
                if ((letterValues.value)[position.value] != 0) {
                        (letterValues.value)[position.value] = 2;

                }
                else {
                        (letterValues.value)[position.value] = 3;
                }

                (position.value)++;
        }
        precision.value = Math.floor((((position.value - wrong)/(position.value)))*100) + '%'; 
}

watch(position, () => {
        timerStop = position.value >= string.length;
})

function timerStart() {

        
        if (!timerStop) {
                let minutes = Math.floor(secs / 60); 
                let seconds = secs % 60;

                
                if (seconds < 10)
                        timer.value = ''+minutes+":0"+seconds;
                else
                        timer.value = ''+minutes+":"+seconds;
                
                secs++;

                setTimeout(timerStart, 1000);
        }
        else
        {
                window.removeEventListener("keydown", keyHandler );
                emits('practice-end', wpm.value, precision.value, timer.value);      
        }    
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const emits = defineEmits(["practice-end"]);

</script>

<style lang="scss" scoped>


@keyframes right {
        from {
                background-color: rgba(0, 0, 0, 0);

        }

        to {
                background-color: var(--right-background-color);
        }
}

@keyframes wrong {
        from {
                background-color: rgba(0, 0, 0, 0);

        }

        to {
                background-color: var(--wrong-background-color);
        }
}

@keyframes corrected {
        from {
                background-color: rgba(0, 0, 0, 0);

        }

        to {
                background-color: var(--corrected-background-color);
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