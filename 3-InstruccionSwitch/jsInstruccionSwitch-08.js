/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado; 
	var mensaje;

	destinoIngresado  = txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		
	case "Mar del plata":
		mensaje = "En verano hace calor y en invierno frio";
		break;

		case "Cataratas":
		mensaje = "Calor";

		default: // usar siempre el que mas casos tiene
		mensaje = "Hace frio";

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN