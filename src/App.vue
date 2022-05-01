<script setup>

  
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap" rel="stylesheet">
  <div class="bg-beige dark:bg-graphite  inset-0 fixed -z-50 transition-colors" id="b">
      <div class='bg-ptn-light h-screen w-screen -z-40 opacity-10 dark:bg-ptn-dark' style="background-size:15%"></div>
  </div>
  <router-view />
</template>



<style src="./styles/light.css"></style>
<style src="./styles/dark.css"></style>
<style src="./styles/buttons.scss"></style>
<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
