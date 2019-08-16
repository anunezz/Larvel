<template>
<div class="py-3 ">
<div class="row">
    <div class="col-md-12">
        <h2>Formulario de validaciones element-ui</h2>
        <hr>
    </div>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :inline="true" class="demo-ruleForm-inline">
   
   <div class="col md-12">
        <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>  
   </div>
   
    <div class="col-md-12 my-2">
        <el-select v-model="tipoContacto" placeholder="Selecciona un dato de contacto.">
            <el-option label="Selecciona un tipo de contacto" value="">
            </el-option>
            <el-option
            v-for="(item,index) of options" :key="index"
            :label="item.label"
            :value="item.tipo">
            </el-option>
        </el-select>
        <el-button type="primary" @click="addDomain(tipoContacto)">Agregar</el-button>
    </div>
    <div style="margin-top: 15px;" v-for="(item, index) in ruleForm.domains" :key="item.key">
        <label for="">{{item.label}}</label>
        <el-form-item :prop=" 'domains.' + index + '.value' "
            v-if="item.tipo == 1" :rules="[{type: 'string', required: true, message:'Este campo no puede estar vacio'},
                    { trigger: ['blur', 'change'],pattern: item.exp ,message:'Correo electronico invalido' }]">
            <el-input type="text" 
                      v-model="item.value" 
                      minlength="8" maxlength="15" 
                      :placeholder="item.label" 
                      autocomplete="off" 
                      :clearable="true"
                      style="width: 100%;">
                       <el-button type="danger" slot="append" icon="el-icon-circle-close" @click.prevent="removeDomain(item)"></el-button> 
                      </el-input>
        </el-form-item> 
        <el-form-item :prop=" 'domains.' + index + '.value' "
            :rules="[{type: 'string', required: true, message:'Este campo no puede estar vacio'},
                    { validator : correo ,trigger: ['blur', 'change'] }]" 
            v-else-if="item.tipo == 2">
            <el-input type="email" v-model="item.value" :placeholder="item.label" autocomplete="off" :clearable="true">
                <el-button type="danger" slot="append" icon="el-icon-circle-close" @click.prevent="removeDomain(item)"></el-button> 
            </el-input>
        </el-form-item>  
      
      
    </div>
<div class="col-md-12">
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    </el-form-item>
</div>
</el-form>
</div>
</div>
</template>

<script>

export default {
   components: {
  },
  data() {

      var name = (rule, value, callback,source,options) => {
          console.log("value....");
          console.log(value);
        if (!value) {
          return callback(new Error('Please input the age'));
        }else{
             callback();
        }
      
      };



    return {
        options: [{
          value: '',
          label: 'Teléfono',
          tipo: 1,
          id:this.suma = this.suma + 1
        }, {
          value: 'Option2',
          label: 'Correo electrónico',
          tipo: 2,
          id: this.suma = this.suma + 1
        }],
        nombre:'',
        suma:0,
        ruleForm:{
             domains: [{
              key: 1,
              value: 0,
              label:"Teléfono",
              exp:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
              tipo: 1,
              nombre: ''
             }],
            Contactos:'',
            name:''
        },
        rules: {
             name: [
           { validator: name, trigger: 'blur' }
          ]
        },
        correo: (rule, value, callback) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value) == false) {
          return callback(new Error('Correo electónico incorrecto.'));
        }else{
             callback();
        }
      },
      telefono:(rule, value, callback) => {
        if (/^([0-9]{5})+((-{1})*)+([0-9]{6})$/i.test(value) == false) {
          return callback(new Error('Teléfono formato incorrecto.'));
        }else{
             callback();
        }
      },
        tipoContacto:''
    }
  },
methods: {
removeDomain(item) {
var index = this.ruleForm.domains.indexOf(item);
    if (index !== -1) {
        this.ruleForm.domains.splice(index, 1);
    }
},
addDomain(tipoContacto){
    let me = this;
    console.log("Tipo contacto: "+tipoContacto);

   if(tipoContacto == 1 && me.tipoContacto != ''){
      this.ruleForm.domains.push({ key: Date.now(), value: '', label:"Teléfono",tipo: 1});
   } if(tipoContacto == 2 && me.tipoContacto != ''){
      this.ruleForm.domains.push({ 
        key: Date.now(), 
        value: '', 
        label:"Correo electrónico",
        tipo: 2,
        reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        });
   }else if(me.tipoContacto == ''){
     alert("Selecciona un tipo de contacto.");
   }

   me.tipoContacto = '';
  
},

submitForm(ruleForm){
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
}
},
mounted(){
 
}
}
</script>


