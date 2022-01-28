
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar () {
	var textE = document.getElementById("input-texto").value;

	textE = textE.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

	document.getElementById("msg").value = textE;
}


 
 function desencriptar () {

 	var textD = document.getElementById("input-texto").value;

 	textD = textD.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"i").replace(/o/g,"ober").replace(/ufat/g,"u");


 		document.getElementById("msg").value = textD;

 }






 function CopiarTexto() {

     var copyText = document.getElementById("msg");

    copyText.select();

    navigator.clipboard.writeText(copyText.value);

}