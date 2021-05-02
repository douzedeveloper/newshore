import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Api from "./plugins/api";
import axios from "axios";
import VueAxios from "vue-axios";
import VueToast from "vue-toast-notification";
import Dialog from "./lib/dialog";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.config.productionTip = false;
Vue.use(VueToast);
Vue.use(VueAxios, axios);
Vue.use(Api);

Vue.use(Dialog, {
  plugins: {
    store,
    vuetify,
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
