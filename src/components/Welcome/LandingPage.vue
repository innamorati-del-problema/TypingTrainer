<script setup>

import Login from './Login.vue';
import Register from './Register.vue';
import Welcome from './Welcome.vue';
import { ref } from "vue";
import Typer from "../Typer.vue"


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


</script>

<template>

    

<div class="h-screen text-center flex flex-col">

    <Typer class="p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 text-4xl sm:text-5xl drop-shadow" toType="TypingTrainer" typerChar="|" :typingSpeed=100 />

    <Welcome v-if="showWelcome"  @login-clicked="switchLogin" @register-clicked="switchRegister" />

    <Login v-if="showLogin" @close-login="switchLogin" />

    <Register v-if="showRegister" @close-register="switchRegister" />
</div>
    

</template>

