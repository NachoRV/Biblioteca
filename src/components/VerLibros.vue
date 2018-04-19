<template>
<div>
    <router-link to="/insertarlibro"> Añadir Libro </router-link>
    <router-link to="/hola"> Home </router-link><br>
    <h1>Lista le de libros</h1>
    <div v-for="(libro ,key) in libros" :key="key">
        <h2>Titulo: {{libro.titulo}}</h2>
        <h2>Autor: {{libro.autor}}</h2>
        <h2>Editorial: {{libro.editorial}}</h2>
        <h2>Resumen: {{libro.resumen}}</h2>
        <hr>
    </div>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'verLibros',
    created(){
        firebase.database().ref('libros/').on('value',snapshot => this.cargarLibros(snapshot.val()));
    },
 /*   mounted(){
       this.libros =  firebase.database().ref('libros/').once('value',snapshot);
        console.log(this.libros)

    },*/
    data() {
        return{
            libros: []
        }
        
    },
    methods: {
      
        cargarLibros(men) {
            this.libros = [];
            for ( let key in men){
               
                this.libros.push({
                    titulo: men[key].titulo,
                    autor:  men[key].autor,
                    isbn:  men[key].isbn,
                    editorial:  men[key].editorial,
                    resumen: men[key].resumen,
                });
            }
        }
    }
       
}
</script>
<style>

</style>
