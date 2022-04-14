<script setup>
import Login from './Login.vue';
import Register from './Register.vue';



</script>

<template>

<div class="landing-box d-flex justify-content-center align-items-center">
    <div class="box-content">
        <h3 class="page-subtitle">Benvenuto</h3>
        <p class="page-paragraph">per imparare a digitare:</p>
        <button @click="$emit('login-clicked')" class="buttone-pisello buttone-xl">Accedi</button>
        <div class="hr"><h4><span>Oppure</span></h4></div>
        <button @click="$emit('register-clicked')" class="buttone-crossing buttone-xl">Registrati</button> 
    </div>
</div>

</template>

<style scoped>



.box-content * {
    margin-top: 30px;
    margin-bottom: 30px;
}

h4 {
    text-align: center; 
    line-height: 0.1em;
    margin:auto;
    margin-top:5%; 
    margin-bottom:5%;
    background-color: #484848;
    

} 

h4 span { 
    text-align:center;
    padding:0 10px; 
    background-color: white;
}

    
</style>