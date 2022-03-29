import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Chat from "../components/Chat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({ name: "HomeView" });
        }
      },
    },
  ],
});

export default router;
