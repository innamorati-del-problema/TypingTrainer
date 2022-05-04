<script setup>
if (localStorage.theme === "light" || !("theme" in localStorage)) {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
} else {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap"
    rel="stylesheet"
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

#app {
  font-family: "IBM Plex Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
