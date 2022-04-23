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
    <Typer toType="TypingTrainer" typerChar="|" :typingSpeed=100 />

    <Welcome v-if="showWelcome" @login-clicked="switchLogin" @register-clicked="switchRegister" />

    <Login v-if="showLogin" @close-login="switchLogin" />

    <Register v-if="showRegister" @close-register="switchRegister" />

</template>

<style lang="scss">



.page-title {
    font-weight: 700;
    font-size: 100px;
    background: var(--title-color);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4px 16px rgba(84, 169, 130, 0.6);
    margin-bottom: 80px;

}

.card-title {
    font-weight: 600;
    font-size: 50px;
    background: var(--title-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.card-paragraph {
    font-weight: 600;
    font-size: 30px;
    color: var(--paragraph-text-color);

    &-s {
        font-size: 20px;
    }
}

.landing-box {
    height: 600px;
    width: 500px;
    margin: auto;
    border-radius: 20px;
    background: var(--alt-background-color);
    box-shadow: 0px 4px 47px -9px #7E7E7E;

    &.big {
        margin-top: 40px;
        width: 1800px;
        height: 900px;
    }

    &.reg {
        height: 700px;
    }
}


.botton {

    border-radius: 4px;
    border: 0;
    color: var(--button-text-color);

    &.b-xl {
        width: 250px;
        height: 60px;
        font-size: 1.5em;
    }

    &.b-m {
        width: 150px;
        height: 50px;
        font-size: 1em;
    }

    &.b-primary {
        box-shadow: var(--botton-primary-shadow);
        background: var(--botton-primary-color);
    }

    &.b-secondary {
        box-shadow: var(--botton-secondary-shadow);
        background: var(--botton-secondary-color);
    }

    &.b-danger {
        box-shadow: var(--botton-danger-shadow);
        background: var(--botton-danger-color);
    }

}




@media (min-width: 800px) and (max-width:1919px) {

    .landing-box {
        height: 400px;
        width: 300px;

        &.big {
            width: 1400px;
            height: 600px;
        }

        &.reg {
            height: 600px;
        }
    }

    .page-title {
        font-size: 80px;
    }

    .card-title {
        font-size: 35px;
    }

    .card-paragraph {
        font-size: 18px;
    }

    .botton {

        &.b-xl {
            width: 140px;
            height: 50px;
            font-size: 1.2em;
        }

        &.b-m {
            width: 100px;
            height: 50px;
            font-size: 0.8em;
        }

    }
}

@media (max-width: 799px) {

    .landing-box {
        height: 350px;
        width: 250px;

        &.big {
            height: 330px;
            width: 640px;
        }

        &.reg {
            height: 550px;
        }
    }


    .page-title {
        font-size: 50px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-paragraph {
        font-size: 15px;
    }

    .botton {

        &.b-m {
            width: 50px;
            height: 25px;
            font-size: 0.5em;
        }

        &.b-xl {
            width: 150px;
            height: 35px;
            font-size: 1em;
        }
    }

}
</style>