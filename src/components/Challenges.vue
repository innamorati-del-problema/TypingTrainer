<script setup>
import Navigation from "./Navigation.vue";
import Challenge from "./Challenge.vue";
import router from "../router";
</script>

<template>
  <Navigation />

  <div class="mt-2 flex flex-wrap justify-center gap-1 xl:flex-nowrap xl:p-24">
    <!-- <Challenge titolo="Maiuscole e minuscole" descrizione="Metti alla prova la tua capacità di adattarti ai cambi improvvisi di testo" gif="/test22.gif" /> -->
    <Challenge
      titolo="Prova a tempo"
      descrizione="Combatti contro il tempo per completare più parole possibili"
      gif="https://gifimage.net/wp-content/uploads/2017/10/countdown-clock-gif-13.gif"
      @play-game="
        (level) => router.push({ name: 'timerush', params: { level: level } })
      "
    />
    <Challenge
      titolo="Parole in libertà"
      descrizione="Confrontati con il caso e completa più parole senza senso che puoi"
      gif="https://media.giphy.com/media/sybV46NZNxLDG/giphy.gif"
      @play-game="
        (level) => router.push({ name: 'freewords', params: { level: level } })
      "
    />
    <Challenge
      titolo="Vicolo cieco"
      descrizione="Affina la tua prontezza avendo a disposizione solo poche lettere alla volta"
      gif="https://media.tenor.co/images/d31e8e9dcf4c29a5d34d9aac177cb692/tenor.gif"
      @play-game="
        (level) => router.push({ name: 'deadend', params: { level: level } })
      "
    />
  </div>
</template>

<style scoped></style>
