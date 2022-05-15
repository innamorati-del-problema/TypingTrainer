<script setup>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";
import Navigation from "../Navigation.vue";
import TextPracticeTest from "./TextPractice.vue";
import { ref as vueref } from "vue";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import "../Keyboard/Keyboard.vue";
import Keyboard from "../Keyboard/Keyboard.vue";
import CompleteModal from "../CompleteModal.vue";
import { useUserStore } from "../../stores/userStore";

const userStore = useUserStore();
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
  const scoresListRef = ref(db, "/practice/");
  const newScoreRef = push(scoresListRef);
  const date = new Date();
  const wpm_raw = wpm;
  const wpm_good = Math.floor(wpm_raw * (precision / 100));
  set(newScoreRef, {
    username: userStore.username,
    wpm_raw: wpm_raw,
    wpm: wpm_good,
    precision: precision,
    timer: timer,
    day: date.getDate(),
    month: 1 + date.getMonth(),
    year: 1 + date.getFullYear(),
  });
}

let _wpm = vueref();
let _precision = vueref();
let _timer = vueref();

let finished = vueref(false);

const key = vueref(0);

function onPracticeEnd(wpm, precision, timer) {
  _wpm.value = wpm;
  _precision.value = precision;
  _timer.value = timer;
  finished.value = true;
  sendData(wpm, precision, timer);
}

function reRender(cRef) {
  key.value++;
}
</script>

<template>

  <div>
    <Navigation />
    <div class="mx-auto mt-10 max-w-[900px]">
      <TextPracticeTest @practice-end="onPracticeEnd" :key="key" />
      <!-- non funziona on hover nella dark mode-->
      <div
        class="flex justify-center text-graphite hover:cursor-pointer hover:text-green-500 dark:hover:text-purple-500"
        @click="reRender()"
      >
        <font-awesome-icon
          icon="arrow-rotate-left"
          class="self-center dark:text-white"
        ></font-awesome-icon>
        <h3 class="m-2 dark:text-white">Genera un nuovo testo</h3>
      </div>
    </div>
    <div class="-z-[100] text-center">
      <Keyboard lang="it" class="text-center" />

    </div>
  </div>

  <Transition name="modal">
    <div v-if="finished">
      <CompleteModal
        class="bg-gray-dark bg-opacity-50 dark:text-white"
        :wpm="_wpm"
        :precision="_precision"
        :timer="_timer"
        @close-modal="router.go()"
      />
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
