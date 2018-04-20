<template>
<div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand/logo -->
   
    <router-link to="/hola" class="navbar-brand" > Biblioteca</router-link>
    
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/hola" class="nav-link"> Home </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/insertarlibro" class="nav-link"> Añadir Libro </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/verLibros" class="nav-link" >Ver libros </router-link>
      </li>
    <li class="nav-item">
        <a class="nav-link" v-on:click="logout">Salir</a>
      </li>
    </ul>
  </nav>

    <div id="app">
      <!--<img src="./assets/logo.png">-->
      <router-view/>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Appnav',
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

</style>
