<template>
<div class="py-3 bg-success">
<h4>Componente hijo {{numero}}</h4>
<h4>Nombre: {{nombre}}</h4>
</div>
</template>

<script>

export default {
   components: {
  },
  props:['numero'],
  data() {
    return {
      nombre:'Ignacio'
    }
  },
methods: {
},
mounted(){
  this.$emit('nombreHijo',this.nombre);
}
}
</script>


