/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo la hora
	var hora;
	var mensaje;

	hora=txtIdHora.value;
	hora=parseInt(hora);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		mensaje = "Es de mañana";
		break;

		default:
		mensaje = "No es de mañana";
	}
	alert(mensaje);
	}//FIN DE LA FUNCIÓN