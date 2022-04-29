<script setup>
import Toggle from "./components/Toggle.vue";

  localStorage.theme = 'light';

  function change() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light';
    }
    else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }
  }

  
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap" rel="stylesheet">
  <div class="bground" id="b">
      <div id="b-img" class='bground-img'></div>
  </div>
  <div class="viewmode-container">
    
    <Toggle @click="change" class="btn-change"/>
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
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.bground {
  background-color: var(--background-color);
  background-size: 15%;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}

.btn-change {
  position: fixed;
  top: 10px;
  right: 10px;
  width:fit-content;
  height:fit-content;
}


.bground .bground-img {
  background-size: 15%;
  background-image: var(--background-image);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
  opacity: 20%;
}


</style>
