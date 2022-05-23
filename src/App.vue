<script setup>
import { useUserStore } from "./stores/userStore";

if (localStorage.theme === "light" || !("theme" in localStorage)) {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
} else {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
}

if (localStorage.dyslexic === "false" || !("dyslexic" in localStorage)) {
  document.documentElement.classList.remove("dyslexic");
  localStorage.dyslexic = "false";
} else {
  document.documentElement.classList.add("dyslexic");
  localStorage.dyslexic = "true";
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="https://d1c0n.github.io/OpenDyslexic/opendyslexic.css"
  />

  <div
    class="fixed inset-0 -z-50 bg-beige transition-colors dark:bg-graphite"
    id="b"
  >
    <div
      class="-z-40 h-screen w-screen bg-ptn-light opacity-10 dark:bg-ptn-dark"
      style="background-size: 15%"
    ></div>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 95%;

  &:hover {
    width: 15px;
  }
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;

  &:hover {
    width: 15px;
  }
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(168, 168, 169);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  width: 20px;
}

.Vue-Toastification__toast-body.toast {
  font-family: "IBM Plex Mono";
}
</style>
