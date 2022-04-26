<template>
    <div class="page-title">
        <span v-for="letter in title">{{ letter }}</span>
    </div>
        
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
    toType: {
        type: String,
        required: true,
    },
    typingSpeed: {
        type: Number,
        required: false,
        default: 100
    },
    maintainSpeed: {
        type: Number,
        required: false,
        default: 500
    },
    typerChar: {
        type: String,
        required: false,
        default: "|"
    },

});

var title = ref([]); 
var i = 0;

let ms = props.maintainSpeed;
let ts = props.typingSpeed;



window.setTimeout(type, 0);

function type() { 
    if (i < props.toType.length) {
        title.value.pop();
        title.value.push(props.toType.charAt(i));
        title.value.push(props.typerChar);
        i++;
        let n = getRndInteger(0,4)
        if (n < 1) 
            window.setTimeout(type, 2*ts);
        else if (n < 2)
            window.setTimeout(type, 0.5*ts);
        else
            window.setTimeout(type, ts);
    }
    else {
        maintain(0);
    }    
}

function maintain(n) {
    if (n%2 == 0) {
        title.value.pop();
        title.value.push(" ");
        n++;
    }
    else {
        title.value.pop();
        title.value.push(props.typerChar);
        n--
    }
    window.setTimeout(maintain, ms, n);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
</script>

<style lang="scss" scoped>


* {
    white-space: pre;
}


</style>