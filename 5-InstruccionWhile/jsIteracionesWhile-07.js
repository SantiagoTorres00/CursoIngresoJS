/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var seguir;

	contador=0;
	acumulador=0;
	while(seguir=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		seguir=prompt("Desea ingresar otro numero? si/no");
	}
	promedio = acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}
/* SEGUNDA OPCION
	{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var seguir;


	
	seguir=true
	contador=0;
	acumulador=0;
	while(seguir==true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		seguir=confirm("Desea ingresar otro numero? si/no");
	}
	promedio = acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN
*/

/*
entradas: 5 numeros (dentro while)
procesos:
	calcuclar la suma de los numero (dentro del while)
	promedio (fuera del while)
	salidas: suma y promedio
	*/