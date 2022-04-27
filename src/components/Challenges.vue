<script setup>
    import Navigation from './Navigation.vue';
</script>

<template>

<Navigation />


<div class = "chal-container">
    <!--Sfida maiuscole-->
    <div class="challenge">
        <div class="chal-title">Maiuscole e minuscole</div> 
        <div class="description">Metti alla prova la tua capacità di adattarti ai cambi improvvisi di testo</div>
    </div>
    <!--Sfida contro il tempo-->
    <div class="challenge">
        <div class="chal-title">Prova a tempo</div>
        <div class="description">Combatti contro il tempo per completare più parole possibili</div>
    </div>
    <!--Sfida parole random-->
    <div class="challenge">
        <div class="chal-title">Parole in libertà</div>
        <div class="description">Confrontati con il caso e completa più parole senza senso che puoi</div>
    </div>
     <!--Sfida letter-by-letter-->
    <div class="challenge">
        <div class="chal-title">Vicolo cieco</div>
    </div>
</div>

</template>

<style scoped>

    .chal-container{
        position:fixed;
        height:90%;
        width:100%;
        margin-top:2%;
        bottom:0;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .challenge{
        background:var(  --alt-background-color);
        margin:2%;
        height:30%;
        border-radius: 20px;
        text-align:left;
    }

    .chal-title{
        font-weight: 600;
        font-size: 40px;
        background: var(--title-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin:1%;
    }

    .description{
        font-weight: 600;
        font-size: 30px;
        color: var(--paragraph-text-color);
        width:50%;
        margin:1%;
        margin-top:3%;
    }
</style>