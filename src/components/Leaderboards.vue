<template>
    <div class="flex flex-col justify-start p-0 m-0 h-screen w-screen">
        <Navigation />

        <div class="flex h-full flex-wrap m-4 gap-2">
            <div class="flex flex-col basis-96 grow bg-white dark:bg-graphite-light rounded-xl shadow-lg w-full h-full p-8">
                <h1 class="self-center dark:text-white mb-5">Classifica globale</h1>
                <div class="flex justify-between text-green-500 dark:text-purple-500">
                        <h1>Username</h1>
                        <h1>WPM</h1>
                        <h1>Precisione</h1>
                </div>
                <div v-if='allTime.length != 0' class="flex flex-col  w-full" v-for="score in allTime">
                    
                    <div class="flex justify-between dark:text-white">
                        <h1>{{ score.username }}</h1>
                        <h1>{{ score.wpm }}</h1>
                        <h1>{{ score.precision }}</h1>
                    </div>
                </div>
                
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

const topTenWpm = query(ref(db, '/scores/'), orderByChild('wpm'), limitToFirst(10));
onValue(topTenWpm, (snapshot => {
    snapshot.forEach(function(scoreSnapshot) {
        allTime.value.push(scoreSnapshot.val());
    })
    allTime.value.reverse();
}))


</script>

<style lang="scss" scoped>

</style>