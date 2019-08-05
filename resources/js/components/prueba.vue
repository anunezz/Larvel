<template>
	<div class="k-content k-grid__n k-grid__n--fluid k-grid k-grid--hor">
        <div class="k-content__body	k-grid__n k-grid__n--fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="k-portlet">
                        <div class="k-portlet__body">
                            <div class="k-section">
                                <div id="k_table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer" >
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>Prueba oficinas.</h2>
                                            <hr>
                                        </div>
                                        <div class="col-md-4">
                                            <div id="tablec" v-if="treeVisible == 1" >
                                                <el-tree
                                                    :props="defaultProps"
                                                    :load="loadNode"
                                                    lazy
                                                    :check-on-click-node="true"
                                                    show-checkbox
                                                    :check-strictly="true"
                                                    node-key="id"
                                                    :draggable="true"
                                                    ref="tree"
                                                    @check-change="handleCheckChange">
                                                </el-tree>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
<!-- HTML CONTENIDO.... -->
<!-- <ul>
    <li v-for="(item, index) of datos" :key="index">
        id_oficina: {{item.id_oficina}} <br>
        id_tipo_oficina: {{item.id_tipo_oficina}} <br>
        name: {{item.name}} <br>
        num_zona_horaria:  {{ item.num_zona_horaria }} <br>
        id_oficina_padre: {{ item.id_oficina_padre }}
    </li>

</ul> -->

<div class="col-md-12">
  <div class="row" v-for="(item,index) of formDatos" :key="index">

  <input type="hidden" v-model="item.id_oficina" required>

  <div class="form-group col-md-6">
    <label for="estado">País:</label>
        <el-select class="pais" filterable
                   v-model="item.id_pais"
                   placeholder="Select" 
                   style="width: 100%;"
                   @change="obtenerEstados(item.id_pais, item.id_oficina,item.id_estado)">
        <el-option label="seleccione" value=""></el-option>
            <el-option v-for="item in paises"
                       :key="item.id_pais"
                       :label="item.cad_nombre_es+' '+item.id_pais"
                       :value="item.id_pais">
        </el-option>
        </el-select>
  </div>


<div class="form-group col-md-6 has-danger" v-if=" estados.length > 0 ">
  <label for="estado">Estado:</label>
    <el-select class="estado" 
               v-model="estado" 
               placeholder="Select" 
               style="width: 100%;"
               @change="obtenerDelegaciones(item.id_pais,estado,item.id_oficina,item.id_delegacion)">
     <el-option v-for="item in estados"
               :key="item.id_entidad"
               :label="item.cad_entidad+' '+item.id_entidad"
               :value="item.id_entidad">
     </el-option>
    </el-select>
</div>

<div class="form-group col-md-6" v-if=" estados.length > 0 ">
  <label for="delegacion">Delegación o municipio:</label>
   <el-select class="delegacion" 
              placeholder="delegación" 
              v-model="delegacion" 
              style="width: 100%;"
            @change="obtenerLocalidad(item.id_pais,delegacion,item.id_oficina,item.id_localidad)">
    <el-option v-for="item in municipios"
               :key="item.id_entidad"
               :label="item.cad_entidad+' '+ item.id_entidad"
               :value="item.id_entidad">
    </el-option>
   </el-select>
</div>

 <div class="form-group col-md-6" v-if=" estados.length > 0 ">
    <label for="delegacion">Localidad:</label>
        <el-select class="delegacion" 
                   placeholder="delegación" 
                   v-model="local" 
                   style="width: 100%;">
            <el-option
            v-for="item in localidad"
            :key="item.id_entidad"
            :label="item.cad_entidad"
            :value="item.id_entidad">
            </el-option>
        </el-select>
  </div>

  <div class="form-group col-md-6">
    <label for="circunscripcion">circunscripcion</label>
    <input type="text" v-model="item.circunscripcion" class="form-control circunscripcion"  placeholder="circunscripcion" maxlength="15">
  </div>

  <div class="form-group col-md-6">
    <label for="cad_exterior">cad_exterior</label>
    <input type="text" v-model="item.cad_exterior" class="form-control cad_exterior" placeholder="cad_exterior" maxlength="15">
  </div>

  <div class="form-group col-md-6">
    <label for="num_interior">num_interior</label>
    <input type="text" v-model="item.num_interior"  class="form-control num_interior"  placeholder="num_interior" maxlength="15">
  </div>

  <div class="form-group col-md-6">
    <label for="cad_num_telefono">Teléfono:  <!--cad_num_telefono--></label>
    <input type="text" v-model="item.cad_num_telefono" class="form-control cad_num_telefono" placeholder="cad_num_telefono" maxlength="15">
  </div>

  <div class="form-group col-md-6">
    <label for="cad_correo_electronico">Correo electrónico: <!--cad_correo_electronico--></label>
    <input type="email" v-model="item.cad_correo_electronico" class="form-control cad_correo_electronico" placeholder="Correo electrónico" maxlength="50">
  </div>

  <div class="form-group col-md-6">
    <label for="latitud">latitud</label>
    <input type="text" v-model="item.latitud" class="form-control latitud" placeholder="latitud" maxlength="15">
  </div>

  <div class="form-group col-md-6">
    <label for="longitud">longitud</label>
    <input type="text" v-model="item.longitud" class="form-control longitud" placeholder="longitud" maxlength="15">
  </div>

  <div class="col-md-12 pull-right">
     <button type="button" class="btn btn-primary" @click="actualizarDatos(formDatos,estado,delegacion,local)">Actualizar</button>
  </div>

  </div>
</div>

                 </div>
                </div>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
    import select2 from './form/SelectComponent.vue';
    import editor from '@tinymce/tinymce-vue';
    import modal from '../components/modal/ModalComponent';
	import * as $ from "jquery";

	export default {
		props: ['idUsuario', 'idOficina', 'image'],
		components: {
			select2,
			modal,
			editor
    	},
		data() {
			return {
			    clasificacion: {},
				data: [],
				defaultProps: {
					children: 'children',
					label: 'name'
					// disabled: 'disabled',
				},
                loadTree: false,
                oficinas: [],
                municipio: [],
                children: [],
				fichaHistoClasificacion: [],
				content: '',
				number: '',
                count: true,
                niveles: [],
                editor: [],
                node: {},
                checked: false,
                loading: false,
                datos:[],
                formDatos:[],
                formDatoss:[],
                treeVisible: 0,
                municipios:[],
                delegacion:'',
                estados:[],
                estado:'',
                paises:[],
                pais:'',
                localidad:[],
                local:''
			}
		},
mounted() {
    this.getObtenerOficinas();
    this.obtenerPaises();
},
methods: {
obtenerPaises(){
    let me = this;
    axios.post("/calendario/obtenerCatalogoPaises").then(function (response) {
       me.paises = response.data.lResult;
    }).catch(function (error) {
    console.log(error);
    })
},
obtenerEstados(pais,oficina,data){
    let me = this;
    var entidad = '';
    if(pais == 142){
     entidad = 0;
    }else if(pais == 231){
     entidad = 1;
    }

    axios.post("/prueba/obtenerEntidades",{
        "p_id_pais": pais,
        "p_id_entidad": entidad,
        "p_id_oficina": oficina
    }).then(function (response) {
       me.estados = response.data.lResult;
       me.estado = '';
        for (let i = 0; i < me.estados.length; i++) {
            if(me.estados[i].id_entidad == data){
                me.estado = me.estados[i].id_entidad;
            }
        }
    }).catch(function (error) {
    console.log(error);
    })
},
obtenerDelegaciones(pais,entidad,oficina,delegacion){
let me = this;
    axios.post("/prueba/obtenerEntidades",{
        "p_id_pais": pais,
        "p_id_entidad": entidad,
        "p_id_oficina": oficina
    }).then(function (response) {
       me.municipios = response.data.lResult;
       me.delegacion = '';

       for (let i = 0; i < me.municipios.length; i++) {
        if(me.municipios[i].id_entidad == delegacion){
          // console.log("CORRECTO MUNUCIPIO: "+me.municipios[i].id_entidad);
           me.delegacion = me.municipios[i].id_entidad;
        }
       }

    }).catch(function (error) {
    console.log(error);
    })
},
obtenerLocalidad(pais,delegacion,oficina,localidad){
 console.log("obtenerLocalidad();");
  let me = this;
  console.log("pais: "+ pais+" delegacion: "+3080+" oficina: "+oficina+" localidad: "+localidad);
     axios.post("/prueba/obtenerEntidades",{
        "p_id_pais": pais,
        "p_id_entidad": delegacion,
        "p_id_oficina": oficina
    }).then(function (response) {
        console.log("LOCALIDAD");
        console.log(response);
    }).catch(function (error) {
    console.log(error);
    })
},
loadNode(node, resolve) {
                // if (node.level === 0){
                //    return resolve([{ name: 'Oficinas'}]);
                // }
if(node.level === 0){
        setTimeout(() => {
            let json = [];
            this.children = [];
            _.filter(this.fichaHistoClasificacion, (f) => {
                    json = this.createJson(f);
                if ( f.id_oficina_padre === 0 ) this.children.push(this.createJson(f));
            });
            this.count = false;
            resolve(this.children);
        }, 10);
} //Termina nivel 0

if(node.level ===1){
    var buscar = [];
        buscar = node.data;
        setTimeout(() => {
            node.childNodes = [];
            let json = [];
            this.children = [];
            _.filter(this.fichaHistoClasificacion, (f) => {
                    json = this.createJson(f);
                if ( f.id_oficina_padre === buscar.id_oficina ) this.children.push(this.createJson(f));
            });
            this.count = false;
            resolve(this.children);
        }, 10);
}//Termina nivel 1
},
obtenerPais(){
let me = this;
console.log("obtenerPais();");
    axios.post('/prueba/obtenerDomicilioOficina',{
        "p_id_oficina": data[0].id_oficina
    }).then(response => {
            me.formDatos = response.data.lResult;
    }).catch(error => console.log(error));
},
createJson(f){
    return {
    name: f.cad_oficina,
    id_oficina: f.id_oficina,
    id_oficina_padre: f.id_oficina_padre,
    id_tipo_oficina: f.id_tipo_oficina,
    num_zona_horaria: f.num_zona_horaria
    }
},
handleCheckChange(data, checked, indeterminate) {
    let me = this;
    if(checked){
        me.node.checked = false;
        me.datos = [data];
        me.node.checked = true;
        me.getData(me.datos);
    }
},
getData(accion,data){
    let me = this;
   
axios.post('/prueba/obtenerDomicilioOficina',{
    "p_id_oficina": data[0].id_oficina
}).then(response => {
    me.formDatos =  response.data.lResult;
    var entidad = '';

if(me.formDatos[0].id_pais == 142){
    entidad = 0;
}else if(me.formDatos[0].id_pais == 231){
    entidad = 1;
}

var estado = '';
if( me.formDatos[0].id_estado ){
    estado =  me.formDatos[0].id_estado;
}

me.obtenerEstados( me.formDatos[0].id_pais, me.formDatos[0].id_oficina, estado );
me.obtenerDelegaciones( me.formDatos[0].id_pais,  me.formDatos[0].id_estado,   me.formDatos[0].id_oficina,   me.formDatos[0].id_delegacion );
me.obtenerLocalidad(me.formDatos[0].id_pais,  me.formDatos[0].id_delegacion,   me.formDatos[0].id_oficina,   me.formDatos[0].id_localidad );

}).catch(error => console.log(error));    
},
getObtenerOficinas(){
return new Promise((resolve) => {
    axios.post('/calendario/obtenerOficinas').then(response => {
            console.log(response);
            if (response.data.code === '000') {
                this.fichaHistoClasificacion = response.data.lResult;
                resolve()
                    this.treeVisible = 1;
                    // setTimeout(item => {  $(".el-checkbox__inner").hide(); },5);
            }
        })
.catch(error => console.log(error))
});
},
actualizarDatos(data,estado,delegacion,local){
console.log("actualizarDatos();");
       
    axios.post('/prueba/actualizarDomicilioOficina',{
        "p_id_oficina": data[0].id_oficina,
        "p_id_pais": data[0].id_pais,
        "p_id_estado": data[0].id_estado,
        "p_id_delegacion": data[0].id_delegacion ,
        "p_id_localidad": data[0].id_localidad,
        "p_cad_localidad": data[0].localidad,
        "p_cad_num_exterior": data[0].cad_exterior,
        "p_num_interior": data[0].num_interior,
        "p_cad_telefono": data[0].cad_num_telefono,
        "p_cad_correo_elec": data[0].cad_correo_electronico,
        "p_latitud": data[0].latitud,
        "circunscripcion":'',
        "p_longitud": data[0].longitud
    }).then(response => {
        console.log("Response d4atps a Actualizar...");
        console.log(response);

    }).catch(error => console.log(error))

}
		}
	}
</script>



<style lang="css" scoped>
    .tox-statusbar__branding {
        display: none !important;
    }
    span.el-checkbox__inner, span.el-tree-node__expand-icon.el-icon-caret-right{
      display: none !important;
    }

.input-error{
border: 1px #d9534f solid;
}
</style>
