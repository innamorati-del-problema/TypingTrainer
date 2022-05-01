<script setup>
import Login from './Login.vue';
import Register from './Register.vue';



</script>

<template>

<div class="bg-white dark:bg-graphite-light 
            flex flex-col justify-evenly 
            rounded-xl drop-shadow-2xl p-4 
            w-screen sm:w-96  h-5/6 sm:h-[26rem]
            mx-auto sm:my-12">
        <h1 class="text-green-500 dark:text-purple-500 text-4xl mt-10">Benvenuto!</h1>
        <p class="dark:text-white mt-10">per imparare a digitare:</p>
        <div class="buttons flex flex-col shrink-1 justify-evenly mt-10">
            <button @click="$emit('login-clicked')" class="custom-button from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600">Accedi</button>
            <div class="py-6"><h4 class="bg-gray-dark dark:bg-white text-2xl m-3 leading-min"><span class="pl-3 pr-3 bg-white dark:text-white dark:bg-graphite-light ">Oppure</span></h4></div>
            <button @click="$emit('register-clicked')" class="custom-button from-blue-500 to-blue-600 mb-4">Registrati</button>
        </div>
</div>


</template>

