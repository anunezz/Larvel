<template>
<div class="p-5 bg-dark text-white">
<h2>hola como estas Padre {{numeroPadre}} </h2>
<button class="btn btn-danger" @click="numeroPadre++">+</button>
{{nombrePadre}}
<ejemplo-component :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></ejemplo-component>
</div>
</template>

<script>

export default {
   components: {
  },

  data() {
    return {
        numeroPadre:0,
        nombrePadre:''
    }
  },
methods: {
}
}
</script>


