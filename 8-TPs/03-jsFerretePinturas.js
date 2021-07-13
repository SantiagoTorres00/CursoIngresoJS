/*
Torres Santiago - DIV D
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var Centígrados;
	var Resultado;

	Fahrenheit = txtIdTemperatura.value;
	Centígrados = 32;
	Resultado = (Fahrenheit - Centígrados);

	alert (Resultado);


}

function CentigradosFahrenheit () 
{
	var Fahrenheit;
	var Centígrados;
	var Resultado;

	Fahrenheit = 32;
	Centígrados = txtIdTemperatura.value;
	Resultado = (Fahrenheit - Centígrados);

	alert (Resultado);
}
