<script setup>

</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap" rel="stylesheet">
  <div class="bground">
      <div class='bground-img'></div>
  </div>
  <router-view />
</template>

<style lang="scss">

$background-light: #FCEFDC;
$background-dark: #222328;

#app {
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;

}

.bground {
  background-color: $background-light;
  background-size: 15%;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}

.bground .bground-img {
  background-size: 15%;
  background-image: url('/ptn.svg');
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
  opacity: 20%;
}

</style>
