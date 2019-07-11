import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// 새로운 StatusComponents 선언해주기
import StatusComponents from './Status.vue'

// Vue.component('컴포넌트명', 옵션)
// main.js에서 선언해준 컴포넌트 파일은 어디서든 사용가능하다
Vue.component('AppStatus', StatusComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
