<template>
<div>
    <div id="app">
      <!--<img src="./assets/logo.png">-->
      <router-view/>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
    data () {
    return {

      usuario: firebase.auth().currentUser,
    }
  },
    methods: {
    logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
