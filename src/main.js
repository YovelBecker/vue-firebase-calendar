import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueTextareaAutosize)

firebase.initializeApp({
  apiKey: "AIzaSyAauj0-vqB5DufjM3Kpy3pcK3WSzhIVcfE",
  authDomain: "vue-calendar-5b3e0.firebaseapp.com",
  databaseURL: "https://vue-calendar-5b3e0.firebaseio.com",
  projectId: "vue-calendar-5b3e0",
  storageBucket: "vue-calendar-5b3e0.appspot.com",
  messagingSenderId: "927733517940",
  appId: "1:927733517940:web:41bf8feef9c58c76e08b21"
})

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
