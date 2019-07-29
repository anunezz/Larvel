//expresiones regulares
var cadena = "Hola mundo como ves.  Hola otra vez.";
//remplazar
//cadena = cadena.replace("Hola","Adios"); // Esta solo cambia el primer Hola por Adios

//EXPRESIONES REGULARES
cadena = cadena.replace(/Hola/gi,"Adios");
console.log(cadena);
