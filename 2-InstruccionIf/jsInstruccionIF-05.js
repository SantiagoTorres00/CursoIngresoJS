/* Al ingresar una edad solo debemos informar si la persona NO es adolescente. 
*/

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if( !(edad >12 && edad <18))
		//if(edad >17 || edad <13) 2 opciones... la de arriba usa mas
	{
		alert("Usted no es adolescente")
	}

}
//FIN DE LA FUNCIÓN