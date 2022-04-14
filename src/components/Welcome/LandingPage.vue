<script setup>
    import Login from './Login.vue';
    import Register from './Register.vue';
    import Welcome from './Welcome.vue';


    

</script>

<template>
    <h1 class="page-title">TypingTrainer</h1>

    <Welcome/>
    <!-- <Login/>
    <Register/> -->
</template>

<style>

.page-title {
    font-weight: 700;
    font-size: 100px;
    line-height: 130px;
    background: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4px 16px rgba(84, 169, 130, 0.6);
    margin-bottom: 80px;

}

.page-subtitle {
    font-weight: 600;
    font-size: 50px;
    background: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-paragraph {
    font-weight: 600;
    font-size: 30px;
    color: #484848;
}

.landing-box {
    max-width: 550px;
    margin: auto;
    min-height: 600px;
    border-radius: 20px;
    background: white;
    box-shadow: 0px 4px 47px -9px #7E7E7E;
}



.buttone-xl {
    width: 250px;
    height: 60px;
    border-radius: 4px;
    font-size: 1.5em;
    border: 0;
    
}   
.buttone-pisello {
    color: white;
    background: linear-gradient(178.19deg, #72C53F 1.53%, #5A9D31 132.54%);
    box-shadow: 0px 4px 18px rgba(84, 169, 130, 0.5);
}

.buttone-crossing {
    color: white;
    background: linear-gradient(180deg, #00B7C1 0%, #1B8AB9 100%);
    box-shadow: 0px 4px 18px rgba(147, 236, 241, 0.5);
}
  

</style>