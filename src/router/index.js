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
    { path: "/test", component: () => import("../components/Test.vue") },
    {
      path: "/challenges",
      component: () => import("../components/Challenges.vue"),
    },
    {
      path: "/leaderboards",
      component: () => import("../components/Leaderboards.vue"),
    },
    {
      name: "deadend",
      path: "/deadend/:level",
      component: () => import("../components/Challenges/DeadEnd.vue"),
      props: true,
    },
    {
      path: "/chart",
      component: () => import("../components/Charts/LineChart.vue"),
    },
  ],
});

export default router;
