<script setup>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer-neutral';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



function register(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error);
        // ..
    });
}

function login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("signedin");
    // ...
    })
    .catch((error) => {
      alert(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

let avatar = createAvatar(style, {});
let email = "";
let password = "";

</script>

<template>

    <div class="landing-box">
      <div class="card-body">
        <!--<div class="avatar" v-html="avatar"></div>-->
        <img class="avatar" src="https://avatars.dicebear.com/api/jdenticon/cavolfiored.svg"/>
        <h5 class="card-title">Accedi</h5>
        <h4>Username</h4>
        <input type="text"  placeholder="@" v-model="email">
        <h4>Password</h4>
        <input placeholder="Password" v-model="password">
        <br>
        <button @click="register(email, password)">Registrati</button>
        <br>
        <button @click="login(email, password)">Accedi</button>
        <button @click="$emit('close-login')">Indietro</button>
      </div>
    </div>
   
    


    

</template>

<style scoped>



.avatar {
  width: 50px;
  height: 50px;
  margin: auto;
}

</style>