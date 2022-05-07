<script setup>
import { ref, watch } from "vue";
import { getAuth } from "firebase/auth";
let light = ref(localStorage.theme === "light");
const showExit = ref(false);

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

let showResponsiveNavbar = ref(false);

function toggleNavbar() {
  showResponsiveNavbar.value = !showResponsiveNavbar.value;
}

const avatar = localStorage.avatar;

function logOut() {
  const auth = getAuth();
  auth.signOut();
}
</script>
<template>
  <nav
    class="flex w-full justify-center pt-1 pb-0 dark:border-purple-500 md:h-10"
  >
    <div
      class="m-2 mx-auto w-full items-center justify-evenly text-center md:flex lg:w-5/6 lg:justify-between"
    >
      <div
        class="text-shadow-primary sm:3text-xl ml-2 bg-gradient-to-b from-green-500 to-green-600 bg-clip-text text-left text-2xl text-transparent drop-shadow-lg dark:from-purple-500 dark:to-purple-500"
      >
        TypingTrainer
      </div>
      <div
        :class="{ hidden: showResponsiveNavbar }"
        class="relative transition-all md:flex lg:ml-12"
      >
        <div
          class="text-shadow m-1 text-2xl transition-all sm:mx-3 sm:text-xl"
          v-bind:class="[
            $route.path == '/practice'
              ? 'text-green-500 text-shadow-primary dark:text-purple-500'
              : 'text-graphite dark:text-white',
          ]"
        >
          <router-link to="/practice"> Pratica </router-link>
        </div>
        <div
          class="text-shadow m-1 text-2xl sm:mx-3 sm:text-xl"
          v-bind:class="[
            $route.path == '/profile'
              ? 'text-green-500 text-shadow-primary dark:text-purple-500 '
              : 'text-graphite dark:text-white',
          ]"
        >
          <router-link to="/profile"> Profilo </router-link>
        </div>
        <div
          class="text-shadow m-1 text-2xl sm:mx-3 sm:text-xl"
          v-bind:class="[
            $route.path == '/challenges'
              ? 'text-green-500 text-shadow-primary dark:text-purple-500 '
              : 'text-graphite dark:text-white',
          ]"
        >
          <router-link to="/challenges"> Sfide </router-link>
        </div>
        <div
          class="text-shadow m-1 text-2xl sm:mx-3 sm:text-xl"
          v-bind:class="[
            $route.path == '/leaderboards'
              ? 'text-green-500 text-shadow-primary dark:text-purple-500 '
              : 'text-graphite dark:text-white',
          ]"
        >
          <router-link to="/leaderboards"> Leaderboards </router-link>
        </div>
      </div>

      <font-awesome-icon
        @click="toggleNavbar"
        class="absolute top-4 right-4 rounded-lg bg-white p-2 text-green-500 shadow-lg hover:cursor-pointer dark:text-purple-500 md:hidden"
        icon="bars"
      />
      <div class="absolute top-6 right-14 md:static">
        <div
          @click="change"
          class="flex h-4 w-8 flex-col justify-center self-center rounded-xl border-[1px] border-green-500 bg-white hover:cursor-pointer dark:border-none"
        >
          <font-awesome-icon
            v-if="light"
            icon="sun"
            class="ml-[2px] h-3 self-start text-green-500"
          />
          <font-awesome-icon
            v-else
            icon="moon"
            class="mr-[2px] h-3 self-end text-purple-500"
          />
        </div>
      </div>
      <div
        class="fixed top-4 right-24 mt-1 mr-2 h-8 w-8 basis-8 rounded-full border-[1px] border-[rgba(0,0,0,0)] ring-2 ring-graphite-light hover:cursor-pointer dark:ring-white md:static"
      >
        <div @click="showExit = !showExit" v-html="avatar" class="avatar"></div>
        <div
          v-show="showExit"
          @click="logOut"
          class="absolute -right-10 -bottom-14 flex h-12 w-28 items-center justify-center rounded-xl bg-white shadow dark:bg-graphite-light"
        >
          <h1 class="texthover:cursor-pointer text-red-500">Esci</h1>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
