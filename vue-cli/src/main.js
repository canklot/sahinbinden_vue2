import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'

import Anasayfamockup from './Anasayfamockup.vue'

new Vue({
  el: '#Header',
  render: h => h(Header)
})

new Vue({
  el: '#Anasayfamockup',
  render: h => h(Anasayfamockup)
})


new Vue({
  el: '#Footer',
  render: h => h(Footer)
})
