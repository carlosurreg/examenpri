/*PROBLEMA:QUI-GON JINN está  encargado de revisar  n sables de luz y contabilizar la cantidad de energía de sables que tienen negativa en Joules.

Ejemplo:   para   la  entrada   {2,4,-8,5,-6}   la   cantidad   de   sables defectuosos con energía negativa fue de 2 sables.*/

function puntoCuatro(energia) {
    let sablesMalos = 0;
    for (sables of energia) {
      if (sables < 0) {
        sablesMalos++;
      //sablesMalos = sablesMalos +1;
      }
    }
    console.log(sablesMalos);
  }
  
  
  
  // const sables = [2, 4, -8, 5, -6];
  // puntoCuatro(sables);