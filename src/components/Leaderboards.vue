<template>
    <div class="flex flex-col justify-start p-0 m-0 h-screen w-screen">
        <Navigation />

        <div class="flex h-full flex-wrap m-4 gap-2">
            <div class="flex flex-col basis-96 grow bg-white dark:bg-graphite-light rounded-xl shadow-lg w-full h-full p-4">
                <h1 class="self-center dark:text-white">Classifica globale</h1>
                <div v-if='allTime.length != 0' class="flex flex-col" v-for="score in allTime">
                    <h1>{{ score.wpm }}</h1>
                </div>
                <button class="custom-button primary" @click="updateLeaderboard">Update</button>
            </div>
            <div class="flex flex-col basis-96 grow bg-white dark:bg-graphite-light rounded-xl shadow-lg w-full h-full p-4">
                <h1 class="self-center dark:text-white">Classifica globale</h1>
            </div>
            <div class="flex flex-col basis-96 grow bg-white dark:bg-graphite-light rounded-xl shadow-lg w-full h-full p-4">
                <h1 class="self-center dark:text-white">Classifica globale</h1>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import Navigation from './Navigation.vue';
import { ref, onValue, getDatabase, query, orderByChild, limitToFirst } from '@firebase/database';
import { ref as vueref } from 'vue';

const db = getDatabase();
let allTime = vueref([]);

const topTenWpm = query(ref(db, '/scores/'), orderByChild('wpm'), limitToFirst(3))
onValue(topTenWpm, (snapshot => {
    allTime.value = snapshot.val();
}))

</script>

<style lang="scss" scoped>

</style>