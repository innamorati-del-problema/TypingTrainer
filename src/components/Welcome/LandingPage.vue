<script setup>

import Login from './Login.vue';
import Register from './Register.vue';
import Welcome from './Welcome.vue';
import { ref } from "vue";
import Typer from "../Typer.vue"
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useRouter } from 'vue-router';

let showWelcome = ref(true);
let showLogin = ref(false);
let showRegister = ref(false);


function switchLogin() {
    showWelcome.value = !showWelcome.value;
    showLogin.value = !showLogin.value;
}

function switchRegister() {
    showWelcome.value = !showWelcome.value;
    showRegister.value = !showRegister.value;
}


let light = ref(localStorage.theme==='light');

function change() {
    if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark';
        light.value = !light.value;
    }
    else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light';
        light.value = !light.value;
    }
}
const auth = getAuth();
const router = useRouter();
const authListener = onAuthStateChanged(auth, (user) => {
    if (user) { // not logged in
        // alert('you must be logged in to view this. redirecting to the home page')
        router.push('/profile')
    }
});

</script>

<template>

    

<div class="h-screen text-center flex flex-col">

    
    <div class="flex flex-col self-center">

        <Typer class="p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600 text-4xl sm:text-5xl drop-shadow" toType="TypingTrainer" typerChar="|" :typingSpeed=100 />


        <div @click="change" class="flex flex-col self-center w-8 h-4 rounded-xl bg-white  justify-center border-[2px] border-green-500 dark:border-none hover:cursor-pointer">
            <font-awesome-icon v-if="light"  icon="sun" class="text-green-500 h-[0.65rem] ml-[2px] mt-[0.5px] self-start "/>
            <font-awesome-icon v-else icon="moon"  class="text-purple-500 h-3 mr-[2px] self-end  "/>
        </div>
    </div>

    <Welcome v-if="showWelcome"  @login-clicked="switchLogin" @register-clicked="switchRegister" />

    <Login v-if="showLogin" @close-login="switchLogin" />

    <Register v-if="showRegister" @close-register="switchRegister" />
</div>
    

</template>

