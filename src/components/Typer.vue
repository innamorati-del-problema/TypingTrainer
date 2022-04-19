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
        default: 200
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
</script>

<style lang="scss" scoped>
$primary-light: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);


* {
    white-space: pre;
}


</style>