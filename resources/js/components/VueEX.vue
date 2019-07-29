<template>
<div class="row p-3">
  <div class="col-md-12">
      <h2>Ejercicios vue.js</h2>
      <hr>
  </div>

  <div class="col-md-12">
      <div class="form-group">
            <div class="input-group mb-3">
                <input type="text" @keyup.enter="agregarFruta" v-model="fruta" class="form-control" placeholder="Agregar fruta" aria-label="Agregar fruta" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button @click="agregarFruta()" class="btn btn-outline-secondary btn-primary" style="color: #fff;" type="button">Agregar</button>
                </div>
            </div>  
      </div>
  </div>

<div class="col-md-12">
    <ul class="list-group">
        <li v-for="(item,index) in frutas" :key="index" class="list-group-item">
            <div role="alert"  :class="['row','justify-content-between','aling-item-center','alert', item.estado?'alert-success':'alert-danger']">
                <div class="col-md-4">
                        <input type="hidden" :value="item.id = index">
                        <input type="text" v-model="item.nombre" class="form-control" placeholder="Fruta" aria-label="Fruta" aria-describedby="Nombre de la fruta">
                </div>
                <div class="col-md-4">
                        <div class="input-group has-error">
                        <input type="text" v-model.number="item.cantidad" required class="form-control number" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button"  @click="item.cantidad++">+</button>
                            <button class="btn btn-outline-secondary" type="button"  @click="(item.cantidad > 0)?item.cantidad-- : 0">-</button>
                        </div>
                        </div>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger" @click="eliminarFruta(item.id)">Eliminar</button>
                    <button class="btn btn-primary" @click="actualizarFruta(frutas,item.id)" >Actualizar</button>
                </div>
            </div>
        </li>
        <li class="list-group-item">
            <div class="row">
                <div class="col-md-6">
                    <strong>Toatal: </strong> {{  sumarFrutas }}
                </div>
            </div>
        </li>
    </ul>
</div>
<!-- <vueexhijo></vueexhijo> -->
</div>


</template>

<script>

export default {
data(){
    return{
    frutas:[],
    fruta:'',
    total:0
    }
},
methods:{
agregarFruta(i){
    let me = this;
    if(!me.fruta){
        alert("Necesitas agregar una fruta.");
        return;
    }   
    me.frutas.push({id:0, nombre: me.fruta, cantidad: 0, estado: false});
    me.fruta = '';
},
actualizarFruta(frutas,id){
let me = this;
 console.log(id);
 if( (id != 0 && id <= 0) && ( frutas.nombre =='')  ){
 alert("Este campo no puede estar vacio.");
 return;
 }
   
 alert("As actualizado esta fruta");

},
eliminarFruta(id){
console.log('eliminarFruta();');
console.log(id);
let me = this;
    me.frutas = me.frutas.filter(item => item.id != id);
    
}


},
computed:{
 sumarFrutas(){
    let me = this;
    me.total = 0;
    for(const fruta of me.frutas){
      me.total = me.total + fruta.cantidad;
    }
    return me.total;
 }
},
mounted(){

}
}
</script>



