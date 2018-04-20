<template>
  <div class="login">
      <h1>Ingresar</h1>
      <input type="text" v-model="email" placeholder="email"><br>
      <input type="text" v-model="contrasena" placeholder="Password"><br>
      <button  v-on:click="singIn" type="button" class="btn btn-primary">Conexion</button>
      <p> No tienes cuenta <router-link to="/singup"> crear una </router-link> </p>
  </div>
</template>
<script>

import firebase from 'firebase'
export default {
  name: 'login',
  data: function(){
      return{
          email:'',
          contrasena:'',
      }
  },
  methods: {
      login: function(){
        this.$router.replace('hola')
      },
         singIn: function() {
          firebase.auth().signInWithEmailAndPassword(this.email,this.contrasena).then(
             (user)  => {
                  this.$router.replace('hola')
              },
              function(err){
                  alert('Oops. ' +err.message)
              }
          );
      }
  }
}
</script>
<style scoped>
.login {
    margin-top: 200px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>

