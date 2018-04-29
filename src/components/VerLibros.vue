<template>
<div>
    <Appnav></Appnav>   
    <h1>Lista le de libros</h1>
    <label for="buscarTitulo">Buscar:</label>
    <input type="radio" id="titulo" value="titulo" v-model="picked">
    <label for="titulo">Título</label>
    <input type="radio" id="editorial" value="editorial" v-model="picked">
    <label for="editorial">Editorial</label>
    <input type="radio" id="autor" value="autor" v-model="picked">
    <label for="editorial">Autor</label>
    <br>
    <input type="search" v-model="busqueda" >
    <hr>
    <div v-for="(libro ,key) in bucarTitulo" :key="key">
        <div class="card tarjetas">
            <div class="card-body">
            <h4 class="card-title">Titulo: <span contenteditable="true" @blur="actualizarTitulo(libro, $event)" >{{libro.titulo}}</span></h4>
            <p class="card-text" >Autor: <span contenteditable="true" @blur="actualizarAutor(libro, $event)">{{libro.autor}}</span> </p>
            <p class="card-text" >Editorial: <span contenteditable="true" @blur="actualizarEditorial(libro, $event)">{{libro.editorial}} </span>Isbn: <span contenteditable="true" @blur="actualizarIsbn(libro, $event)">{{libro.isbn}}</span> </p>
            <p class="card-text" >Posicion: <span contenteditable="true" @blur="actualizarPosicion(libro, $event)">{{libro.posicion}} </span></p>
            <p class="card-text" >Resumen: <span contenteditable="true" @blur="actualizarResumen(libro, $event)">{{libro.resumen}}</span></p>
            <button @click="eliminarLibro(libro, $event)">Borrar</button>
            </div>
        </div>
    </div>  
    <top></top>
</div> 
</template>
<script>
import firebase from 'firebase'
import Appnav from '@/components/AppNav'
import top from '@/components/top'

export default {
    name: 'verLibros',
    components: { Appnav, top },
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
            busqueda:"",
            picked: "titulo", 
        }
        
    },
    methods: {
        cargarLibros(men) {
            const user = firebase.auth().currentUser.uid;
            this.libros = [];
            for ( let key in men){
                if(men[key].user === user){
                 if(men[key].posicion = 'null'){
                    var pos = " - ";
                    console.log("en if uno". posicion);
                 } else {
                     pos = men[key].posicion;
                 }
                    this.libros.push({
                        titulo: men[key].titulo,
                        autor:  men[key].autor,
                        isbn:  men[key].isbn,
                        editorial:  men[key].editorial,
                        resumen: men[key].resumen,
                        user: men[key].user,
                        posicion: pos,
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
       actualizarPosicion(libro, event) {
           firebase.database().ref('libros/'+libro.key).update({
               posicion: event.target.innerHTML
           })
       },
       eliminarLibro(libro, event) {
           console.log(libro)
          
          if(confirm("¿Seguro que quieres borrar el libro?"))
          firebase.database().ref('libros/'+libro.key).remove();
               
           
       },
       
    },
    computed: {
        bucarTitulo(){
            return this.libros.filter((lib) =>{
                if (this.picked == "titulo"){
                  return lib.titulo.includes(this.busqueda)  
                }else if (this.picked == "editorial") {
                    return lib.editorial.includes(this.busqueda)
                }else{
                    return lib.autor.includes(this.busqueda)
                }
                

            })

        }
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
