<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { useRouter } from "vue-router";

const router = useRouter();

let email;
let password;
let username;
let paese;
let checkPassword;

function register(email, password, checkPassword, username, paese) {

    if (password !== checkPassword) {
        alert("le password non corrispondono");
        return;
    }


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            writeUserData(user.uid, username, email, user.uid, paese);
            router.push("/home");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error);
            // ..
        });
};

function writeUserData(userId, name, email, seed, paese) {
    const db = getDatabase();
    set(ref(db, '/users/' + userId), {
        username: name,
        email: email,
        seed: seed,
        country: paese,
    });
};


</script>

<template>

    <div class="landing-box">
            <div class="back" @click="$emit('close-register')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
            </div>
            <h5 class="card-title">Registrati</h5>
            <div class="box-content"> 
                <h4 class="card-paragraph-s">Email</h4>
                <input type="text"  placeholder="@" v-model="email">
                <h4 class="card-paragraph-s">Username</h4>
                <input type="text"  placeholder="Username" v-model="username">
                <h4 class="card-paragraph-s">Password</h4>
                <input placeholder="Password" type="password" v-model="password">
                <h4 class="card-paragraph-s">Conferma Password</h4>
                <input placeholder="Password" type="password" v-model="checkPassword">
                <h4 class="card-paragraph-s">Paese</h4>
                <select placeholder="Paese" v-model="paese">
                    <option value='not-selected'></option>
                    <option value="italia">Italia</option>
                    <option value="other">Altro</option>
                </select>
                <br>
            </div>

            <div class="buttons">                
                <button id='registrati' class="botton b-primary b-xl" @click="register(email, password, checkPassword, username, paese)">Registrati</button> 
            </div>
    </div>

   
    


    

</template>

<style scoped lang="scss">

.box-content {


    h4 {
        margin-top: 10px;
        color: var(--paragraph-text-color);
    }
    width: 55%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: start;   
    
}



.back {
  align-self: start;
  margin: 20px 0 -30px 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
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
.landing-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    bottom: 10px;
    align-self: center;
}

.botton {
    align-self: center;
    margin-bottom: 20px;
}

input {
  height: 30px;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--secondary-color);
  &::placeholder {
    font-family: "IBM Plex Mono", monospace;
  }

  &[type="text"]
    {
        font-family: "IBM Plex Mono", monospace;
    }
}

select {
  height: 30px;
  width: 100%;
  padding: 2px 0 2px 6px;
  border-radius: 6px;
  border: 1px solid var(--secondary-color);
  font-family: "IBM Plex Mono", monospace;

    option
    {
        font-family: "IBM Plex Mono", monospace;
    }

}



</style>