/*6.PROBLEMA:  Yoda  el  maestro  jedi,  necesita asignar  a  sus  aprendices Padawans 2 actividades dependiendo de la edad de ellos:•Manejo de la fuerza: Si el aprendiz es menor de 15 años•Manejo delsable de luz: Si el aprendiz esmayor de 15 añosInicialmente,se  debe  programar  una  función  que  asocie  los  datos  de:{nombre,  planeta, edad y  estatura}de 1 Padawana un objeto y una vez este  objeto  sea  creado  se debe  llamara  una  función  secundaria  queclasifique y muestre en consola la actividad asignada al Padawan*/

let datos=(nombreAprendiz,planetaAprendiz,actividadAprendiz,edadAprendiz,estaturaAprendiz) =>{
  let info={
      actividad: actividadAprendiz,
      nombre: nombreAprendiz,
      planeta: planetaAprendiz,
      edad: edadAprendiz,
      estatura: estaturaAprendiz
  };
  return info;
}

let actividad=(nombre,planeta,actividad,edad,estatura) =>{
  let informacion=datos(nombre,planeta,actividad,edad,estatura);
  
  if(informacion.edad<15){
      console.log("Esta persona maneja la fuerza")
  }else{
      console.log("Esta persona maneja el sable de luz")
  }    
}

actividad("Carlos","Tierra","Programador",10,"1.77")