/* Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad==15) // en if no poner ; 
	{
		alert("niña bonita");
	}
 }
//FIN DE LA FUNCION

//CONDICINAL SIMPLE


/*
if(condicion) puede ser verdadero o falso
{
	codigo
}

Operadores
Aritmeticos:/  %  +  -  * 
Relacionales: < > <= => = == != devuelven verdaderos o falsos
Logicos: y(&&) - o(||) - no (!) 
falso = false o 0
verdadero= true - 1 - 15 - 23

*/