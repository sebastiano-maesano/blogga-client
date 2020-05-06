import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { router } from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
  components: { App },
}).$mount("#app");
