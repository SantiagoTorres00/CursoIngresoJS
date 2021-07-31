/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;// variable de control del while
	i = 0;
	while(i < 10)
	{
		
		document.write( (i+1) + "<br>"); //br es salto de linea (enters)
		
		i = i + 1;	

	}


}//FIN DE LA FUNCIÓN
/* Segunda Opcion 
{
	var i;// variable de control del while
	i = 0;
	while(i < 10)
	{
		i = i + 1; //incremento de la variable de control
		document.write(i + "<br>"); //br es salto de linea (enters)
		

	}
*/










/*
OPCION 1 no tan recomendable
{
	var i;// variable de control del while
	i = 1;
	while(i < 11)
	{
		document.write(i + "<br>"); //br es salto de linea (enters)
		i = i + 1; //incremento de la variable de control

	}


} */












/*
while(condicion) //si es verdadero entra
{
	sentencias....//lo que quiero que se repita

	sentencia/s...//que cambien el valor de la condicion para que sea falsa y corte la secuencia

}
*/