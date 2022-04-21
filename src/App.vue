<script setup>
  var element;
  function change(){
  element = document.getElementById("b");
  element.classList.toggle("dark");
  console.log("ciao");
  }

  
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap" rel="stylesheet">
  <div class="bground" id="b">
      <div class='bground-img'></div>
  </div>
  <div class="viewmode-container">
    
    <button class="btn-change" @click="change()"><h3>Change Color Mode</h3></button>
  </div>
  <router-view />
</template>

<style lang="scss">

$background-light: #FCEFDC;
$background-dark: #2D2D35;

#app {
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
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

.bground.dark{
  background-color: $background-dark;
}

.btn-change{
  
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
