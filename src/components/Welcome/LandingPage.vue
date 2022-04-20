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

.card-paragraph-s {
    font-weight: 600;
    font-size: 20px;
    color: #484848;
}



.landing-box {
    height:600px;
    width:500px;
    margin: auto;
    border-radius: 20px;
    background: white;
    box-shadow: 0px 4px 47px -9px #7E7E7E;
}

.landing-box.big{
    margin-top:40px;
    width: 1800px;
    height:900px;
}

.landing-box.reg{
    height:700px;
}

.navbar{
    width:93%;
    height:110px;
    margin:auto;
}

.navbar-title{
    margin:0px;
    margin-right:50px;
    border:0px;
    padding:0px;
    font-weight: 600;
    font-size: 70px;
    background: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    width:fit-content;
}

.navbar-pages{
    margin:0px;
    margin-right:50px;
    margin-top:20px;
    border:0px;
    padding:0px;
    font-weight: 600;
    font-size: 50px;
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    width:fit-content;
}

.navbar-pages.selected{
    color:white;  
}

.navbar-content{
    display:inline-flex;
    margin:0px;
    padding:0px;
    border:0px;
    width:100%;
    height: 100%;
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
    //margin-top:90%;
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



@media (min-width: 800px) and (max-width:1919px){

    .landing-box{
        height: 400px;
        width: 300px;
    }

    .landing-box.big{
    width: 1400px;
    height:600px;
   }

    .landing-box.reg{
        height: 600px;
    }

    .page-title{
        font-size: 80px;
    }

    .card-title{
        font-size: 35px;
    }

    .card-paragraph{
        font-size: 18px;
    }

    .botton-m{
        width: 100px;
        height: 50px;
        font-size: 0.8em;
    }
    .botton-xl{
        width: 140px;
        height: 50px;
        font-size: 1.2em;
    }
    
}

@media (max-width: 799px){

    .landing-box{
        height: 350px;
        width: 250px;
    }

    .landing-box.reg{
        height: 550px;
    }

    .landing-box.big{
        height: 330px;
        width: 640px;
    }

    .page-title{
        font-size: 50px;
    }

    .card-title{
        font-size: 20px;
    }

    .card-paragraph{
        font-size: 15px;
    }
    .botton-m{
        width: 50px;
        height: 25px;
        font-size: 0.5em;
    }
    .botton-xl{
        width: 150px;
        height: 35px;
        font-size: 1em;
    }
}

</style>