/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var seguir;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	
	numeroIngresado = prompt("Ingrese un numero");
	while(seguir=='si')
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado); 

			acumulador = acumulador + numeroIngresado;

			contador = contador + 1;

			seguir = prompt("Desea ingresar otro numero? si/no")

		}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN