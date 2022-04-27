<script setup>


</script>
<template>


  <nav>
    <div class="nav-bar">
      <div class="nav-title">Typing Trainer</div>
      <div class="nav-content d-flex align-items-center" v-bind:class="{ 'pressed': $route.path == '/practice' }">
        <router-link to="/practice" > Pratica </router-link>
      </div>
      <div class="nav-content d-flex align-items-center" v-bind:class="{ 'pressed': $route.path == '/profile' }">
        <router-link to="/profile"> Profilo </router-link>
      </div>
      <div class="nav-content d-flex align-items-center" v-bind:class="{ 'pressed': $route.path == '/challenges' }">
        <router-link to="/challenges"> Sfide </router-link>
      </div>

    </div>

  </nav>
  <router-view />
</template>

<style scoped lang="scss">
.body {
  display: inline;
}

.nav-bar {
  text-align: left;
  display: flex;
  justify-content: start;
  align-items: center;
}

.nav-title {
  margin-right: 3%;
  margin-left: 2%;
  font-weight: 600;
  font-size: 50px;
  background: var(--title-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 16px rgba(114, 197, 63, 0.6);
  background-clip: text;
  width: max-content;
}

.nav-content {
  margin-right: 0%;
  margin-left: 2%;
  font-weight: 600;
  font-size: 40px;
  line-height: 46px;
  line-height: 100%;
  vertical-align: text-bottom;
  background: var(--alt-paragraph-text-color);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: max-content;
}

.nav-content.pressed {
  vertical-align: text-bottom;
  background: var(--title-color);
  background-clip: text;
  -webkit-background-clip: text;
}
</style>