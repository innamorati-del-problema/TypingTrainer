<script setup>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

function login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push("/practice");
    // ...
    })
    .catch((error) => {
      alert(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

let email = "";
let password = "";

</script>

<template>


<div class="bg-white dark:bg-graphite-light 
            flex flex-col justify-evenly 
            rounded-xl drop-shadow-2xl p-4 
            w-screen sm:w-96  h-5/6 sm:h-[26rem]
            mx-auto sm:my-12">
        <font-awesome-icon @click="$emit('close-login')" icon="arrow-left" class="h-5 absolute top-5 left-5 hover:text-green-500 dark:text-white dark:hover:text-purple-500"/>

        <h5 class="text-green-500 dark:text-purple-500 text-4xl mt-5">Accedi</h5>

        <form @submit.prevent="login(email, password)" class="flex flex-col justify-evenly grow">
          <label class="flex flex-col justify-around ">
            <div class="text-md dark:text-white">Email</div>
            <input class="border-[1px] rounded border-graphite p-1 w-4/6 self-center text-sm" type="text"  placeholder="@" v-model="email">
          </label>
          <label class="flex flex-col">
            <div class="text-md dark:text-white">Password</div>
            <input class="border-[1px] rounded border-graphite p-1 w-4/6 self-center text-sm" type="password" placeholder="Password" v-model="password">
          </label>
            <button type='submit' class="custom-button-big primary">Accedi</button>
        </form>
</div>

</template>

<style scoped lang="scss">

</style>