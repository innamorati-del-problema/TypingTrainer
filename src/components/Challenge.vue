<template>
    <div class="bg-white dark:bg-graphite-light shadow-lg rounded-xl flex flex-col m-2 basis-full justify-between max-w-sm xl:max-w-lg">
        <img class="w-fit self-center rounded-t-lg" :src=gif alt="">
        <div class="flex flex-col p-4 ">
            <div class="text-xl text-green-500 dark:text-purple-500">{{ titolo }}</div>
            <div class="text-sm dark:text-white">{{ descrizione }}</div>
            
        </div>
        <div class="flex flex-col xl:flex-row xl:justify-around">
            <h1 class="self-center xl:ml-3 dark:text-white">Livello</h1>
            <div class="flex self-center m-3">
                
                <div @click="clicked(1)" :class="{ 'dark:bg-purple-500 bg-green-500 text-white ' : selected===1}" class="rounded-l hover:cursor-pointer w-10 h-10 bg-white shadow shadow-gray hover:shadow-md hover:shadow-gray transition-all dark:bg-white self-center border-r-2 border-white dark:border-graphite-light flex justify-center items-center">1</div>
                <div @click="clicked(2)" :class="{ 'dark:bg-purple-500 bg-green-500 text-white' : selected===2}" class="w-10 h-10 hover:cursor-pointer bg-white shadow shadow-gray self-center hover:shadow-md hover:shadow-gray transition-all dark:bg-white border-r-2 border-white dark:border-graphite-light flex justify-center items-center">2</div>
                <div @click="clicked(3)" :class="{ 'dark:bg-purple-500 bg-green-500 text-white' : selected===3}" class="rounded-r hover:cursor-pointer w-10 h-10 bg-white shadow shadow-gray hover:shadow-md hover:shadow-gray transition-all dark:bg-white self-center flex justify-center items-center">3</div>
            </div>
            <button class="custom-button from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600 xl:self-end m-2" @click="$emit('play-game', selected.value)">Gioca!</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps( {
    titolo: {
        required : true,
        type: String,
    },
    descrizione: {
        required : true,
        type: String,
    },
    gif: {
        required: true,
        type: String,
    },
    level: {
        //required: true,
        type: Number
    }
})

const selected = ref(1);

const emits = defineEmits(['play-game']);

function clicked(num) {
    selected.value=num;
}

</script>

<style lang="scss" scoped>

</style>