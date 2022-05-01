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

<div class="bg-white dark:bg-graphite-light 
            flex flex-col justify-evenly 
            rounded-xl drop-shadow-2xl p-4 
            w-screen sm:w-96  h-5/6 sm:h-[26rem]
            mx-auto sm:my-12">
            
            <font-awesome-icon @click="$emit('close-register')" icon="arrow-left" class="h-5 absolute top-5 left-5 hover:text-green-500"/>
            <h5 class="text-green-500 dark:text-purple-500 text-3xl">Registrati</h5>

            <form @submit.prevent="register(email, password, checkPassword, username, paese)" class="flex flex-col justify-evenly grow"> 
                <label class="flex flex-col dark:text-white  mt-1">
                    Email
                    <input class="text-xs p-2 h-6 border-[1px] rounded border-graphite w-4/6 self-center" type="text"  placeholder="@" v-model="email">
                </label>
                <label class="flex flex-col dark:text-white mt-1">
                    Username
                    <input class="text-xs p-2 h-6 border-[1px] rounded border-graphite w-4/6 self-center" type="text"  placeholder="Username" v-model="username">
                </label>
                <label class="flex flex-col dark:text-white mt-1">
                    Password
                    <input class="text-xs p-2 h-6 border-[1px] rounded border-graphite w-4/6 self-center" type="password"  placeholder="Password" v-model="password">
                </label>
                <label class="flex flex-col dark:text-white mt-1">
                    Conferma Password
                    <input class="text-xs p-2 h-6 border-[1px] rounded border-graphite w-4/6 self-center" type="password"  placeholder="Conferma Password" v-model="checkPassword">
                </label>
                <label class="flex flex-col dark:text-white  mt-1">
                    Paese
                    <select class="text-xs h-6 bg-white border-[1px] rounded border-graphite w-4/6 self-center"  placeholder="Paese" v-model="paese">
                    <option class="text-xs" value='not-selected'></option>
                    <option class="text-xs" value="italia">Italia</option>
                    <option class="text-xs" value="other">Altro</option>
                </select>
                </label>
                <button type='submit' class="custom-button mt-4 from-green-500 to-green-600">Registrati</button>            
            </form>
    
            

</div>
   

</template>

<style scoped lang="scss">


</style>