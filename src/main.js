// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyAXG0bFlLzg5nlmcjRX3PALiFDzQFPkc",
    authDomain: "biblioteca-irv.firebaseapp.com",
    databaseURL: "https://biblioteca-irv.firebaseio.com",
    projectId: "biblioteca-irv",
    storageBucket: "biblioteca-irv.appspot.com",
    messagingSenderId: "300457440563"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  firebase.auth().onAuthStateChanged(function (user) {

    if (!app){
      new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })

    }
    
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
