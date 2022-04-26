<script setup>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

function login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push("/practice");
    // ...
    })
    .catch((error) => {
      alert(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

let email = "";
let password = "";

</script>

<template>

    <div class="landing-box">
      <div class="back" @click="$emit('close-login')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
      </div>
      <div class="fields">
        <div class="box-content">
          <h5 class="card-title">Accedi</h5>
          <h4 class="card-paragraph">Email</h4>
          <input type="text"  placeholder="@" v-model="email">
          <h4 class="card-paragraph">Password</h4>
          <input type="password" placeholder="Password" v-model="password">
          <br>
        </div>
        <div class="buttons">
          <button class="botton b-primary b-xl" @click="login(email, password)">Accedi</button>
        </div>
      </div>
        

    </div>

</template>

<style scoped lang="scss">

.box-content {


    h4 {
    margin-top: 20px;
    }
}


.landing-box {
  display: flex;
  flex-direction: column;
}
.box-content {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back {
  align-self: start;
  margin: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  svg
  {
    width: 20px;
    fill: var(--secondary-color);
  }
  &:hover {
    svg
    {
      fill: var(--primary-color);
    }
  }
}
.botton {
  margin: 30px;
}

.buttons {
}

.fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

input {
  height: 35px;
  width: 130%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--secondary-color);
  &::placeholder {
    font-family: "IBM Plex Mono", monospace;
  }
}

</style>