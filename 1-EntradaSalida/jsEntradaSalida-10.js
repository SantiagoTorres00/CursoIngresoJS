/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var importeSueldo;
  var descuento;
  var resultado;

  importeSueldo = txtIdImporte.value
  descuento = importeSueldo * 0.75;
  resultado = importeSueldo - descuento;
  txtIdResultado.value = resultado.toFixed(2);
}
