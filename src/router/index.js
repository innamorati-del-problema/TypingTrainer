import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/Welcome/LandingPage.vue")},
        { path: "/practice", component: () => import("../components/Practice.vue")},
        { path: "/textpractice", component: () => import("../components/TextPractice.vue")},
        { path: "/letterpractice", component: () => import("../components/SingleLetterPractice.vue")},
        { path: "/profile", component: () => import("../components/Profile.vue")},
    ]
});

export default router;