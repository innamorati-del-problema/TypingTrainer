<script setup>
import { ref, watch } from "vue";

let light = ref(localStorage.theme==='light');


  function change() {
    if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
      light.value = !light.value;
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light';
      light.value = !light.value;
    }
  }

</script>
<template>


  <nav class=" w-full h-10 flex justify-center pt-1 pb-0  dark:border-purple-500">
    <div class="flex items-center m-2 justify-evenly lg:justify-between w-full lg:w-4/6 mx-auto">
      <div class="bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-500 text-2xl sm:3text-xl drop-shadow-lg">TypingTrainer</div>
      <div class="hidden sm:flex ml-12 ">
        <div class="sm:text-xl sm:mx-3 dark:text-white" v-bind:class="{ 'text-green-500 dark:text-purple-500 underline': $route.path == '/practice' }">
          <router-link to="/practice" > Pratica </router-link>
        </div>
        <div class="sm:text-xl sm:mx-3 dark:text-white" v-bind:class="{ 'text-green-500 dark:text-purple-500 underline': $route.path == '/profile' }">
          <router-link to="/profile"> Profilo </router-link>
        </div>
        <div class="sm:text-xl sm:mx-3 dark:text-white" v-bind:class="{ 'text-green-500 dark:text-purple-500 underline': $route.path == '/challenges' }">
          <router-link to="/challenges"> Sfide </router-link>
        </div>

        
        
      </div>
      <div @click="change" class="flex flex-col w-8 h-4 rounded-xl bg-white self-center justify-center border-[1px] border-green-500 dark:border-none transition-all">
          <font-awesome-icon v-if="light"  icon="sun" class="text-green-500 h-3 ml-[2px] self-start absolute"/>
          <font-awesome-icon v-else icon="moon"  class="text-purple-500 h-3 mr-[2px] self-end  "/>
        </div>
      

    </div>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
</style>