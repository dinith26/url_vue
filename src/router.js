import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/add",
    name: "/add",
    component: () => import("./components/Generator")
  },
  {
    path: "/:code",
    name: "/",
    component: () => import("./components/Generator")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;