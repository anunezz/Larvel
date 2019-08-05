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

<div class="col-md-12 my-2">
  <h2>Formulario</h2>
  <hr>
</div>

<div class="col-md-3">
  <el-tree
    :check-on-click-node="true"
    :draggable="false"
    :props="props"
    :load="loadNode"
    lazy
    node-key="id"
    ref="tree"
    highlight-current
    @check-change="handleCheckChange"
    :check-strictly="true"
    show-checkbox>
  </el-tree>
</div>


<div class="col-md-9">
  <div class="row" v-for="(item,index) of formDatos" :key="index">

  <input type="hidden" v-model="item.id_oficina" required>
 
  <div class="form-group col-md-6">
    <label for="estado">País:</label>
        <el-select filterable class="id_pais"
                   v-model="item.id_pais"
                   placeholder="Selecciona un país" 
                   style="width: 100%;">
        <el-option value="">Seleccione una opción</el-option>
            <el-option v-for="item in paises"
                       :key="item.id_pais"
                       :label="item.cad_nombre_es+' '+item.id_pais"
                       :value="item.id_pais">
        </el-option>
        </el-select>
        <span class="msj_id_pais"></span>
  </div>


<div class="form-group col-md-6 has-danger" v-if=" estados.length > 0 ">
  <label for="estado">Estado:</label>
    <el-select class="id_estados"
               v-model="estado" 
               placeholder="Selecciona un estado" 
               style="width: 100%;"
              >
     <el-option value="">Seleccione una opción</el-option>
     <el-option v-for="item in estados"
               :key="item.id_entidad"
               :label="item.cad_entidad+' '+item.id_entidad"
               :value="item.id_entidad">
     </el-option>
    </el-select>
      <span class="msj_id_estados"></span>
</div>

<div class="form-group col-md-6" v-if=" estados.length > 0 ">
  <label for="delegacion">Delegación o municipio:</label>
   <el-select class="id_delegaciones"
              placeholder="Selecciona una delegación" 
              v-model="delegacion" 
              style="width: 100%;">
                <el-option value="">Seleccione una opción</el-option>
    <el-option v-for="item in municipios"
               :key="item.id_entidad"
               :label="item.cad_entidad+' '+ item.id_entidad"
               :value="item.id_entidad">
    </el-option>
   </el-select>
   <span class="msj_id_delegaciones"></span>
</div>

 <div class="form-group col-md-6" v-if=" estados.length > 0 ">
    <label for="localidad">Localidad:</label>
        <el-select class="id_localidad" 
                   placeholder="selecciona una localidad" 
                   v-model="local" 
                   style="width: 100%;">
            <el-option value="">Seleccione una opción</el-option>
            <el-option
            v-for="item in localidad"
            :key="item.id_entidad"
            :label="item.cad_entidad+' '+item.id_entidad"
            :value="item.id_entidad">
            </el-option>
        </el-select>
       <span class="msj_id_localidad"></span>
  </div>

  <div class="form-group col-md-6">
    <label for="circunscripcion">circunscripcion</label>
    <input type="text" v-model="item.circunscripcion" class="form-control circunscripcion"  placeholder="circunscripcion" maxlength="15">
  </div>

  <div class="form-group col-md-3">
    <label for="cad_exterior">cad_exterior</label>
    <input type="text" v-model="item.cad_exterior" class="form-control cad_exterior" placeholder="cad_exterior" maxlength="15">
  </div>

  <div class="form-group col-md-3">
    <label for="num_interior">num_interior</label>
    <input type="text" v-model="item.num_interior"  class="form-control num_interior"  placeholder="num_interior" maxlength="15">
  </div>

    <div class="form-group col-md-6">
    <label for="latitud">latitud</label>
    <input type="text" v-model="item.latitud" class="form-control latitud" placeholder="latitud" maxlength="15">
    <span class="msj_latitud"></span>
  </div>

  <div class="form-group col-md-6">
    <label for="longitud">longitud</label>
    <input type="text" v-model="item.longitud" class="form-control longitud" placeholder="longitud" maxlength="15">
    <span class="msj_longitud"></span>
  </div>

  <div class="form-group col-md-6">
    <label for="cad_num_telefono">Teléfono:  <!--cad_num_telefono--></label>
    <input type="text" placeholder="Teléfono" v-model="item.cad_num_telefono" class="form-control cad_num_telefono"  maxlength="15">
    <span class="msj_cad_num_telefono"></span>
  </div>

  <div class="form-group col-md-6">
    <label for="cad_correo_electronico">Correo electrónico: <!--cad_correo_electronico--></label>
    <input type="email" v-model="item.cad_correo_electronico" class="form-control cad_correo_electronico" placeholder="Correo electrónico" maxlength="50">
    <span class="msj_cad_correo_electronico"></span>
  </div>

  <div class="col-md-12 pull-right">
     <button type="button" class="btn btn-primary" @click="actualizarDatos(formDatos,estado,delegacion,local)">Actualizar</button>
  </div>

  </div>
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

//FORMULARIO
 formDatos:[{ id_pais:142,id_oficina:23,
             id_estados:53,id_localidad:23,
             id_delegacion: 23,
             circunscripcion:12,cad_exterior:"23",
             num_interior:"24",cad_num_telefono:"57044280",
             cad_correo_electronico:"gunrockadriano@gmail.com",
             latitud:121212,longitud:12121}],
delegacion:23,
municipios:[{id_entidad:12,cad_entidad:'Venustiano Carranza'},
            {id_entidad:23,cad_entidad:'Gustavo Maderoi'},
            {id_entidad:56,cad_entidad:'Miguel hidalgo'},
],

paises:[{id_pais:142,cad_nombre_es:"Mexico"},
         {id_pais:150,cad_nombre_es:"Afganistan"},
         {id_pais:160,cad_nombre_es:"Estados unidos"},
         {id_pais:180,cad_nombre_es:"Canada"}],
         pais: 142,
estados:[{id_entidad:12,cad_entidad:"Ciudad de México"},
         {id_entidad:31,cad_entidad:"Sinaloa"},
         {id_entidad:42,cad_entidad:"Campeche"}],
estado:31,
localidad:[{id_entidad:12,cad_entidad:"Janitzio"},
           {id_entidad:13,cad_entidad:"Emilio zapata"},
           {id_entidad:15,cad_entidad:"San Simon"}],
local:12,
//FORMULARIO



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
    var c = '';
    if(checked){
    console.log(data.$treeNodeId);
    c = data.$treeNodeId;
    this.$refs.tree.setCheckedKeys([c]);
    console.log("checked "+checked);
    }
  
},
      loadNode(node, resolve) {
       console.log(node);

        if (node.level === 0) {
           const dataa = [{
            name: 'rama 1',
            leaf: false,
            id: 1
          }, {
            name: 'rama 2',
            leaf: false,
            id: 2
          }, {
            name: 'rama 3',
            leaf: false,
            id: 3
          },
          ];

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

      },
actualizarDatos(data,estado,delegacion,local){
let me = this;
var suma    = 0,
    regex   = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    reg     = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}"),
    vacio   = `<div class = "texto-error"> Este campo no puede estar vacio. </div>`,
    formato = `<div class="texto-error">Formato invalido.</div>`;

data = data.map(item =>{
  return {...item ,id_estados:estado,id_localidad:local,id_delegacion:delegacion };
});

if(data[0].id_pais == ''){
  $(".id_pais").addClass("input-error");
  $(".msj_id_pais").empty();
  $(".msj_id_pais").append(vacio);
  suma = suma + 1;
}else{
  $(".id_pais").removeClass("input-error");
  $(".msj_id_pais").empty();
  suma = suma + 0; 
}

if(data[0].id_estados == ''){
  $(".id_estados").addClass("input-error");
  $(".msj_id_estados").empty();
  $(".msj_id_estados").append(vacio);
  suma = suma + 1;
}else{
  $(".id_estados").removeClass("input-error");
  $(".msj_id_estados").empty();
  suma = suma + 0; 
}

if(data[0].id_delegacion == ''){
  $(".id_delegaciones").addClass("input-error");
  $(".msj_id_delegaciones").empty();
  $(".msj_id_delegaciones").append(vacio);
  suma = suma + 1;
}else{
  $(".id_delegaciones").removeClass("input-error");
  $(".msj_id_delegaciones").empty();
  suma = suma + 0; 
}

if(data[0].id_delegacion == ''){
  $(".id_delegaciones").addClass("input-error");
  $(".msj_id_delegaciones").empty();
  $(".msj_id_delegaciones").append(vacio);
  suma = suma + 1;
}else{
  $(".id_delegaciones").removeClass("input-error");
  $(".msj_id_delegaciones").empty();
  suma = suma + 0; 
}

if(data[0].id_localidad == ''){
  $(".id_localidad").addClass("input-error");
  $(".msj_id_localidad").empty();
  $(".msj_id_localidad").append(vacio);
  suma = suma + 1;
}else{
  $(".id_localidad").removeClass("input-error");
  $(".msj_id_localidad").empty();
  suma = suma + 0; 
}

if (data[0].cad_correo_electronico.length == 0){
  $(".cad_correo_electronico").addClass("input-error");
    $(".msj_cad_correo_electronico").empty();
    $(".msj_cad_correo_electronico").append(vacio);
  suma = suma + 1;
} else {
  
   if( !regex.test(data[0].cad_correo_electronico)){
      $(".cad_correo_electronico").addClass("input-error");
      $(".msj_cad_correo_electronico").empty();
      $(".msj_cad_correo_electronico").append(formato);
      suma = suma + 1;
   }else{
      $(".cad_correo_electronico").removeClass("input-error");
      $(".msj_cad_correo_electronico").empty();
      suma = suma + 0; 
   }

}

if(data[0].cad_num_telefono ==''){
  $(".msj_cad_num_telefono").empty();
  $(".cad_num_telefono").addClass("input-error");
  $(".msj_cad_num_telefono").append(vacio);
  suma = suma + 1; 
}else{
  
  if( isNaN(data[0].cad_num_telefono)  ){
    $(".msj_cad_num_telefono").empty();
    $(".cad_num_telefono").addClass("input-error");
    $(".msj_cad_num_telefono").append(formato); 
    suma = suma + 1;   
  }else if( String(data[0].cad_num_telefono).length >=8 && String(data[0].cad_num_telefono).length <=15  ){
    $(".msj_cad_num_telefono").empty();
    $(".cad_num_telefono").removeClass("input-error");
    suma = suma + 0; 
  }else{
    $(".msj_cad_num_telefono").empty();
    $(".cad_num_telefono").addClass("input-error");
    $(".msj_cad_num_telefono").append(formato); 
    suma = suma + 0;     
  }

}

if(String(data[0].longitud).length == 0  ){
    $(".msj_longitud").empty();
    $(".longitud").addClass("input-error");
    $(".msj_longitud").append(vacio);  
    suma = suma + 1;
}else{

 if( !reg.exec(data[0].longitud) ) {
    $(".msj_longitud").empty();
    $(".longitud").addClass("input-error");
    $(".msj_longitud").append(formato); 
    suma = suma + 1;
  } else {
    $(".msj_longitd").empty();
    $(".longitud").removeClass("input-error");
    suma = suma + 0;      
  }

}




console.log(data[0]);

// $.each(data[0],function(clas, value){

//    if( ( clas == 'id_pais'  ) && value == '' ){
//       $("."+clas).addClass("input-error");
//       $(".msj_"+clas).empty();
//       $(".msj_"+clas).append(vacio);
//       suma =  suma + 1;

//    }else if( clas == 'id_pais'  && value != ''  ){
//        $("."+clas).removeClass("input-error");
//        $(".msj_"+clas).empty();
//         suma =  suma + 0;
//      console.log("result  clse: "+clas+" valor: "+value);
//    }

//    if( ( clas == 'id_estado'  ) && value == '' ){
//       $("."+clas).addClass("input-error");
//       $(".msj_"+clas).empty();
//       $(".msj_"+clas).append(vacio);
//       suma =  suma + 1;

//    }else if( clas == 'id_estado'  && value != ''  ){
//        $("."+clas).removeClass("input-error");
//        $(".msj_"+clas).empty();
//         suma =  suma + 0;
//      console.log("result  clse: "+clas+" valor: "+value);
//    }

//console.log(clas,value);


  // if( value == '' || value == null){
  //     $("."+clas).addClass("input-error");
  //     // console.log("Esta vacio: "+clas+": "+value);
  //     suma = suma + 1;
  // }else if(clas == "circunscripcion" && value == ''){
  //     suma = suma + 0;
  //     $("."+clas).removeClass("input-error");
  //   //   console.log("No esta vacio: "+clas+": "+value);
  // }else{
  // $("."+clas).removeClass("input-error");
  // //    console.log("No esta vacio: "+clas+": "+value);
  //     suma = suma + 0;
  // }



//});






if(suma > 1){
  console.log("Revisa tus campos...");
  return;
}

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



<style>
.input-error{
border: 2px #d9534f solid !important;

}
 .texto-error{
   color:#d9534f !important;
 }

</style>
