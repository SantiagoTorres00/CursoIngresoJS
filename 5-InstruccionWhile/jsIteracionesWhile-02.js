/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var i;// variable de control del while
	i = 10;//Inicializacion de la variable de control
	while( i > 0) // condicion de continuidad
	{
		
		document.write( i + "<br>"); //br es salto de linea (enters)
		
		i = i - 1;//decremento de variable de control	

	}

}//FIN DE LA FUNCIÓN