import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Emlak from './Emlak.vue'
import Laptop from './Laptop.vue'
import Anasayfamockup from './Anasayfamockup.vue'
import Anasayfa from './Anasayfa.vue'
import VueRouter from "vue-router"
import {routes} from "./routes";
import VueMeta from 'vue-meta'
import Meta from 'vue-meta'

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.use(VueRouter);
Vue.use(Meta)
const router = new VueRouter({
routes
  });

new Vue({
  el: '#Header',
  render: h => h(Header)
})

new Vue({
  el: '#Anasayfa',
  router,
  render: h => h(Anasayfa)
})


new Vue({
  el: '#Footer',
  render: h => h(Footer)
})
