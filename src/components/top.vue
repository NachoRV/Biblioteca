<template>
<button class=" top btn btn-primary">  <a href="#">Up!</a></button>
   
</template>
<script>
export default {
    name: 'top',
  
}

</script>
<style scpped>
a:link{
    text-decoration: none;
    
}
a{
    color: white ;
}
.top{ 
    
    position: fixed;
    bottom: 2em;
    right: 2rem;    
    padding: 1em;
    border-radius: 50%;

   /* display: none; */
}

.top:hover {    
    background-color: rgba(135, 135, 135, 0.50);
}
</style>
