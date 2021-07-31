/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mes;

	mes = txtIdMes.value;

	switch (mes){
		case "Febrero":
			alert("Febrero tiene 28 dias");
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
		
		default:
			alert("Este mes tiene 30 dias");
	}
	
	



}//FIN DE LA FUNCIÓN