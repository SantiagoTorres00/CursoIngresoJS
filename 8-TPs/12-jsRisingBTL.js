/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	
	var edad

 	edad=prompt("Ingrese su edad");

 	while(isNaN(edad) || edad<18 || edad >90)
 	{
 		edad = prompt("Reingrese su edad");
 	}
	 	
	txtIdEdad.value = edad;

	var sexo;
	
	sexo = prompt("Ingrese F para femenino, M por masculino, o NB para No binario");

	while(sexo != 'f' && sexo != 'm' && sexo != 'nb')

		{
			sexo = prompt("No corresponde a un genero");
		}
		txtIdSexo.value = sexo;

	var estadoCivil;


	estadoCivil = prompt("Ingrese su estado Civil... si es 1 soltero, 2 para casado, 3 para divorciado, 4 para viudo")
	while(estadoCivil<1 &&	estadoCivil>4)
	{
		estadoCivil = prompt("No cumple el enunciado... si es 1 soltero, 2 para casado, 3 para divorciado, 4 para viudo");


	}

	txtIdEstadoCivil.value = estadoCivil;

	var sueldoBruto;

	sueldoBruto = prompt("Ingrese su Sueldo Bruto no menor a $8000");

	while(sueldoBruto<8000)
	{
		prompt("no se cumple el enunciado");
	}
	txtIdSueldo.value = sueldoBruto;


	var legajo;

	legajo = prompt("Ingrese su numero de legajo de 4 cifras ");

	while(legajo<1000 || legajo>9999)
	{
		prompt("no tiene 4 cifras");
	}
	txtIdLegajo.value = legajo;

	var nacionalidad;

	nacionalidad = prompt("Ingrese su nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(nacionalidad == 'a' || nacionalidad == 'e' || nacionalidad == 'n')
	{
		prompt("No se cumple con la consigna");
	}

	txtIdNacionalidad.value = nacionalidad;

}

/*	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;
 	var mensaje;
 	*/