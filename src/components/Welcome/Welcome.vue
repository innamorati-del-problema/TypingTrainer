<script setup>
import Login from "./Login.vue";
import Register from "./Register.vue";
</script>

<template>
  <div
    class="mx-auto flex h-5/6 w-screen flex-col justify-evenly rounded-xl bg-white p-4 drop-shadow-2xl dark:bg-graphite-light sm:my-12 sm:h-[26rem] sm:w-96"
  >
    <h1 class="mt-10 text-4xl text-green-500 dark:text-purple-500">
      Benvenuto!
    </h1>
    <p class="mt-10 dark:text-white">per imparare a digitare:</p>
    <div class="buttons shrink-1 mt-10 flex flex-col justify-evenly">
      <button
        @click="$emit('login-clicked')"
        class="custom-button from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600"
      >
        Accedi
      </button>
      <div class="py-6">
        <h4 class="m-3 bg-gray-dark text-2xl leading-min dark:bg-white">
          <span
            class="bg-white pl-3 pr-3 dark:bg-graphite-light dark:text-white"
            >Oppure</span
          >
        </h4>
      </div>
      <button
        @click="$emit('register-clicked')"
        class="custom-button mb-4 from-blue-500 to-blue-600"
      >
        Registrati
      </button>
    </div>
  </div>
</template>
