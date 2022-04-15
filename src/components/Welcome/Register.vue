<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { useRouter } from "vue-router";

const router = useRouter();

let email;
let password;
let username;
let paese;
let checkPassword;

function register(email, password, checkPassword, username, paese) {

    if (password !== checkPassword) {
        alert("le password non corrispondono");
        return;
    }


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            writeUserData(user.uid, username, email, user.uid, paese);
            router.push("/home");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error);
            // ..
        });
};

function writeUserData(userId, name, email, seed, paese) {
    const db = getDatabase();
    set(ref(db, '/users/' + userId), {
        username: name,
        email: email,
        seed: seed,
        country: paese,
    });
};


</script>

<template>

    <div class="landing-box reg">
            <div class="box-content">
                <h5 class="card-title">Registrati</h5>
                <h4 class="card-paragraph-s">Email</h4>
                <input type="text"  placeholder="@" v-model="email">
                <h4 class="card-paragraph-s">Username</h4>
                <input type="text"  placeholder="Username" v-model="username">
                <h4 class="card-paragraph-s">Password</h4>
                <input placeholder="Password" type="password" v-model="password">
                <h4 class="card-paragraph-s">Conferma Password</h4>
                <input placeholder="Password" type="password" v-model="checkPassword">
                <h4 class="card-paragraph-s">Paese</h4>
                <select placeholder="Paese" v-model="paese">
                    <option value='not-selected'></option>
                    <option value="italia">Italia</option>
                    <option value="other">Altro</option>
                </select>
                <br>
            </div>

            <div class="buttons">
                <button id="indietro" class="botton-danger-light botton-m" @click="$emit('close-register')">Indietro</button>
                
                <button id='registrati' class="botton-primary-light botton-m" @click="register(email, password, checkPassword, username, paese)">Registrati</button> 
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