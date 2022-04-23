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

    <div class="landing-box">
      <div class="box-content">
        <h5 class="card-title">Accedi</h5>
        <h4 class="card-paragraph">Email</h4>
        <input type="text"  placeholder="@" v-model="email">
        <h4 class="card-paragraph">Password</h4>
        <input type="password" placeholder="Password" v-model="password">
        <br>
      </div>
      <div class="buttons">
        <button class="botton b-danger b-m" @click="$emit('close-login')">Indietro</button>
        <button class="botton b-primary b-m" @click="login(email, password)">Accedi</button>
      </div>
    </div>
   
    


    

</template>

<style scoped lang="scss">

.box-content {

    h5 {
        padding-top: 30px;
    }
    h4 {
    margin-top: 20px;
    }
    
}
.buttons {
    padding-top: 30px;
    padding-bottom: 30px;

}

</style>