<template>


<div class="spacebar">
    <svg  viewBox="0 0 400 70">
        <linearGradient id="gradient" x2="1" y2="1">
            <stop offset="0%" stop-color="#72C53F" />
            <stop offset="100%" stop-color="#5A9D31" />
        </linearGradient>
       
        <rect 
        :class="{ pressedRec : pressed}"
        class="rect"
        width="400" 
        height="70" />
    
    </svg>
</div>
        
    

    

</template>

<script setup>
import { ref } from "vue";
let pressed = ref(false);

window.addEventListener('keydown', (ev) => {
    if ( ev.key == " ") {
        pressed.value = true;
    }
});

window.addEventListener('keyup', (ev) => {
    if ( ev.key == " " ) {
        pressed.value = false;
    }
})

</script>

<style lang="scss" scoped>

svg {
    filter: drop-shadow(0px 0px 5px #7d7d7d68);
    width: 100%;
}

@keyframes pressed {
    from {
        font-size: 1.2em;
        fill: black
    }
    to {
        font-size: 1.5em;
        fill: white;
    }
}

@keyframes unpressed {
    from {font-size: 1.5em;}
    to {font-size: 1.2em;}
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