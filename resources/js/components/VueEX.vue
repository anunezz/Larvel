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

<div class="col-md-12">

<el-tree
  :props="props"
  :load="loadNode"
  lazy
  node-key="id"
  ref="tree"
  highlight-current
  @check-change="handleCheckChange"
  show-checkbox>
</el-tree>


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
    total:0,



         props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf',
          id:"2"
        },





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
    
},
      handleCheckChange(data, checked, indeterminate) {
    
        var arraySelect = [];
       
         if(checked){
                               
           var seleccionado = this.$refs.tree.getCheckedKeys();

           arraySelect.push(seleccionado);

     
  
             this.$refs.tree.setCheckedKeys([1]);
           //  data = data.map(item => item.id   );
             checked = true;

         }

         
        
        console.log("#SELECYYY");
        console.log(arraySelect);


      },

      loadNode(node, resolve) {
        if (node.level === 0) {

           const dataa = [{
            name: 'leafsss',
            leaf: false,
            id: 1
          }, {
            name: 'zoneeee',
            leaf: false,
            id: 2
          }];

          return resolve(dataa);
        }


        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true,
            id:3
          }, {
            name: 'zone',
            leaf: true,
            id:4
          }];

          resolve(data);
        }, 500);

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



