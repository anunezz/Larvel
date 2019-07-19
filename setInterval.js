//Set interval es una funcion que se ejecutara cada sierto tiempo que se configure

var imprimir = setInterval( funcionInterval ,2000);
var i = 0;
function funcionInterval(){
    console.log("Ejecucion: ", i);
    i++;
    if(i == 4){
    //Se detiene la ejecucion
    console.log("La ejecucion se detuvo y llego al 4");
    clearInterval(imprimir);
    }
}