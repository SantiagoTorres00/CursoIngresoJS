/*
Al ingresar una edad debemos informar si la persona es mayor de edad
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edad

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}
	else
		if(edad>12)
		{
			alert("Usted es adolescente");
		}
		else	//no lleva llaves	
		{
			alert("Usted es un niño/a");
		}



}
/*
if(edad>17)
	{
	alert("Es mayor de edad");
	}
	if(edad>12 && edad<18);
	
	{
	alert("Es adolescente");
	}

	if(edad<13)
	{
	alert("Usted es un niño");
	}

*/

//FIN DE LA FUNCIÓN