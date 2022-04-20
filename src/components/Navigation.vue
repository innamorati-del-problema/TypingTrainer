<script>
 data:{
   isActive:false
 }

</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-title">Typing Trainer</div>
      <router-link to="/home" class="navbar-pages" v-on:click="isActive=!isActive" v-bind:class="{selected: isActive}"> Home </router-link>
      <router-link to="/profile" class="navbar-pages"> Profile </router-link>
    </div> 
  </nav>
  <router-view />
</template>

<style scoped lang="scss">


</style>