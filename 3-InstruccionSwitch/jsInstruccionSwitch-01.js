/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!.
*/

function mostrar()
{
	var mes;
	var mensaje; //declaramos variable para no repetir alerts

	mes = txtIdMes.value;
	mensaje = "No se cumple con el enunciado";

	switch(mes)
	{
		case "Enero":
			mensaje = "Que comiences bien el año";
		break;

		case "Marzo": 
		mensaje = "a clases";
		break;

		case "Julio":
		mensaje = "se vienen las fiestas";
		break;

		case "Diciembre":
		mensaje = "Felices Fiestas"
		break

		/*default
		alert("no se cumple el enunciado ");*/

	}
	alert (mensaje)
 }
	
/*
	switch(mes){
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break;
		 }
 }
 */