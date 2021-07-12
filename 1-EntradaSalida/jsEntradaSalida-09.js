/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    /* 
    forma 1
    */

   var importeSueldo;
   var resultado;

   importeSueldo = txtIdSueldo.value;
   importeSueldo = parseFloat(importeSueldo);

  

   resultado = importeSueldo * 1.1;

  
  txtIdResultado.value = resultado.toFixed(2);

	
}
//regla de 3 simples... buscamos el 110%
  // 1,1 seria el 110 y si fuera el 30% 1,3
//txtIdSueldo -> entrada
//txtIdResultado -> salida
// parseFloat() -> numeros decimales
// parseInt() -> numeros enteros

/*
Entrada... que entra? Sueldo
Proceso... que se procesa? se suma el 10%
Salida... que sale? Sueldo + 10%

Un algoritmo es una serie de pasos, que se ejecutan de manera ordenada
para llegar a un objetivo.
*/

/*
forma 2
*/
  
 /*
  var importeSueldo;
  var aumento;
  var resultado;

  aumento = importeSueldo * 0.1
  aumento = importeSueldo * (10/100);
  resultado = importeSueldo + aumento;
  txtIdResultado.value = resultado.toFixed(2)
  */
