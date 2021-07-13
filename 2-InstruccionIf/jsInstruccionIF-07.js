/*
Al ingresar una edad menor a 18 años y un estado civil distinto 
a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero. 
*/
function mostrar() 
{
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;
	//alert(estadocivilIngresado);

	if(edad<18)
		{
		alert("Usted es muy pequeño para no ser soltero");
		}
		else
			if(estadoCivilIngresado=="Soltero") // == o !=
				{
					alert("Mejor solo que mal acompañado");	
				}	
				else
					if(estadoCivilIngresado == "Casado")
					{
						alert("Casado que garron");
					}
					else
						if (estadoCivilIngresado == "Divorciado")
						{
							alert("Peor es ser viudo xd");
						}


}//FIN DE LA FUNCIÓN