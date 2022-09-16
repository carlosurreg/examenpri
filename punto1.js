/*1.PROBLEMA:  Yoda  el  maestro  jedi,  necesita  enseñar  a  sus  aprendices Padawana calcular la distancia a la que cualquiera de los planetas de la ruta    N-14    pertenecientes    a    la    ruta    comercial    de    la    federación intergaláctica, se encuentra del planeta NABOO. Para calcular dicha distancia se debe:•Recibir las coordenadas X,Y del planeta en UA•Establecer la distancia como:*/

const puntoUnoFlecha = (cordenadaUno, cordenadaDos) => {
    let ax = Math.pow(cordenadaDos.split(':')[0] - cordenadaUno.split(':')[0], 2);
    let ay = Math.pow(cordenadaDos.split(':')[1] - cordenadaUno.split(':')[1], 2);
  
  
  
   let distancia = Math.sqrt(ax + ay);
    console.log(distancia);
  };
  
  
  
  function puntoUnoNormal(cordenadaUno, cordenadaDos) {
    let ax = Math.pow(cordenadaDos.split(':')[0] - cordenadaUno.split(':')[0], 2);
    let ay = Math.pow(cordenadaDos.split(':')[1] - cordenadaUno.split(':')[1], 2);
  
  
  
   let distancia = Math.sqrt(ax + ay);
    console.log(distancia);
  }

  // puntoUnoNormal('3:-4', '6:0');
// puntoUnoFlecha('3:-4', '6:0');