/*Al selecionar un destino , 
indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado; 
	var mensaje;

	destinoIngresado  = txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		mensaje = "queda ubicado en el sur de Argentina";
		break;

		case "Mar del plata":
		mensaje = "esta ubicada en el oeste de Argentina";
		break;

		default:
		mensaje = "se encuentra en el norte de Argentina";

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN