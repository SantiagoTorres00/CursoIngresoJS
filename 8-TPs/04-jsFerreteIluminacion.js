/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
	{
 	const PRECIO = 35;
 	var cantidad;
 	var descuento;
 	var marca;	
 	var importeFinal;
 	var iibb;
 	var precioConDescuento;



 	cantidad = txtIdCantidad.value;
 	cantidad = parseInt(cantidad);
 	descuento = txtIdprecioDescuento.value;
 	marca = document.getElementById("Marca").value;


 		switch(cantidad)
 			{
 				case 1:
 				case 2:
 					descuento = 0;
 			
 				break;
				case 3:
 				
 				if(marca=="ArgentinaLuz")
 				{
 					descuento = 15;
 				}
 				break;


 			}
 			


 }
	 	/*switch (cantidad)
	 	{
	 		case 1:
	 		case 2: 
	 			descuento = 0;
	 			break;
	 		case 3: 
	 			descuento = 0.15;
	 			break;

	 			}
 	 	
*/

 	 

 		








 	/*
 		case 3:
 		}
 			if(marca == "ArgentinaLuz")
 			{
 				descuento = 15;
 			}
 			else
 				if (marca == "FelipeLamparas")
 				{
 					descuento = 10;
 				}
 				else
 				{
 					descuento = 5;
 				}
 			break;
 		case 4:
 			if( marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 			{
 				descuento = 25;
 			}
 				else 
 				{
 					descuento = 20;
 				}
 			break;
 		case 5:
 			if (marca == "ArgentinaLuz")
 			{
 				descuento = 40;
 			}
 				else
 				{
 					descuento = 30;
 				}
				break;
 		default:
 			descuento = 50;
		
		


  precioConDescuento = PRECIO - PRECIO * descuento/100;

 	precioConDescuento = txtIdprecioDescuento.value;

 	importeFinal = precioConDescuento * cantidad;

 	if(importeFinal > 120)
 	{
 		iibb = importeFinal * 10/100;
 		 //importeFinal += iibb;

 		alert("Total: $ " + importeFinal + " Usted pago $: " + iibb + " de Ingresos Brutos ");

 	}
 	else 
 	{
 		alert("Total $: " + importeFinal);
 	}
			*/
