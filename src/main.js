import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import router from './router';
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVbk24Nk25oIo56nroa9jHfZPQ29aCOfU",
    authDomain: "typingtrainer-e86b2.firebaseapp.com",
    projectId: "typingtrainer-e86b2",
    storageBucket: "typingtrainer-e86b2.appspot.com",
    messagingSenderId: "409787799441",
    appId: "1:409787799441:web:9c7eae4c8bd0f7d689ec30"
  };

// Initialize Firebase
const appfb = initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app')
