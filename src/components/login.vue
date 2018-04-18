<template>
  <div class="login">
      <h3>Ingresar</h3>
      <input type="text" v-model="email" placeholder="email"><br>
      <input type="text" v-model="contrasena" placeholder="Password"><br>
      <button v-on:click="singIn">Conexion</button>
      <p> No tienes cuenta <router-link to="/singup"> crea una </router-link> </p>
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
        this.$router.replace('/hola')
      },
         singIn: function() {
          firebase.auth().signInWithEmailAndPassword(this.email,this.contrasena).then(
              function (user) {
                  alert('Hola estas conectado....')
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
    margin-top: 40px;
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

