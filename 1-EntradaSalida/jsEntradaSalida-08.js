/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var n1 = parseInt (document.getElementById('txtIdNumeroDividendo').value);
	var n2 = parseInt (document.getElementById('txtIdNumeroDivisor').value);
	r = n1 / n2;


	alert("EL resto es: " + r);



}
