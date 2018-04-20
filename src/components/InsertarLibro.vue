<template>
<div>
    <Appnav></Appnav>
    <h1>Añadir libros</h1><hr>
    <div class="form-group row">
        <label  class="col-sm-3 col-form-label">Titulo del Libro</label>
        <div class="col-sm-8">
            <input type="text" v-model="libro.titulo" class="form-control" placeholder="Título del libro">
        </div>
    </div>
    <div class="form-group row">
        <label  class="col-sm-3 col-form-label">Autor</label>
        <div class="col-sm-8">
            <input type="text" v-model="libro.autor" class="form-control" placeholder="Autor">
        </div>
    </div>
    <div class="form-group row">
        <label  class="col-sm-3 col-form-label">Editorial</label>
        <div class="col-sm-8">
            <input type="text" v-model="libro.editorial"  class="form-control" placeholder="Editorial">
        </div>
    </div>
    <div class="form-group row">
        <label  class="col-sm-3 col-form-label">ISBN</label>
        <div class="col-sm-8">
            <input type="text" v-model="libro.isbn" class="form-control"  placeholder="ISBN">
        </div>
    </div>
     <div class="form-group row">
        <label  class="col-sm-3 col-form-label">Resumen</label>
        <div class="col-sm-8">
            <textarea rows="4" cols="50" v-model="libro.resumen" class="form-control" ></textarea>
        </div>
    </div>
    <button v-on:click="agregarLibro" type="button" class="btn btn-primary">Enviar</button>
    <pre>{{ $data }}</pre>
</div>

  
</template>
<script>
import firebase from 'firebase'
import Appnav from '@/components/AppNav'
export default {
    name: 'insertarLibro',
    components: { Appnav },
    data() {
        return {
            libro:
                  {
                    titulo:'',
                    autor: "",
                    isbn: "",
                    editorial: "",
                    resumen: "",
                    user: firebase.auth().currentUser.uid,

                }
        }
    },
    methods: {
        agregarLibro() {
            var user = firebase.auth().currentUser.displayName;
            console.log(user)
            console.log(this.libro)
            firebase.database().ref('libros/').push(
                this.libro,
         );
       },
    }
}
</script>

<style scoped>
h1{
    margin-top: 40px;
}
input{

    margin: 5px;
}

</style>

