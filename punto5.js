/*PROBLEMA:Watto paga  a  su  personal de  ventas  un  salario  de 3500000  mensuales, másuna  comisión  de  1500000  por  cada licencia  de  software  vendida  menos  el  5%  de  deducciones  por impuestos.  Codifica  un  programa  que  calcule  e  imprima  el salario mensual de un vendedor dado;*/

function puntoCinco(licenciasVendidas) {
    const salarioMensual = 3500000;
    const comision = 1500000;
    const impuesto = 5;
    const salarioTotalPorcentaje = (salarioMensual + licenciasVendidas * comision) * (impuesto / 100);
    const salarioTotal = (salarioMensual + licenciasVendidas * comision) - salarioTotalPorcentaje;
    console.log(salarioTotal);
  }