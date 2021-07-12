/* Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	//if(edad>=18) le estamos dando dos operaciones
	if(edad>17) // 1 operacion tiempo de respuesta MEJOR OPCION
	{
		alert("la persona es mayor de edad")
	}
	else //muestra el falso NO USAR IF DOS VECES PARA LO MISMO
	{
		alert("la persona no es mayor de edad")
	}




}



//FIN DE LA FUNCIÓN