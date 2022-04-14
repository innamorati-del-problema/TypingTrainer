<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



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

let email = "";
let password = "";

</script>

<template>

    <div class="landing-box">
            <div class="box-content">
                <h5 class="card-title">Registrati</h5>
                <h4 class="card-paragraph">Email</h4>
                <input type="text"  placeholder="@" v-model="email">
                <h4 class="card-paragraph">Username</h4>
                <input type="text"  placeholder="Username" v-model="username">
                <h4 class="card-paragraph">Password</h4>
                <input placeholder="Password" type="password" v-model="password">
                <h4 class="card-paragraph">Conferma Password</h4>
                <input placeholder="Password" type="password" v-model="checkPassword">
                <h4 class="card-paragraph">Paese</h4>
                <select placeholder="Paese" v-model="paese">
                    <option value='not-selected'></option>
                    <option value="italia">Italia</option>
                    <option value="other">Altro</option>
                </select>
                <br>
            </div>

            <div class="buttons">
                <button id="indietro" class="botton-danger-light botton-m" @click="$emit('close-register')">Indietro</button>
                
                <button id='registrati' class="botton-primary-light botton-m" @click="register(email, password)">Registrati</button>        
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