<script setup>
    import Navigation from './Navigation.vue';
    import Challenge from './Challenge.vue';
    import router from '../router';

    function game(route) {
        router.push(route);
    };

</script>

<template>

<Navigation />


<div class = "flex flex-wrap xl:flex-nowrap mt-2 justify-center gap-1 xl:p-24">
    <!-- <Challenge titolo="Maiuscole e minuscole" descrizione="Metti alla prova la tua capacità di adattarti ai cambi improvvisi di testo" gif="/test22.gif" /> -->
    <Challenge titolo="Prova a tempo" descrizione="Combatti contro il tempo per completare più parole possibili" gif="/test22.gif" />
    <Challenge titolo="Parole in libertà" descrizione="Confrontati con il caso e completa più parole senza senso che puoi"  gif="/test22.gif"/>
    <Challenge titolo="Vicolo cieco" descrizione="Affina la tua prontezza avendo a disposizione solo poche lettere alla volta" gif="/test22.gif" @play-game='game("letterpractice")' />
</div>

</template>

<style scoped>


 
</style>