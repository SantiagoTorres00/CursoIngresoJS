/*
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y
 localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento

*/

function mostrar()
{
	var estacion;
	var destino;
	var precio;
	var precioFinal;
	var porcentaje;

	precioFinal = 15000;
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacion)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
			porcentaje = 1.20;
			break;
			case "Mar del plata":
			porcentaje = 0.80;
			break;
			default:
			porcentaje = 0.90;
			break;
		}
		break;
		case "Verano":
		switch(destino)
		{
			case "Bariloche":
			porcentaje = 0.80;
			break;
			case "Mar del plata":
			porcentaje = 1.20;
			break;
			default:
			porcentaje = 1.10;
			break;
		}
		break;
	default:
		switch(destino)
		{
			case "Cordoba":
			porcentaje = 1;
			break;
			default:
			porcentaje = 1.10;
			break;
		}		
		break;			
	}
	valorFinal = precioFinal * porcentaje;
	alert(valorFinal);

}//FIN DE LA FUNCIÓN