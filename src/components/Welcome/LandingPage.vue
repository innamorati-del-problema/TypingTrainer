<script setup>

import Login from './Login.vue';
import Register from './Register.vue';
import Welcome from './Welcome.vue';
import { ref } from "vue";


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
    <h1 class="page-title">TypingTrainer</h1>

    <Welcome v-if="showWelcome" @login-clicked="switchLogin" @register-clicked="switchRegister"/>

    <Login v-if="showLogin" @close-login="switchLogin" />

    <Register v-if="showRegister" @close-register="switchRegister" />


</template>

<style lang="scss">
$primary-light: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);

.page-title {
    font-weight: 700;
    font-size: 100px;
    line-height: 130px;
    background: $primary-light;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4px 16px rgba(84, 169, 130, 0.6);
    margin-bottom: 80px;

}

.card-title {
    font-weight: 600;
    font-size: 50px;
    background: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.card-paragraph {
    font-weight: 600;
    font-size: 30px;
    color: #484848;
}

.landing-box {
    max-width: 550px;
    margin: auto;
    max-height: 700px;
    border-radius: 20px;
    background: white;
    box-shadow: 0px 4px 47px -9px #7E7E7E;
}

.botton-xl {
    width: 250px;
    height: 60px;
    border-radius: 4px;
    font-size: 1.5em;
    border: 0;
    color: white;

}

.botton-m {
    width: 150px;
    height: 50px;
    border-radius: 4px;
    font-size: 1em;
    border: 0;
    color: white;

}

.botton-primary-light {
    background: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);
    box-shadow: 0px 4px 18px rgba(84, 169, 130, 0.5);
}

.botton-secondary-light {
    background: linear-gradient(180deg, #00B7C1 0%, #1B8AB9 100%);
    box-shadow: 0px 4px 18px rgba(147, 236, 241, 0.5);
}

.botton-danger-light {
    background: linear-gradient(180deg, #D21212 0%, #700101 100%);
    box-shadow: 0px 4px 18px rgba(126, 4, 4, 0.5);
}

</style>