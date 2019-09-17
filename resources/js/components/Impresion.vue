<template>
<div class="container my-2">
<div class="row">
<div class="col-md-12">
    <h2>Impresion</h2>
    <hr>
</div>



<div class="col-md-12">
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Impresión</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) of arregloPersonas" :key="index">
        <td> {{item.nombre}} {{item.apellidos}}</td>
        <td v-text="item.edad"></td>
        <td> <button type="button" class="btn btn-primary" @click="abrirModal('Persona',item)">Imprimir</button>  </td>
      </tr>
    </tbody>
  </table>
</div>




</div>
  
  <!-- tabla de personas -->
  

  <!-- Modal -->
  <div class="modal fade" id="Modal" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" v-text="tituloModal"></h4>
          <!-- <button type="button" class="close" @click="cerrarModal">&times;</button> -->
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
                <label for="validationServer013">Folio:</label>
                <input type="text" v-model="folio" class="form-control is-valid" placeholder="Folio"
                 value="Mark" disabled="true"> <!-- is-valid -->
                <!-- <div class="valid-feedback">
                Looks good!
                </div> -->
            </div>
            <div class="col-md-12">
                <label for="FolioScanner">Folio Scanner:</label>
                <input type="text" 
                    v-model="arregloImpresion.folioScanner" 
                      class="form-control" 
                placeholder="Folio Scanner"
                     @keyup="validarFolio">
            </div> 

<div class="col-md-12">
  <div class="hoja my-3" style="padding: 5px;">
      <div  
      v-for="(item,index) in  arrayEtiqueta" :key="index"
      class="etiqueta my-1" :class="{'etiquetaOk': item.seleccionado }"
      @click="seleccionarEtiqueta(item)"
      ></div>
  </div>
</div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="cerrarModal()">Close</button>
          <button type="button" 
                 class="btn btn-danger" 
             :disabled="btnImprimirdisabled" 
                @click="imprimir(arregloImpresion)"
                data-toggle="modal" data-target=".bd-example-modal-sm"
                >
                Imprimir Pasaporte
                </button>
        </div>
      </div>
      
    </div>
  </div>
<!-- Fin de la venta modal -->

<div class="modal fade bd-example-modal-sm" id="modalConfirmar" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" v-text="tituloModalConfirmar"></h4>
          <!-- <button type="button" class="close" @click="cerrarModal">&times;</button> -->
        </div>
        <div class="modal-body">
            <p>
                ventana modal confirmacion
            </p>
           
        </div>
        <div class="modal-footer">
            <button type="button" @click="abrirModal('Confirmar',arregloImpresion)" class="btn btn-danger">No</button>
            <button type="button" @click="abrirModal('Confirmar',arregloImpresion)" class="btn btn-success">Si</button>
        </div>
    </div>
  </div>
</div>


</div>  
</template>

<script>
export default {
data(){
    return{
      arregloPersonas:[
        {nombre:"Adrián",apellidos:"Núñez Alanis",edad:30,orden:1,bol_imprimir:true,folio:''},
        {nombre:"Michael",apellidos:"Martinez Ortega",edad:29,orden:2,bol_imprimir:true,folio:''},
        {nombre:"Joel",apellidos:"Islas Cuatapecatle",edad:22,orden:3,bol_imprimir:true,folio:''}  
      ],
       tituloModal:'',
       folio:'',
       folioScanner:'',
       arregloImpresion:{},
       btnImprimirdisabled:true,
       tituloModalConfirmar:"Impresión",
       arrayEtiqueta:[
         {id:1,seleccionado: false},
         {id:2,seleccionado: false},
         {id:3,seleccionado: false}]
    }
},
mounted(){
for (let key in this.arregloPersonas) {
    this.arregloPersonas[key].folio = this.randomString();
}
},
methods:{
seleccionarEtiqueta(item){
  let me = this;
      me.arrayEtiqueta;
// console.log("seleccionarEtiqueta()");
// console.log(item);

  for (let i = 0; i < me.arrayEtiqueta.length; i++) {
     me.arrayEtiqueta[i].seleccionado = false;
     if(item.id === me.arrayEtiqueta[i].id){
       me.arrayEtiqueta[i].seleccionado = true; 
     }
  }


},
validarFolio(){
console.log("validarFolio();");
let me = this;
if(me.arregloImpresion.folioScanner === me.folio){
 console.log("Folios concididos");
 me.btnImprimirdisabled = false;
}else{
     console.log("Folios NO concididos");
 me.btnImprimirdisabled = true;  
}
},
randomString(){
let length = 2;
let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
},
abrirModal(accion,data){
let me = this;
if(accion === "Persona"){
me.tipoInsumo(data);
}
if(accion === "Confirmar"){
setTimeout(()=>{
$("#modalConfirmar").modal("hide");
},1000);
setTimeout(()=>{
$("#Modal").modal("hide");
},2000);

setTimeout(()=>{
$(".modal-backdrop").remove();
},2000);


}

},
tipoInsumo(data){
console.log("tipoInsumo();");
$("#Modal").modal("show");
let me = this;
me.tituloModal = "Imprimir Pasaporte de personas."
me.folio = data.folio;
me.arregloImpresion.folioScanner =  me.folioScanner;
me.arregloImpresion.nombre = data.nombre;
me.arregloImpresion.apellidos = data.apellidos;
me.arregloImpresion.edad = data.edad;
me.arregloImpresion.bol_imprimir = data.bol_imprimir;
},
cerrarModal(){
let me = this;
$("#Modal").modal("hide"); 

for (let i = 0; i < me.arrayEtiqueta.length; i++) {
  me.arrayEtiqueta[i].seleccionado = false;
}

},
imprimir(data){
console.log("imprimir();");
console.log(data);
}
}
}
</script>

<style>
.hoja{
    height: 250px;
    width: 170px;
    border-radius: 15px;
    border: black 3px solid;
    display: block;
    margin: 0 auto;
}

.etiqueta{
 height: 72px; 
 border: 10px; 
 width: 100%; 
 cursor: pointer;
 background: #dddddd;
}
.etiqueta:hover{
  /* background: green; */
  border: red 2px solid;
}
.etiquetaOk{
  /* background: green; */
  border: green 2px solid;
}

</style>
