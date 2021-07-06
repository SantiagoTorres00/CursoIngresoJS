/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
  var primerNumero = parseInt (document.getElementById('txtIdNumeroUno').value);

  var segundoNumero =  parseInt (document.getElementById('txtIdNumeroDos').value);

  r = primerNumero + segundoNumero;
  
  alert(r);
}

function restar()
{
	var primerNumero = parseInt (document.getElementById('txtIdNumeroUno').value);
    var segundoNumero = parseInt (document.getElementById('txtIdNumeroDos').value);
    r = primerNumero - segundoNumero;

	alert ("el resultado es: " + r);
}

function multiplicar()
{ 
	var primerNumero = parseInt (document.getElementById('txtIdNumeroUno').value);
	var segundoNumero = parseInt (document.getElementById('txtIdNumeroDos').value);

	r = primerNumero * segundoNumero;

	alert("el resultado es: " + r);
}

function dividir()
{
	var primerNumero = parseInt(document.getElementById('txtIdNumeroUno').value);
	var segundoNumero = parseInt(document.getElementById('txtIdNumeroDos').value);

	r = primerNumero / segundoNumero;

	alert ("el resultado es: " + r);
}

/* 
suma = +
resta = -
division
*/