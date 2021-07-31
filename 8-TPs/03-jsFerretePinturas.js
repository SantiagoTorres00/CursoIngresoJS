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


	Fahrenheit = txtIdTemperatura.value;
	Centígrados = (Fahrenheit - 32) / 1.8;

	alert(Centígrados);


}

function CentigradosFahrenheit () 
{
	var Fahrenheit;
	var Centígrados;


	Centígrados = txtIdTemperatura.value;
	Fahrenheit = Centígrados * 1.8 + 32;

	alert(Fahrenheit)
}
