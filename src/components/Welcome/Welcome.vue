<script setup>
import Login from './Login.vue';
import Register from './Register.vue';



</script>

<template>

<div class="landing-box">
    <div class="box-content">
        <h3 class="card-title">Benvenuto</h3>
        <p class="card-paragraph">per imparare a digitare:</p>
        <div class="buttons">
            <button @click="$emit('login-clicked')" class="botton b-primary b-xl">Accedi</button>
            <div class="hr"><h4><span>Oppure</span></h4></div>
            <button @click="$emit('register-clicked')" class="botton b-secondary b-xl">Registrati</button>
        </div>
    </div>
</div>

</template>

<style scoped lang="scss">

h4 {
    text-align: center; 
    line-height: 0.1em;
    font-size: 1.5em;
    margin: 5% 5%;
    background-color: var(--paragraph-text-color);
    color: var(--paragraph-text-color);

    span { 
    text-align:center;
    padding:0 10px; 
    background-color: var(--alt-background-color);
    
    }
} 

.box-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: start;


    .card-title {
        flex-grow: 1;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-paragraph {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .buttons {
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .botton {
            align-self: center;
        }
    }
}

</style>