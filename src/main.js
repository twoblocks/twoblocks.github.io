import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import MainPage from "./pages/MainPage";
import VueI18n from 'vue-i18n'
import locale from "./constants/locale";

Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: MainPage}
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
    vuetify,
    router,
    i18n: {
      messages: {},
      sharedMessages: locale,
      locale: 'ru'
    },
    created: function () {
      if (navigator.language.includes('ru')) {
          this.$i18n.locale = 'ru'
      }
    },
    render: h => h(App)
}).$mount("#app");
