<template>
<div>
  <Appnav></Appnav>
  <h1>Biblioteca</h1>
<!--<router-link to="/insertarlibro"> Añadir Libro </router-link>
 <router-link to="/verLibros"> Ver libros </router-link>
  <button v-on:click="logout">Logout</button>-->
</div>

</template>

<script>
import firebase from 'firebase'
import Appnav from '@/components/AppNav'
export default {
  name: 'HelloWorld',
  components: { Appnav },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
bottom{
  padding: 10px 20px;
  background-color: #42b983;
  color:white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;

}
</style>
