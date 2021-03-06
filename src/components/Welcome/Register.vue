<script setup>
import { createAvatar } from "@dicebear/avatars";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { useRouter } from "vue-router";
import { spawnToast } from "../../errorHandler";
import { useUserStore } from "../../stores/userStore";
import * as style from "@dicebear/adventurer-neutral";
import { ref as vueref } from "vue";
import Button from "../Button.vue";
const router = useRouter();
const userStore = useUserStore();
const loading = vueref(false);

let email;
let password;
let username;
let paese;
let checkPassword;

function register(email, password, checkPassword, username, paese) {
  loading.value = true;
  if (password !== checkPassword) {
    spawnToast("auth/passwords-dont-match");
    loading.value = false;
    return;
  }

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      writeUserData(user.uid, username, email, user.uid, paese);

      // ...
    })
    .catch((error) => {
      spawnToast(error.code);
      loading.value = false;
      // ..
    });
}

async function writeUserData(userId, name, email, seed, paese) {
  const db = getDatabase();

  userStore.username = name;
  userStore.country = paese;
  userStore.uid = userId;
  userStore.avatar = createAvatar(style, {
    seed: seed,
    radius: 50,
    scale: 80,
  });

  set(ref(db, "/users/" + userId), {
    username: name,
    email: email,
    seed: seed,
    country: paese,
  })
    .then(() => {
      router.push("/practice");
      loading.value = false;
    })
    .catch((error) => {
      spawnToast(error.code);
      loading.value = false;
    });
}
</script>

<template>
  <div
    class="mx-auto flex h-5/6 w-screen flex-col justify-evenly rounded-xl bg-white p-4 drop-shadow-2xl dark:bg-graphite-light sm:my-12 sm:h-[26rem] sm:w-96"
  >
    <font-awesome-icon
      @click="$emit('close-register')"
      icon="arrow-left"
      class="absolute top-5 left-5 h-5 hover:text-green-500 dark:text-white dark:hover:text-purple-500"
    />
    <h5 class="text-3xl text-green-500 dark:text-purple-500">Registrati</h5>

    <form
      @submit.prevent="
        register(email, password, checkPassword, username, paese)
      "
      class="flex grow flex-col justify-evenly"
    >
      <label class="mt-1 flex flex-col dark:text-white">
        Email
        <input
          required
          class="h-6 w-4/6 self-center rounded border-[1px] border-graphite p-2 text-xs dark:text-black"
          type="text"
          placeholder="@"
          v-model="email"
        />
      </label>
      <label class="mt-1 flex flex-col dark:text-white">
        Username
        <input
          required
          class="h-6 w-4/6 self-center rounded border-[1px] border-graphite p-2 text-xs dark:text-black"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </label>
      <label class="mt-1 flex flex-col dark:text-white">
        Password
        <input
          required
          class="h-6 w-4/6 self-center rounded border-[1px] border-graphite p-2 text-xs dark:text-black"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </label>
      <label class="mt-1 flex flex-col dark:text-white">
        Conferma Password
        <input
          required
          class="h-6 w-4/6 self-center rounded border-[1px] border-graphite p-2 text-xs dark:text-black"
          type="password"
          placeholder="Conferma Password"
          v-model="checkPassword"
        />
      </label>
      <label class="mt-1 flex flex-col dark:text-white">
        Paese
        <select
          required
          class="h-6 w-4/6 self-center rounded border-[1px] border-graphite bg-white text-xs dark:text-black"
          placeholder="Paese"
          v-model="paese"
        >
          <option class="text-xs" value="not-selected"></option>
          <option class="text-xs" value="italia">Italia</option>
          <option class="text-xs" value="other">Altro</option>
        </select>
      </label>
      <Button
        type="submit"
        look="primary"
        size="md"
        text="Registrati"
        :loading="loading"
        class="mt-4 self-center"
      />
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
