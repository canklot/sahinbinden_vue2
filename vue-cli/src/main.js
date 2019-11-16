import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Emlak from './Emlak.vue'
import Laptop from './Laptop.vue'
import Anasayfamockup from './Anasayfamockup.vue'

new Vue({
  el: '#Header',
  render: h => h(Header)
})

new Vue({
  el: '#Laptop',
  render: h => h(Laptop)
})


new Vue({
  el: '#Footer',
  render: h => h(Footer)
})
