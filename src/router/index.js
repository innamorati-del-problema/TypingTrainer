import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/Welcome/LandingPage.vue")},
        { path: "/home", component: () => import("../components/Practice.vue")},
        { path: "/test", component: () => import("../components/Test.vue")},
    ]
});

export default router;