/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
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

	while(contador<5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;
	}
	promedio = acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN

/*
entradas: 5 numeros (dentro while)
procesos:
	calcuclar la suma de los numero (dentro del while)
	promedio (fuera del while)
	salidas: suma y promedio
	*/