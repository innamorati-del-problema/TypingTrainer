<template>
    <div class="bg-white dark:bg-graphite-light shadow-lg rounded-xl flex flex-col m-2 basis-full justify-between max-w-sm xl:max-w-lg">
        <img class="w-fit self-center rounded-t-lg" :src=gif alt="">
        <div class="flex flex-col p-4 ">
            <div class="text-xl text-green-500 dark:text-purple-500">{{ titolo }}</div>
            <div class="text-sm dark:text-white">{{ descrizione }}</div>
            
        </div>
        <div class="flex flex-col xl:flex-row xl:justify-end">
            <button class="custom-button from-green-500 to-green-600 dark:from-purple-500 dark:to-purple-600 xl:self-end m-2" @click="$emit('play-game')">Gioca!</button>
        </div>
    </div>
</template>

<script setup>

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
        require: true,
        type: String,
    }
})

const emits = defineEmits(['play-game'])

</script>

<style lang="scss" scoped>

</style>