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

let showResponsiveNavbar = ref(false);

function toggleNavbar() {
  showResponsiveNavbar.value = !showResponsiveNavbar.value;
}

</script>
<template>


  <nav class=" w-full md:h-10 flex justify-center pt-1 pb-0  dark:border-purple-500">
    <div class=" md:flex text-center items-center m-2 justify-evenly lg:justify-between w-full lg:w-4/6 mx-auto">
      <div class="bg-clip-text text-left text-transparent bg-gradient-to-b from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-500 ml-2 text-2xl sm:3text-xl drop-shadow-lg">TypingTrainer</div>
      <div :class="{'hidden' : showResponsiveNavbar}" class="realtive md:flex lg:ml-12 transition-all">
        <div class="text-2xl m-1 sm:text-xl sm:mx-3 " v-bind:class="[ $route.path == '/practice' ? 'text-green-500 dark:text-purple-500 underline': 'text-graphite dark:text-white' ]">
          <router-link to="/practice"> Pratica </router-link>
        </div>
        <div class="text-2xl m-1 sm:text-xl sm:mx-3 " v-bind:class="[ $route.path == '/profile' ? 'text-green-500 dark:text-purple-500 underline': 'text-graphite dark:text-white' ]">
          <router-link to="/profile"> Profilo </router-link>
        </div>
        <div class="text-2xl m-1 sm:text-xl sm:mx-3 " v-bind:class="[ $route.path == '/challenges' ? 'text-green-500 dark:text-purple-500 underline': 'text-graphite dark:text-white' ]">
          <router-link to="/challenges"> Sfide </router-link>
        </div>
        <div class="text-2xl m-1 sm:text-xl sm:mx-3 " v-bind:class="[ $route.path == '/leaderboards' ? 'text-green-500 dark:text-purple-500 underline': 'text-graphite dark:text-white' ]">
          <router-link to="/leaderboards"> Leaderboards </router-link>
        </div>
        

        
        
      </div>
        <font-awesome-icon @click="toggleNavbar" class="md:hidden absolute top-4 right-4 text-green-500 dark:text-purple-500 bg-white p-2 rounded-lg shadow-lg" icon="bars"/>
        <div class="absolute md:static top-6 right-14 ">
          <div @click="change" class="flex flex-col self-center w-8 h-4 rounded-xl bg-white  justify-center border-[1px] border-green-500 dark:border-none hover:cursor-pointer">
            <font-awesome-icon v-if="light"  icon="sun" class="text-green-500 h-3 ml-[2px] self-start "/>
            <font-awesome-icon v-else icon="moon"  class="text-purple-500 h-3 mr-[2px] self-end  "/>
          </div>
        </div>
        
      

    </div>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
</style>