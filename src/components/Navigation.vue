<script setup>
  import {ref} from 'vue';
  const theme = ref();

  theme.value = localStorage.theme;

  function change() {
    if (theme.value === 'dark' || (!('theme' in localStorage))) {
      document.documentElement.classList.remove('dark')
      theme.value = 'light';
      console.log("light");
    }
    else {
      document.documentElement.classList.add('dark')
      theme.value = 'dark';
       console.log("dark");
    }
  }

</script>
<template>


  <nav class=" w-full h-10 flex justify-center pt-1 pb-0  dark:border-purple-500">
    <div class="flex items-center m-2 justify-between w-4/6 mx-auto">
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

        <font-awesome-icon v-if="theme ==='light'" @click="change" icon="sun" class="text-green-500 h-4 self-center"/>
        <font-awesome-icon v-else icon="moon" @click="change" class="text-purple-500 h-4 self-center"/>
      </div>
      

    </div>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
</style>