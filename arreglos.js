//para ejecutar el programa solo es ir a la ruta del proyecto en la terminal
//node arreglos.js
const arreglo = [
{ nombre: "Adrian Nuñez Alanis", precio: 29, departamento: "informatica"},
{ nombre: "Angelina Islas Martinez", precio: 25, departamento: "Soporte tecnico"},
{ nombre: "Isaac Frias Castillo", precio: 45, departamento: "Coordinador"},
{ nombre: "Helena Cortes Elena", precio: 45, departamento: "Ama de casa"},
{ nombre: "Javier Perez Avila", precio: 33, departamento: "informatica"},
{ nombre: "Adrian Gonzales ortega", precio: 56, departamento: "informatica"},
];

//console.log(arreglo);
//BUSCAR EL NOMBRE EN EL ARREGLO
const nombres = arreglo.find(item => {
    return item.nombre === "Adrian Nuñez Alanis"
});

//console.log(nombres);
//MODIFICAR EL precio DEL OBJETO 
const productosIva = arreglo.map(item =>{
    let newPrecio = item.precio + item.precio * 0.21;
    return {...item, precio: newPrecio }
});
//console.log(productosIva);
//CONSTRUIR UN NUEVO ARREGLO QUE CONTENGAN PALABRAS SIMILARES A LA PALABRA BUSCADA
const  todosLosDepartamentos = arreglo.filter(item => {
    return item.departamento === "informatica";
});
//console.log(todosLosDepartamentos);

//Para mas profecional se usa el filter de esta manera y es lo mismo pero con menos codigo
const  allDepartamentos = arreglo.filter(item =>  item.departamento === "informatica");
//console.log(allDepartamentos);

//Validar si en el arreglo cumplen todos con el mismo precio y regresara un false o true
const validarPrecio = arreglo.every(item =>{
    return item.precio >= 12;
});
//console.log(validarPrecio);

//Some sirve para validar si alguno de todos los precios del arreglo cumple con la condicion y regresara un true o false
const some = arreglo.some(item => {
 return item.precio >= 15;
});
//console.log(some);

//reduce sirve para sumar todas las edades del arreglo
// el 0 es para comenzar desde ese valor
const total = arreglo.reduce((total,item)=>{
   return total = total + item.precio;
},0);
//console.log(total);


const diasInhabiles = [
    { dia: "2019-07-07",  tipo: 2, descripcion: "informatica"},
    { dia: "2018-08-12",  tipo: 2, descripcion: "Soporte tecnico"},
    { dia: "2019-08-12",  tipo: 2, descripcion: "Coordinador"},
    { dia: "2019-09-01",  tipo: 1, descripcion: "Ama de casa"},
    { dia: "2019-07-12",  tipo: 1, descripcion: "informatica"},
    { dia: "2019-07-27",  tipo: 1, descripcion: "informatica"},
    { dia: "2019-08-27",  tipo: 1, descripcion: "29 de agosto del 2027"},
    { dia: "2019-06-02",  tipo: 1, descripcion: "informdescripcion"}];

var coloresDias = [];

   function plecaDiasInhabiles(data = []){
    var dia = data.dia.split("-"),
    Fecha   = new Date(parseInt(dia[0]),parseInt(dia[1]-1),parseInt(dia[2])),
    Hoy     = new Date(),
    datos   = {}; 
    
     if (Fecha == Hoy){ //Fecha == Hoy
          datos = {color:'rojo', descripcion: data.descripcion, dia:data.dia, tipo: data.tipo  };
        }else{ // Las fechas no son iguales
                if (Fecha < Hoy){  // Fecha es manor que Hoy 
                        datos = { color:'rojo', descripcion: data.descripcion, dia:data.dia,tipo: data.tipo };
                }else{ // Fecha es mayor que hoy
                    datos = ( data.tipo == 1 )?
                    {color:'verde', descripcion: data.descripcion, dia:data.dia,tipo: data.tipo  } : 
                    {color:'rojo', descripcion: data.descripcion, dia:data.dia,tipo: data.tipo  } ;
                }
     }   
     return datos;
   }   

    for (let i = 0; i < diasInhabiles.length; i++) {
        coloresDias.push( plecaDiasInhabiles(diasInhabiles[i]) );
    }

    console.table(coloresDias);