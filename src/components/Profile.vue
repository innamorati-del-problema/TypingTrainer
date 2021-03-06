<template>
  <div v-if="!loaded">
    <h1
      class="flex h-screen items-center justify-center text-3xl text-green-500 dark:text-purple-500 lg:text-5xl"
    >
      Caricamento...
    </h1>
  </div>

  <div v-else class="flex min-h-screen flex-col">
    <div class="h-screen">
      <Navigation />
      <div
        class="scroll m-4 h-[90%] overflow-scroll rounded-xl bg-white shadow-xl transition-colors dark:bg-graphite-light"
      >
        <div class="m-5 flex flex-col items-center justify-center">
          <div v-if="!changing" class="h-28 w-28" v-html="avatar"></div>
          <div v-else class="h-28 w-28 rounded-full bg-gray"></div>
          <div
            class="flex justify-center text-slate-800 hover:cursor-pointer hover:text-green-600 dark:text-white dark:hover:text-purple-500"
            @click="changeAvatar"
          >
            <h3 class="m-2">Cambia avatar</h3>
            <font-awesome-icon
              icon="arrow-rotate-left"
              class="self-center"
            ></font-awesome-icon>
          </div>
          <h1
            class="m-2 flex text-5xl text-graphite dark:text-white xl:text-7xl"
          >
            {{ userStore.username }}
          </h1>
        </div>
        <div class="flex h-fit w-full flex-wrap">
          <div
            class="m-2 flex h-full shrink grow basis-full flex-col rounded-xl p-4 shadow shadow-gray dark:bg-graphite dark:shadow-none"
          >
            <Statistics />
          </div>

          <form
            class="m-2 flex h-full shrink grow basis-72 flex-col rounded-xl shadow shadow-gray dark:bg-graphite dark:shadow-none"
            @submit.prevent="changePassword"
          >
            <h2
              class="m-2 self-center text-lg text-green-500 dark:text-purple-500"
            >
              Cambia Password
            </h2>
            <label class="m-2 flex flex-col self-center text-center">
              <div class="dark:text-white">Password attuale</div>
              <input
                required
                class="rounded-lg border-[1px] border-gray pl-1"
                v-model="oldPassword1"
                type="password"
              />
            </label>
            <label class="m-2 mb-4 flex flex-col self-center text-center">
              <div class="dark:text-white">Nuova password</div>
              <input
                required
                class="rounded-lg border-[1px] border-gray pl-1"
                v-model="newPassword"
                type="password"
              />
            </label>
            <Button
              type="submit"
              look="primary"
              size="md"
              text="Cambia"
              :loading="loadingChangePassword"
              class="mb-3 self-center"
            />
          </form>
          <form
            class="m-2 flex h-full shrink grow basis-72 flex-col rounded-xl shadow shadow-gray dark:bg-graphite dark:shadow-none"
            @submit.prevent="changeUsername"
          >
            <h2
              class="m-2 self-center text-lg text-green-500 dark:text-purple-500"
            >
              Cambia Nome Utente
            </h2>
            <label class="m-2 flex flex-col self-center text-center">
              <div class="dark:text-white">Password attuale</div>
              <input
                required
                class="rounded-lg border-[1px] border-gray pl-1"
                v-model="oldPassword2"
                type="password"
              />
            </label>
            <label class="m-2 mb-4 flex flex-col self-center text-center">
              <div class="dark:text-white">Nuovo nome utente</div>
              <input
                required
                class="rounded-lg border-[1px] border-gray pl-1"
                v-model="newUsername"
                type="text"
              />
            </label>
            <Button
              type="submit"
              look="primary"
              size="md"
              text="Cambia"
              :loading="loadingChangeUsername"
              class="mb-3 self-center"
            />
          </form>
          <div
            class="m-2 flex h-full shrink grow basis-full flex-col rounded-xl p-4 shadow shadow-gray dark:bg-graphite dark:shadow-none"
          >
            <h2 class="self-center text-lg text-green-500 dark:text-purple-500">
              Preferenze
            </h2>

            <div class="flex justify-around">
              <div class="m-1 flex flex-col">
                <h1 class="m-2 text-graphite dark:text-white">Lingua</h1>
                <h1 class="m-2 text-graphite dark:text-white">
                  Font per utenti con dislessia
                </h1>
              </div>
              <div class="m-1 flex w-full grow flex-col justify-start">
                <select
                  class="m-2 w-full rounded-lg border-[1px] border-gray bg-white p-1 text-sm"
                >
                  <option value="it">Italiano</option>
                  <option value="en">English</option>
                </select>
                <input
                  type="checkbox"
                  v-model="dyslexic"
                  class="m-2 h-6 w-6 border-[1px] border-gray bg-white text-sm"
                  @change="changeFont"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./Navigation.vue";
import {
  getAuth,
  onAuthStateChanged,
  updatePassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import {
  getDatabase,
  ref,
  onValue,
  set,
  update,
  query,
  orderByChild,
  orderByKey,
  limitToFirst,
  equalTo,
} from "firebase/database";
import { onBeforeMount, ref as vueref } from "vue";
import { useRouter } from "vue-router";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";
import Statistics from "./Statistics.vue";
import { spawnToast } from "../errorHandler";
import { useUserStore } from "../stores/userStore";
import { useToast } from "vue-toastification";
import Button from "./Button.vue";

const db = getDatabase();
const router = useRouter();
const auth = getAuth();
const userStore = useUserStore();
const toast = useToast();
const username = vueref();
const avatar = vueref();
const changing = vueref(false);

var loaded = vueref(true);
var currentUser;

const loadingChangeUsername = vueref(false);
const loadingChangePassword = vueref(false);

var oldPassword1 = vueref("");
var oldPassword2 = vueref("");
var newPassword = vueref("");
var newUsername = vueref("");

var darkMode = vueref();

var selected = vueref();

onBeforeMount(authListener);

function authListener() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // not logged in
      router.push("/");
    } else {
      username.value = userStore.username;
      avatar.value = userStore.avatar;

      loaded.value = true;
    }
  });
}

function changeAvatar() {
  changing.value = true;
  let random = Math.random().toString(36).substr(2, 10);
  const user = auth.currentUser;
  const updates = {};
  updates["/users/" + user.uid + "/seed"] = random;
  update(ref(db), updates).then(() => {
    userStore.avatar = createAvatar(style, {
      seed: random,
      radius: 50,
      scale: 80,
    });
    avatar.value = createAvatar(style, {
      seed: random,
      radius: 50,
      scale: 80,
    });
    toast.success("Avatar cambiato con successo!", {
      timeout: 2000,
      bodyClassName: "toast",
    });
    changing.value = false;
  });
}

function changePassword() {
  loadingChangePassword.value = true;
  signInWithEmailAndPassword(auth, auth.currentUser.email, oldPassword1.value)
    .then((userCredential) => {
      const user = auth.currentUser;
      updatePassword(user, newPassword.value)
        .then(() => {
          oldPassword1.value = "";
          newPassword.value = "";
          toast.success("Password cambiata con successo!", {
            timeout: 2000,
            bodyClassName: "toast",
          });
          loadingChangePassword.value = false;
        })
        .catch((error) => {
          oldPassword1.value = "";
          newPassword.value = "";
          spawnToast(error.code);
          loadingChangePassword.value = false;
        });
    })
    .catch((error) => {
      oldPassword1.value = "";
      newPassword.value = "";
      spawnToast(error.code);
      loadingChangePassword.value = false;
    });
}

function changeUsername() {
  loadingChangeUsername.value = true;
  signInWithEmailAndPassword(auth, auth.currentUser.email, oldPassword2.value)
    .then((userCredential) => {
      const user = auth.currentUser;
      const updates = {};
      updates["/users/" + user.uid + "/username"] = newUsername.value;
      update(ref(db), updates);
      userStore.username = newUsername.value;
      oldPassword2.value = "";
      newUsername.value = "";
      toast.success("Username cambiato con successo!", {
        timeout: 2000,
        bodyClassName: "toast",
      });
      loadingChangeUsername.value = false;
    })
    .catch((error) => {
      oldPassword2.value = "";
      newUsername.value = "";
      spawnToast(error.code);
      loadingChangeUsername.value = false;
    });
}

const dyslexic = vueref(localStorage.dyslexic == "true");
function changeFont() {
  if (localStorage.dyslexic == "true") {
    document.documentElement.classList.remove("dyslexic");
    localStorage.dyslexic = "false";
    dyslexic.value = false;
  } else {
    document.documentElement.classList.add("dyslexic");
    localStorage.dyslexic = "true";
    dyslexic.value = true;
  }
}
</script>

<style scoped></style>
