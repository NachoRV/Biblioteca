<template>
<div>
    <input type="text" v-model="libro.titulo" placeholder="Título del libro"><br>
    <input type="text" v-model="libro.autor" placeholder="Autor"><br>
    <input type="text" v-model="libro.editorial" placeholder="Editorial"><br>
    <input type="text" v-model="libro.isbn" placeholder="ISBN"><br>
    <textarea rows="4" cols="50" v-model="libro.resumen"></textarea><br>
    <button v-on:click="agregarLibro">Enviar</button>
    <pre>{{ $data }}</pre>
</div>

  
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'insertarLibro',
    data() {
        return {
            libro:
                  {
                    titulo:'',
                    autor: "",
                    isbn: "",
                    editorial: "",
                    resumen: "",

                }
        }
    },
    methods: {
        agregarLibro() {
            console.log(this.libro)
            firebase.database().ref('libros/').push(
                this.libro,
         );
       },
    
    }
}
</script>

<style scoped>

</style>

