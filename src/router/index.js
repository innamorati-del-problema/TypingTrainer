import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Welcome/LandingPage.vue"),
    },
    {
      path: "/practice",
      component: () => import("../components/Challenges/Practice.vue"),
    },
    { path: "/profile", component: () => import("../components/Profile.vue") },
    
    {
      path: "/challenges",
      component: () => import("../components/Challenges.vue"),
    },
    {
      path: "/leaderboards",
      component: () => import("../components/Leaderboards.vue"),
    },
    {
      name: "timerush",
      path: "/timerush/:level",
      component: () => import("../components/Challenges/TimeRush.vue"),
      props: true,
    },
    {
      name: "deadend",
      path: "/deadend/:level",
      component: () => import("../components/Challenges/DeadEnd.vue"),
      props: true,
    },
    {
      name: "freewords",
      path: "/freewords/:level",
      component: () => import("../components/Challenges/FreeWords.vue"),
      props: true,
    },
  ],
});

export default router;
