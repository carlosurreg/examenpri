/*3.PROBLEMA: La  luna  de  Endorpierde  temperatura  día  a  día,  para  ello hay que hacer un monitoreo constante, Cree una función de flecha que permita   calcular   la   temperatura   media   de   la   luna   a   partir   de   la temperatura máxima y mínima de cada día */

const puntoTresFlecha = (temperaturaMaxima, temperaturaMinima) => {
    const temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    console.log(temperaturaMedia);
  };
  // puntoTresFlecha(10,1);