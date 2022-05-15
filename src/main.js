import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import router from "./router";
import { getDatabase } from "firebase/database";
import "./index.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faArrowLeft,
  faSun,
  faMoon,
  faArrowRotateLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faArrowLeft, faSun, faMoon, faArrowRotateLeft, faBars);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVbk24Nk25oIo56nroa9jHfZPQ29aCOfU",
  databaseURL:
    "https://typingtrainer-e86b2-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "typingtrainer-e86b2.firebaseapp.com",
  projectId: "typingtrainer-e86b2",
  storageBucket: "typingtrainer-e86b2.appspot.com",
  messagingSenderId: "409787799441",
  appId: "1:409787799441:web:9c7eae4c8bd0f7d689ec30",
};

// Initialize Firebase
const appfb = initializeApp(firebaseConfig);
const database = getDatabase(appfb);

export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(Toast);
app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
