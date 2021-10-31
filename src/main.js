import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "windi.css";

import axios from "axios";
import VueAxios from "vue-axios";
import "windi.css";
Vue.use(VueAxios, axios);
Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
