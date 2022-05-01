<script setup>
import Navigation from './Navigation.vue';
import { getAuth, onAuthStateChanged, updatePassword, signInWithEmailAndPassword } from '@firebase/auth';
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import { onBeforeMount, ref as vueref } from "vue";
import { useRouter } from 'vue-router';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer-neutral';

const db = getDatabase();
const router = useRouter()
const auth = getAuth();

const username = vueref();
const avatar = vueref();
const changing = vueref(false);

var loaded = vueref(false);
var currentUser;

var oldPassword1 = vueref('');
var oldPassword2 = vueref('');
var newPassword = vueref('');
var newUsername = vueref('');

var darkMode = vueref();

onBeforeMount(authListener);

function authListener() {
 onAuthStateChanged(auth, (user) => {
    if (!user) { // not logged in
        router.push('/')
    }
    else {
        
        let userRef = ref(db, "/users/" + user.uid);
        onValue(userRef, (snapshot) => {
            currentUser = snapshot.val();
            username.value = currentUser.username;
            avatar.value = createAvatar(style, {seed: currentUser.seed, radius: 50, scale: 80});
            loaded.value = true;
        });
    }
});
}

function changeAvatar() {
    changing.value = true;
    let random = Math.random().toString(36).substr(2, 10);
    const user = auth.currentUser;
    set(ref(db, "users/" + user.uid), {
        username : currentUser.username,
        country : currentUser.country,
        email : currentUser.email,
        seed : random,
    }).then(() =>{
        avatar.value = createAvatar(style, {seed: random, radius: 50, scale: 80});
        changing.value = false;
    });
    
};

function changePassword() {
    signInWithEmailAndPassword(auth, currentUser.email, oldPassword1.value)
    .then((userCredential) => {
        const user = auth.currentUser;
        updatePassword(user, newPassword.value).then(() => {
            alert('Password cambiata con successo')
            oldPassword1.value = '';
            newPassword.value = '';
        }).catch((error) => {
            alert(error);
        })
        })
    .catch((error) => {
        alert(error)
    });
};


function changeUsername() {
    signInWithEmailAndPassword(auth, currentUser.email, oldPassword2.value)
    .then((userCredential) => {
        const user = auth.currentUser;
        const updates = {}
        updates["/users/" + user.uid + '/username'] = newUsername.value;
        update(ref(db), updates)
        oldPassword2.value = '';
        newUsername.value = '';
    });
};

</script>

<template >

    <div v-if="!loaded">
        <h1 class="flex justify-center items-center text-3xl lg:text-5xl h-screen text-green-500 dark:text-purple-500 ">Caricamento...</h1>
    </div>

    <div v-else class="flex flex-col min-h-screen">
        <Navigation />
        <div class="bg-white dark:bg-graphite-light h-full m-4 rounded-xl shadow-xl transition-colors">
            
            <div class="flex flex-col justify-center items-center m-5">
                <div v-if="!changing" class="h-28 w-28" v-html="avatar"></div>
                <div v-else class="h-28 w-28 bg-gray rounded-full"></div>
                <div class="flex justify-center text-gray hover:text-gray-dark dark:hover:text-white hover:cursor-pointer" @click="changeAvatar">
                    <h3 class="m-2 ">Cambia avatar</h3>
                    <font-awesome-icon icon="arrow-rotate-left" class="self-center "></font-awesome-icon> 
                </div>
                <h1 class="text-5xl xl:text-7xl flex text-graphite dark:text-white m-2">{{ username }}</h1>                
            </div>
            

            <div class="flex flex-wrap  w-full h-fit">
                
                <div class="flex flex-col shadow-gray shadow grow  basis-72 shrink rounded-xl h-full m-2 dark:shadow-none dark:bg-graphite">
                    <h2 class="self-center m-2 text-lg text-green-500 dark:text-purple-500">Cambia Password</h2>
                    <label class="flex flex-col self-center text-center m-2">
                        <div class="dark:text-white">Password attuale</div>
                        <input class="border-[1px] border-gray rounded-lg" v-model="oldPassword1" type="password">
                    </label>
                    <label class="flex flex-col self-center text-center m-2 mb-4">
                        <div class="dark:text-white">Nuova password</div>
                        <input class="border-[1px] border-gray rounded-lg" v-model="newPassword" type="password">
                    </label>
                    <button class="custom-button primary mb-3" @click="changePassword">Cambia</button>
                </div>
                
                <div class="flex flex-col shadow-gray shadow basis-72 shrink grow rounded-xl h-full m-2 dark:shadow-none dark:bg-graphite">
                    <h2 class="self-center m-2 text-lg text-green-500 dark:text-purple-500">Cambia Nome Utente</h2>
                    <label class="flex flex-col self-center text-center m-2 ">
                        <div class="dark:text-white">Password attuale</div>
                        <input class="border-[1px] border-gray rounded-lg" v-model="oldPassword2" type="password">
                    </label>
                    <label class="flex flex-col self-center text-center m-2 mb-4">
                        <div class="dark:text-white">Nuovo nome utente</div>
                        <input class="border-[1px] border-gray rounded-lg" v-model="newUsername" type="text">
                    </label>
                    <button class="custom-button primary mb-3" v @click="changeUsername">Cambia</button>
                </div>

                <div class="flex flex-col basis-full grow shrink shadow-gray shadow rounded-xl h-full m-2 dark:shadow-none dark:bg-graphite p-4">
                    <h2 class="self-center text-lg text-green-500 dark:text-purple-500">Preferenze</h2>
                    <div class="flex flex-col">
                        <label class="flex m-2">
                            <h1 class="text-graphite dark:text-white">Lingua</h1>
                            <select class="mx-auto w-4/6 rounded-lg text-sm p-1 bg-white border-[1px] border-gray">
                                <option value="it">Italiano</option>
                                <option value="en">English</option>
                            </select>
                        </label>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>

</template>
