<script setup>
    import Navigation from './Navigation.vue';
</script>

<template>

<Navigation />


<div class = "chal-container">
    <!--Sfida maiuscole-->
    <div class="challenge bg-white dark:bg-black shadow-md">
        <div class="info">
            <div class="text-3xl text-green dark:text-purple">Maiuscole e minuscole</div>
            <div class="description dark:text-white">Metti alla prova la tua capacità di adattarti ai cambi improvvisi di testo</div>
        </div>
        <div class="button"><button class="botton b-primary b-m">Gioca!</button></div>
    </div>
    <!--Sfida contro il tempo-->
    <div class="challenge">
        <div class="info">
            <div class="chal-title">Prova a tempo</div>
            <div class="description">Combatti contro il tempo per completare più parole possibili</div>
        </div>
        <div class="button"><button class="botton b-primary b-m">Gioca!</button></div>
    </div>
    <!--Sfida parole random-->
    <div class="challenge">
        <div class="info">
            <div class="chal-title">Parole in libertà</div>
            <div class="description">Confrontati con il caso e completa più parole senza senso che puoi</div>
        </div>
        <div class="button"><button class="botton b-primary b-m">Gioca!</button></div>
    </div>
     <!--Sfida letter-by-letter-->
    <div class="challenge">
        <div class="info">
            <div class="chal-title">Vicolo cieco</div>
            <div class="description">Affina la tua prontezza avendo a disposizione solo poche lettere alla volta</div>
        </div>
        <div class="button"><button class="botton b-primary b-m">Gioca!</button></div>

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
        display: flex;
        flex-wrap: wrap;
    }

    .challenge{
        margin:10px;
        border-radius: 20px;
        text-align:left;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        flex-basis: 700px;
        flex-grow: 1;
        flex-wrap: wrap;

    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 60%;
        margin: 25px;
        flex-basis: 550px;
    }

    .button {
        align-self: center;
        margin-right: 25px;

    }

    .chal-title{
        font-weight: 600;
        font-size: 30px;
        /* background: var(--title-color); */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin:1%;
    }

    .description{
        font-weight: 600;
        font-size: 20px;
        margin:1%;
        margin-top:20px;
    }

</style>