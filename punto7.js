/*7.PROBLEMA:Han  solo  y  Chewbacca  deben  infiltrarse  en  el  planeta yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, como distractor el imperio ha creado planos falsos y se tiene el dato de que el número de serie de estos planos falsos comienza por encima del número  10; es  decir  todos  los  planos  falsos  tienen  números  de  serie consecutivos  comenzando  desde  el  #11.  SOLO  si se  obtiene  un  plano

verdadero  Chewbacca  y  Han  pueden  abordar  su  nave  y  ejecutar  un mensajeen consola avisando que han despegadoConfigure la rutina necesaria para despegar la nave utilizando callbacks*/


function nave(numero) {
    if (numero <= 10) {
      console.log("El plano es verdadero"); 
    } else { 
      console.log("El plano es falso");  
    } 
  }
  
  
  
  function despegar(serie, callback) {
    let numero = serie.substring(0, 2); 
    console.log(numero);  
    callback(numero);
  }
  
  
  
  despegar("1122222",nave);