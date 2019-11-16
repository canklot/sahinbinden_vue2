import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'


new Vue({
  el: '#Header',
  render: h => h(Header)
})

new Vue({
  el: '#app',
  render: h => h(App)
})
