<template>
    <div class="sing-up">
        <p>Vamos a crear una cuenta!!!</p>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="contrasena" placeholder="contraseña"><br>
        <button v-on:click="singUp">Enviar</button>
        <span>Regrasa para <router-link to="/login">Ingresar</router-link>  </span>
    </div>
  
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'singUp',
    data: function() {
        return {
            email:'',
            contrasena:'',
        }
    },
  methods:{
      singUp: function() {
          firebase.auth().createUserWithEmailAndPassword(this.email,this.contrasena).then(
              function (user) {
                  alert('Cuenta creada')
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
.sing-up {
    margin-top: 40px;
}
input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>
