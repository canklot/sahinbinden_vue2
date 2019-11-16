import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'



new Vue({
  el: '#app',
  render: h => h(App)
})
new Vue({
  el: '#Footer',
  render: h => h(Footer)
})
