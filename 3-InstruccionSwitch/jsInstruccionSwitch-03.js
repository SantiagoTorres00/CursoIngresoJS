/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	var mes;

	mes = txtIdMes.value;

	switch (mes){
		case "Febrero":
		alert("Este mes no tiene mas de 29 dias");

		default:
		alert ("Este mes tiene 30 o mas dias");
	}
	
	


}//FIN DE LA FUNCIÓN