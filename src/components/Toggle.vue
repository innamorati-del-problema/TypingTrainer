<template>
    <div class="dark-toggle" :class="{ checked : checked }" @click="toggle">
          <div class="ball" :class="{ checked : checked }">
          <div class="icon">
              
          </div>
          </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const checked = ref(false);

function toggle() {
    checked.value = !checked.value;
}

</script>

<style lang="scss" scoped>

@keyframes toggle-ball {
    0% {
        left: 0px;
    }

    100% {
        left: 30px;
    }
}

@keyframes untoggle-ball {
    0% {
        left: 30px;
    }

    100% {
        left: 0px;
    }
}

.dark-toggle {
    margin: 10px;
    width: 60px;
    height: 30px;
    background-color: var(--alt-background-color);
    border-radius: 20px;
    padding: 2px;
    border: 1px solid var(--paragraph-text-color);
}

.ball {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    background-color: var(--primary-color-solid);
    animation: untoggle-ball 0.3s cubic-bezier( 0.79, 0.33, 0.14, 0.53 ) ;
}

.checked {

    &.ball {
        left: 30px;
        animation: toggle-ball 0.3s cubic-bezier( 0.79, 0.33, 0.14, 0.53 ) ;
    }

}
</style>