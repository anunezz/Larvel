//LAS CENTENCIAS try y catch
try{
    var a = undefined;
    var b = 2;
    if(isNaN(a) || isNaN(b)){
     throw "Haz colocado un numero invalido";
    }
 }
 catch(error)
 {
   console.error("Error: "+error);
 }


//Promesas
//La promesa solo se activara una ves si es correcto resolve y si es falso reject  
var promesa = new Promise( (resolve,reject) => {
    // if(true){
    //  resolve("La promesa se resolvio");
    // }else{
    //  reject("La promesa es rechazada");
    // }
    console.log("En esperra........");
    setTimeout( () => {
     resolve("La promesa se cumplio");
     //2000 2 segundos
    },2000);

    setTimeout( () => {
      reject("La promesa fue rechazada");
        //2000 2 segundos
     },2000);

});

promesa
.then((response) =>{
  console.log("Response: " + response);  
}).catch((error) =>{
  console.log("Error: ", error);
});

var promesa1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
     resolve("Promesa1 resuelta");
    },4500);
});
var promesa2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
     resolve("Promesa2 resuelta");
    },1000);
});
var promesa3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
     reject("Ocurrio un error en la terceraPromesa");
    },3500);
});
var promesa4 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
     resolve("Promesa4 resuelta");
    },2000);
});
// SI una de las promesas falla solo lanza el error del msj de la promesa fallida
Promise.all([promesa1,promesa2,promesa3,promesa4])
.then((values) =>{
    console.log("Los valores son: ",values);
}).
catch((error) =>{
    console.log("Los errores son: ", error);
});



//RACE solo mostrara la promesa que mas rapido se resolvio
Promise.race([promesa1,promesa2,promesa3,promesa4])
.then((values) =>{
    console.log("Los valores son: ",values);
}).
catch((error) =>{
    console.log("Los errores son: ", error);
});

//Promesas encadenadas
