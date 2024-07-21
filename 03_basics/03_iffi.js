//Immiditely Invocked Functin Expression(IIFE)

(function log(name) {
    console.log(`DB connected...! welcome ${name}`);
})('Raghuveer');

((num)=>console.log((num%100)))(2556)