<script setup>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";
import Navigation from "../Navigation.vue";
import TextPracticeTest from "./TextPractice.vue";
import { ref as vueref } from "vue";
import { getDatabase, ref, onValue, set, push } from "firebase/database";

const db = getDatabase();
const router = useRouter();
const auth = getAuth();

let username = vueref();
let userObj;
let userRef;

const authListener = onAuthStateChanged(auth, (user) => {
  if (!user) {
    // not logged in
    // alert('you must be logged in to view this. redirecting to the home page')
    router.push("/");
  }
});

onBeforeUnmount(() => {
  // clear up listener
  authListener();
});

const signOut = () => {
  auth.signOut();
};

function sendData(wpm, precision, timer) {
  const user = auth.currentUser;
  const scoresListRef = ref(db, "/scores/");
  const newScoreRef = push(scoresListRef);
  const date = new Date();
  const wpm_raw = wpm;
  const wpm_good = wpm_raw*(precision/100);
  set(newScoreRef, {
    username: localStorage.username,
    wpm_raw: wpm_raw,
    wpm: wpm_good,
    precision: precision,
    timer: timer,
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });
}
</script>

<template>
  <Navigation />

  <div class="mt-10">
    <TextPracticeTest @practice-end="sendData" />
  </div>
</template>

<style scoped></style>
