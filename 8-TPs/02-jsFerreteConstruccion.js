/*
Torres Santiago - DIV D
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y 
		el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
	se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y
	 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;
	resultado = largo * ancho;

	alert(resultado);


}

function Circulo () 

{
	var radio;
	var pi;
	var resultado;

	radio = parseInt(txtIdRadio.value);
	pi = Math.PI;
	resultado = (2 * pi * radio);
	
	alert(resultado.toFixed(2));
	
}

function Materiales () 

//Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y
//3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
 	{
		var largo;
		var ancho;
		var resultado;

		largo = parseFloat(txtIdLargo.value * 3);
		ancho = parseFloat(txtIdAncho.value * 2);

		resultado = largo * ancho;

		alert("Se necesitan " + largo.toFixed(2) + " bolsas de cal " + " y " + ancho.toFixed(2) + " bolsas de cemento ");

	}