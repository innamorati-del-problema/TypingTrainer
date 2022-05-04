<script setup>
import Login from "./Login.vue";
import Register from "./Register.vue";
import Welcome from "./Welcome.vue";
import { ref } from "vue";
import Typer from "../Typer.vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "vue-router";

let showWelcome = ref(true);
let showLogin = ref(false);
let showRegister = ref(false);

function switchLogin() {
  showWelcome.value = !showWelcome.value;
  showLogin.value = !showLogin.value;
}

function switchRegister() {
  showWelcome.value = !showWelcome.value;
  showRegister.value = !showRegister.value;
}

let light = ref(localStorage.theme === "light");

function change() {
  if (localStorage.theme === "light" || !("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    light.value = !light.value;
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    light.value = !light.value;
  }
}
const auth = getAuth();
const router = useRouter();
const authListener = onAuthStateChanged(auth, (user) => {
  if (user) {
    // not logged in
    // alert('you must be logged in to view this. redirecting to the home page')
    router.push("/profile");
  }
});
</script>

<template>
  <div class="flex h-screen flex-col text-center">
    <div class="flex flex-col self-center">
      <Typer
        class="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text p-4 text-4xl text-transparent drop-shadow dark:from-purple-500 dark:to-purple-600 sm:text-5xl"
        toType="TypingTrainer"
        typerChar="|"
        :typingSpeed="100"
      />

      <div
        @click="change"
        class="flex h-4 w-8 flex-col justify-center self-center rounded-xl border-[2px] border-green-500 bg-white hover:cursor-pointer dark:border-none"
      >
        <font-awesome-icon
          v-if="light"
          icon="sun"
          class="ml-[2px] mt-[0.5px] h-[0.65rem] self-start text-green-500"
        />
        <font-awesome-icon
          v-else
          icon="moon"
          class="mr-[2px] h-3 self-end text-purple-500"
        />
      </div>
    </div>

    <Welcome
      v-if="showWelcome"
      @login-clicked="switchLogin"
      @register-clicked="switchRegister"
    />

    <Login v-if="showLogin" @close-login="switchLogin" />

    <Register v-if="showRegister" @close-register="switchRegister" />
  </div>
</template>
