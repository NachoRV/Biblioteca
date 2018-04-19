<template>
  <h1>Hola</h1>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'verLibros',
    mounted(){
       this.libros =  firebase.database().ref('libros/').once('value');
        console.log(this.libros)

    },
    data() {
        return{
            libros: []
        }
        
    }
    
}
</script>
<style>

</style>
