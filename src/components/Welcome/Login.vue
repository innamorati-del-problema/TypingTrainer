<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { getDatabase, ref, onValue } from "firebase/database";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";

const router = useRouter();

function login(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push("/practice");

      const db = getDatabase();
      let userRef = ref(db, "/users/" + user.uid);
      onValue(userRef, (snapshot) => {
        const currentUser = snapshot.val();
        localStorage.username = currentUser.username;
        localStorage.avatar = createAvatar(style, {
          seed: currentUser.seed,
          radius: 50,
          scale: 80,
        });
      });

      // ...
    })
    .catch((error) => {
      alert(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

let email = "";
let password = "";
</script>

<template>
  <div
    class="mx-auto flex h-5/6 w-screen flex-col justify-evenly rounded-xl bg-white p-4 drop-shadow-2xl dark:bg-graphite-light sm:my-12 sm:h-[26rem] sm:w-96"
  >
    <font-awesome-icon
      @click="$emit('close-login')"
      icon="arrow-left"
      class="absolute top-5 left-5 h-5 hover:text-green-500 dark:text-white dark:hover:text-purple-500"
    />

    <h5 class="mt-5 text-4xl text-green-500 dark:text-purple-500">Accedi</h5>

    <form
      @submit.prevent="login(email, password)"
      class="flex grow flex-col justify-evenly"
    >
      <label class="flex flex-col justify-around">
        <div class="text-md dark:text-white">Email</div>
        <input
          class="w-4/6 self-center rounded border-[1px] border-graphite p-1 text-sm"
          type="text"
          placeholder="@"
          v-model="email"
        />
      </label>
      <label class="flex flex-col">
        <div class="text-md dark:text-white">Password</div>
        <input
          class="w-4/6 self-center rounded border-[1px] border-graphite p-1 text-sm"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </label>
      <button type="submit" class="custom-button-big primary">Accedi</button>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
