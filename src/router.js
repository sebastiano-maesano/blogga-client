import VueRouter from "vue-router";

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("./components/LoginComponent"),
    },
  ],
});
