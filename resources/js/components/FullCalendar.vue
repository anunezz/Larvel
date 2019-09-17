<template>
<div class="row p-3">

<div class="col-md-12">

<div class="col-md-12">
  <h2>Registrar dias inhabiles paises. {{ Fdia }}</h2>
  <hr>
</div>

<div class="col-md-12">
  <el-row>
    <el-button @click="abrirModal('Registrar')">Registrar nuevo dia inhabil.</el-button>
  </el-row>
</div>
<div class="col-md-12">
    <FullCalendar 
    ref="calendario"
    :locale="'es'"
    :buttonText="{
      today:    'Dia actual',
      day:      'dia',
      prev:      'Anterior Mes',
      next:      'Proximo Mes',
      prevYear:  'Anterior Año',
      nextYear:  'Proximo Año',
     }"
    :header=" {
      left: 'title',
      center: '',
      right: 'prevYear prev proxmes today next  nextYear'
    }"
    :contentHeight="300"
    :eventRender="Tool"
    :editable="false"
    :handleWindowResize="false"
    :columnHeaderHtml="f"
    :defaultDate="enfoqueDia"
     defaultView="dayGridMonth" 
    :plugins="calendarPlugins" 
    :weekends="true"
    :selectable="false"
    :selectMirror="false" 
    :events="arrayDiasInhabiles"
    :config="config"
    :customButtons="custom"
    />
</div> 

<div>
<el-dialog
  :title="tituloModal"
  :visible.sync="centerDialogVisible"
  width="40%"
  center>

  <div v-if="contenidoModal == 1" class="input-group mb-3">
  <form>
    <div class="form-group row">
      <div class="col-md-12">  
        <el-date-picker
          v-model="inputNuevoDia"
          type="datetime"
          :picker-options="pickerOptions"
          placeholder="Nuevo dia inhabil">
        </el-date-picker>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-md-12">
        <el-input placeholder="Please input" v-model="inputDescripcionDia"></el-input>
      </div>
    </div>
</form>
  </div>

  <div v-if="contenidoModal == 2">
    
    <span v-if="ValidarEliminarFecha == 1"> <b>Error!</b> Solo puedes eliminar los dias mayores del dia actual.</span>
    <span v-if="ValidarEliminarFecha == 2"> Estas completamente seguro de eliminar este dia inhabil?.</span>
     <span v-if="ValidarEliminarFecha == 3"> Tienes que registrar este dia!.</span>
  </div>
  
 
  <span slot="footer" class="dialog-footer">
    
    <!-- despues del dia actual -->
    <el-button type="danger" v-if="ValidarEliminarFecha == 1 || ValidarEliminarFecha == 3 " @click="centerDialogVisible = false">Cerrar</el-button>

    <el-button v-if="ValidarEliminarFecha == 2" @click="centerDialogVisible = false">Cancelar</el-button>
    <el-button v-if="ValidarEliminarFecha == 2" type="danger">Eliminar</el-button>
    
    <el-button v-if="contenidoModal == 1" @click="centerDialogVisible = false">Cancelar</el-button>
    <el-button v-if="contenidoModal == 1" @click="registrarDiaInhabil()" type="primary">RConfirmar</el-button>

  </span>
</el-dialog>
</div>
</div>
</div>
</template>

<script>

import  '@fullcalendar/core/main.css';
import $ from "jquery";
//import FullCalendar from 'element-ui';
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Calendar} from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import PopperJs from 'popper.js';

export default {
   components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
     calendarPlugins: [ dayGridPlugin,
                        interactionPlugin
                      ],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
            console.log("Date.now(): "+Date.now());
            console.log("time.getTime(): "+time.getTime());
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
              console.log("holaaaa prueba");
            }
          }, {
            text: 'prox mes',
            onClick(picker) {
              const date = new Date();
              date.setDate(50);
              picker.$emit('pick', date);
            }
          }]
        },
      custom: {
                  proxmes: {
                    text: 'Próximo mes',
                    click: ()=> {
                      console.log('clicked custom button 1!');
                    }
                  },
                },   
     centerDialogVisible: false, //Ventana modal
     enfoqueDia: new Date(),
     tituloModal: '', //Titulo de la ventana modal
     contenidoModal: 0, //Contenido de las configuraciones
     ValidarEliminarFecha:0,
     inputDescripcionDia: '',
     inputNuevoDia:'',
     arrayDiasInhabiles: [
      { title: 'Dia conmemorativo: Año nuevo', date: '2019-01-01',color:'#ff9f89' },
      { title: 'Cumpleaños de Veronica Alanis Soto ',
       description: 'Cumpleaños de  Alanis Soto ',
       date: '2019-07-06', color: '#ff9f89'},
      { title: 'Cumpleaños papa', date: '2019-06-12',color:'#ff9f89' },
      { title: 'Cumple de odali', date: '2019-12-18',color: 'red' },
      { title: 'Cumpleaños de Veronica Alanis Soto ',
       description: 'Cumpleaños de Veronica Alanis Soto ',
       date: '2019-07-01', color: '#ff9f89'},
      { title: 'Cumpleaños de Veronica Alanis Soto ',
       description: 'Cumpleaños dsddsdsnica Alanis Soto ',
       date: '2019-07-15', color: '#ff9f89'},
       ],
      lenguaje:'es',
   // rendering: 'background', }
      config:{
        defaultView:"month",
        eventRender: function(event,element){
          console.log(event);
        }
      }
    }
  },
methods: {
  registrarDiaInhabil(){
    let me = this;
    console.log(me.inputNuevoDia);
    console.log(me.inputDescripcionDia);
    var Fecha2= '';
    Fecha2 = me.inputNuevoDia;
    console.log(me.inputNuevoDia);
    console.log("########################################");
    var diaa   =  ( String(Fecha2.getDate()).length == 1 )? "0"+String(Fecha2.getDate() ): String( Fecha2.getDate() );
    var mes    =  ( String(Fecha2.getMonth() + 1).length == 1 )? "0"+String(Fecha2.getMonth() + 1) : String(Fecha2.getMonth() + 1);
    var anio   =  Fecha2.getFullYear();
    var vFecha = String(diaa+"/"+mes+"/"+anio);
    console.log("Fecha2: "+Feha1);



  },
  abrirModal(arg) {
    let me = this;
    var opciones = '';
        me.centerDialogVisible = true; //abrir ventana modal con true
        opciones = ( arg == "Registrar")? 1 : 2;
        me.inputNuevoDia='';
        me.inputDescripcionDia='';
    switch (opciones) {
      case 1:
      {
      console.log("Estas en registrar fecha.");
      me.tituloModal = "Ingresa un nuevo día inhabil.";
      me.contenidoModal = 1;
      me.ValidarEliminarFecha = 0;
      break;
      }
      case 2:
      {
      me.tituloModal = 'Eliminar dia inhabil.';
      me.contenidoModal = 2;
      var Fecha_aux = arg.dateStr.split("-");
      var Fecha1 = new Date(parseInt(Fecha_aux[0]),parseInt(Fecha_aux[1]-1),parseInt(Fecha_aux[2]));
      
      if (isNaN(Fecha1)){
        return false;
      }
      else{
                 var Hoy = new Date(); //Fecha actual del sistema
                 var switchEliminar = 0;
                  if (Fecha1 < Hoy){
                     switchEliminar = 1; // alert ("La fecha introducida es menor que la de Hoy");
                  }else{ 
                   
                     var diaa   =  ( String(Fecha1.getDate()).length == 1 )? "0"+String(Fecha1.getDate() ): String( Fecha1.getDate() );
                     var mes    =  ( String(Fecha1.getMonth() + 1).length == 1 )? "0"+String(Fecha1.getMonth() + 1) : String(Fecha1.getMonth() + 1);
                     var anio   =  Fecha1.getFullYear();
                     var vFecha = String(anio+"-"+mes+"-"+diaa);
                     var diaExistente = 0;
        
                     for (var i = 0; i < me.arrayDiasInhabiles.length; i++) {
                      if( me.arrayDiasInhabiles[i].date == vFecha ){
                         diaExistente = 1;
                         break;
                        }   
                     }

                    if(diaExistente == 1){
                    if (Fecha1 == Hoy){ switchEliminar = 2; //alert ("Has introducido la fecha de Hoy");  
                       }else{ switchEliminar = 2; //alert ("La fecha introducida es despues a la de hoy a Hoy");
                      }
                    }else{
                      switchEliminar = 3; //No puedes eliminar esta fecha
                    }
                  }   

                  Fecha1 = '';

      switch (switchEliminar) {
        case 0:
        { 
          return;
          break;
        }
        case 1:
        {
          me.ValidarEliminarFecha = 1;
          break;
        }
        case 2:
        {
          me.ValidarEliminarFecha = 2; 
          break;
        }
        case 3:
        {
          me.ValidarEliminarFecha = 3; 
          break;
        }
      }




      }
      break;
      }  
    }
  },
  f(date) {
    if (date.getUTCDay() === 5) {
      return '<b>Viernes</b>';
    }else if(date.getUTCDay() === 0){
      return '<b>Domingo</b>';
    }else if(date.getUTCDay() === 1){
       return '<b>Lunes</b>';
    }else if(date.getUTCDay() === 2){
       return '<b>Martes</b>';
    }else if(date.getUTCDay() === 3){
       return '<b>Miercoles</b>';
    }else if(date.getUTCDay() === 4){
       return '<b>Jueves</b>';
    }else if(date.getUTCDay() === 6){
       return '<b>Sabado</b>';
    }
  },
  Tool(info){
      // var tooltip = new Tooltip(info.el, {
      //   title: info.event.extendedProps.description,
      //   placement: 'top',
      //   trigger: 'hover',
      //   container: 'body'
      // });
  },
ajustarDiaDatePicker(fecha){
    let meses = [
      { id:0,  name: "enero"       , dia: "01"},
      { id:1,  name: "febrero"     , dia: "01"},
      { id:2,  name: "marzo"       , dia: "01"},
      { id:3,  name: "abril"       , dia: "01"},
      { id:4,  name: "mayo"        , dia: "01"},
      { id:5,  name: "junio"       , dia: "01"},
      { id:6,  name: "julio"       , dia: "01"},
      { id:7,  name: "agosto"      , dia: "01"},
      { id:8,  name: "septiembre"  , dia: "01"},
      { id:9,  name: "octubre"     , dia: "01"},
      { id:10, name: "noviembre"   , dia: "01"},
      { id:11, name: "diciembre"   , dia: "01"},
    ],buscar = '';
    console.log("funcion fecha");
    fecha = fecha.split(" ");
    // console.log(fecha[0]);
    // console.log(fecha[2]);
    buscar = meses.find( (item) => item.name === fecha[0] );
    console.log(buscar);
    
    var nuevaFecha = new Date(fecha[2],buscar.id,1);

    console.log(nuevaFecha);
   // console.log( nuevaFecha  );

   return nuevaFecha;
}



},
computed:{
Fdia(){
  console.log("computed !!!!!!!!!!!!!");
  var r = this.$refs.calendario;

  //console.log(r.$el.textContent); 
  console.log(r); 

  return r;

}
},


mounted(){
  console.log("mounted !!!!!!!!!!!!!");
  var r = this.$refs.calendario;

  console.log(r.$el.textContent);


var button = $(".fc-button");

button.css("background-color","#5cb85c !important}");

 var l = $(".fc-left h2").text();

  console.log("Fecha");
  console.log(l);


this.ajustarDiaDatePicker(l);

// console.log("buttonm");
// console.log(button);

 console.log( this.Fdia );

}
  
  }

</script>


<style>
</style>

