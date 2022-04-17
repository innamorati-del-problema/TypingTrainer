<template>
        <svg width="70" height="70" viewBox="0 0 70 70">
        <linearGradient id="gradient" x2="1" y2="1">
            <stop offset="0%" stop-color="#72C53F" />
            <stop offset="100%" stop-color="#5A9D31" />
        </linearGradient>
       
        <rect 
        :class="{ pressedRec : pressed}"
        class="rect"
        width="70" 
        height="70" />
        <text 
        :class="{ pressedTxt : pressed}" 
        class="text"
        dominant-baseline="middle" 
        text-anchor="middle" 
        x="50%" y="50%">
        {{ letter }}
        </text>
    </svg>

    

</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  letter: {
      type: String,
      required: true,   
  },
});

let pressed = ref(false);

window.addEventListener('keydown', (ev) => {
    if ( ev.key.toUpperCase() == props.letter ) {
        pressed.value = true;
    }
});

window.addEventListener('keyup', (ev) => {
    if ( ev.key.toUpperCase() == props.letter ) {
        pressed.value = false;
    }
})

</script>

<style lang="scss" scoped>

$big-letter: 2em;
$small-letter: 1.7em;

svg {
    filter: drop-shadow(0px 0px 5px #7d7d7d68);
    margin: 5px;
}

@keyframes pressed {
    from {
        font-size: $small-letter;
        fill: black
    }
    to {
        font-size: $big-letter;
        fill: white;
    }
}

@keyframes unpressed {
    from {font-size: $big-letter;}
    to {font-size: $small-letter;}
}
.rect {
    fill: white;
    ry: 8px;
}

.text {
    fill: black;
    animation: unpressed 100ms ease forwards;

    
}

.pressedRec {
    fill: url(#gradient);
}

.pressedTxt {
    fill: white;
    animation: pressed 100ms ease forwards;
}

</style>