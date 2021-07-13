/*
Torres Santiago - DIV D
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//parseInt (document.getElementById('txtIdNumeroDividendo').value);


	var precio1 = parseInt(document.getElementById('txtIdPrecioUno').value);
	var precio2 = parseInt(document.getElementById('txtIdPrecioDos').value);
	var precio3 = parseInt(document.getElementById('txtIdPrecioTres').value);
	var r;

    r = precio1 + precio2 + precio3;

	alert("la suma es: " + r);
}
function Promedio () 
{
	var precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	var precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	var precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);
	var r;

   r= (precio1+precio2+precio3) / 3;

   alert("el promedio es: " + r.toFixed(2));





}

function PrecioFinal () 

{	
	var precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	var precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	var precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);
	

	r=(precio1+precio2+precio3) * 1.21;
	
alert("el precio final es: " + r.toFixed(2));

}