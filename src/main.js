import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/login/:testVar",
      component: () => import("./components/LoginComponent"),
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
  components: { App },
}).$mount("#app");
