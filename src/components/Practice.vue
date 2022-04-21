<script setup>
 
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';
import Navigation from './Navigation.vue';
import { ref as vueref } from 'vue';
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const router = useRouter()
const auth = getAuth();

let username = vueref();
let userObj;
let userRef; 


const authListener = onAuthStateChanged(auth, (user) => {
    if (!user) { // not logged in
        // alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
    }
    else {
        
        userRef = ref(db, "/users/" + user.uid);
        onValue(userRef, (snapshot) => {
            userObj = snapshot.val();
            username.value = userObj.username;
        });
    }
});

onBeforeUnmount(() => {
    // clear up listener
    authListener()
});

const signOut = () => {
    auth.signOut();
}

</script>

<template>

<Navigation />

<br>
<br>
<h1>Ciao {{ username  }}</h1>
<button @click="signOut">Esci</button>

</template>

<style scoped>
</style>