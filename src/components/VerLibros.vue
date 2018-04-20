<template>
<div>
    <Appnav></Appnav>   
    <h1>Lista le de libros</h1>
    <hr>
    <div v-for="(libro ,key) in libros" :key="key">
        <div class="card tarjetas">
            <div class="card-body">
            <h4 class="card-title">Titulo: <span contenteditable="true" @blur="actualizarTitulo(libro, $event)" >{{libro.titulo}}</span></h4>
            <p class="card-text" >Autor: <span contenteditable="true" @blur="actualizarAutor(libro, $event)">{{libro.autor}}</span> </p>
            <p class="card-text" >Editorial: <span contenteditable="true" @blur="actualizarEditorial(libro, $event)">{{libro.editorial}} </span>Isbn: <span contenteditable="true" @blur="actualizarIsbn(libro, $event)">{{libro.isbn}}</span> </p>
            <p class="card-text" >Resumen: <span contenteditable="true" @blur="actualizarResumen(libro, $event)">{{libro.resumen}}</span></p>
            <a href="#" class="card-link">Borrar</a>
            </div>
        </div>
    </div>
</div> 
</template>
<script>
import firebase from 'firebase'
import Appnav from '@/components/AppNav'

export default {
    name: 'verLibros',
    components: { Appnav },
    created(){
        firebase.database().ref('libros/').on('value',snapshot => this.cargarLibros(snapshot.val()));
    },
 /*   mounted(){
       this.libros =  firebase.database().ref('libros/').once('value',snapshot);
        console.log(this.libros)

    },*/
    data() {
        return{
            libros: [],
            
        }
        
    },
    methods: {
        cargarLibros(men) {
            const user = firebase.auth().currentUser.uid;
            this.libros = [];
            for ( let key in men){
                if(men[key].user === user){
               
                    this.libros.push({
                        titulo: men[key].titulo,
                        autor:  men[key].autor,
                        isbn:  men[key].isbn,
                        editorial:  men[key].editorial,
                        resumen: men[key].resumen,
                        user: men[key].user,
                        key: key
                    });
                }
            }
        },
        actualizarTitulo(libro, event){
           firebase.database().ref('libros/'+libro.key).update({
               titulo: event.target.innerHTML
           })
        },
        actualizarAutor(libro, event) {
           firebase.database().ref('libros/'+libro.key).update({
               autor: event.target.innerHTML
           })
       },
        actualizarEditorial(libro, event) {
           firebase.database().ref('libros/'+libro.key).update({
               editorial: event.target.innerHTML
           })
       },
        actualizarResumen(libro, event) {
           firebase.database().ref('libros/'+libro.key).update({
               resumen: event.target.innerHTML
           })
       },
         actualizarIsbn(libro, event) {
           firebase.database().ref('libros/'+libro.key).update({
               isbn: event.target.innerHTML
           })
       },
       
    }
       
}
</script>
<style>
h1{
    margin-top: 40px;
}
.tarjetas{
    margin: 10px;
}
</style>
