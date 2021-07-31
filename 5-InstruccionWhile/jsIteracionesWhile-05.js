/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese F para FEMENINO o M para MASCULINO");

	while(sexoIngresado != 'f' && sexoIngresado != 'm')
	{
		sexoIngresado = prompt("No se cumple el enunciado, reingrese una letra F o M");
	}
		switch(sexoIngresado)
		{
			case 'f':
			sexoIngresado = "Femenino";
			break;
			case 'm':
			sexoIngresado = "Masculino";
			break;
		}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN