<script setup>
 
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';
import Navigation from './Navigation.vue';
import TextPracticeTest from "./TextPractice.vue";
import { ref as vueref } from 'vue';
import { getDatabase, ref, onValue, set } from "firebase/database";

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

function sendData(wpm, precision, timer) {
    const user = auth.currentUser;
    set(ref(db, "/scores/" + new Date()), {
        uid : user.uid,
        wpm : wpm,
        precision : precision,
        timer : timer
    });
}

</script>

<template>

<Navigation />

<div class="mt-10">
    <TextPracticeTest @practice-end="sendData"/>
</div>

</template>

<style scoped>
</style>