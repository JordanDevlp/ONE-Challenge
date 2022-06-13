var words = ["manzana","pera","holamundo"];
var intentos = 5;
var palabraElegida = ""; //Palabra que se eligira//
var StartButton = document.getElementById("iniciar-juego");
var txt = "";
var keyboard = document.querySelector("body");//donde se capturaran los eventos del teclado//
var ganar = 0;
var posicion = 230;
var repeticion = 0;






 

function Agregar () {
	let nuevaPalabra = document.getElementById("input-nueva-palabra").value;
	words.push(nuevaPalabra);
}


	






StartButton.addEventListener("click",  Iniciar);

keyboard.addEventListener('keypress', txt => {
	
	console.log(txt);
	txt = txt.key;
	let y = 700;


comprobar(txt,posicion,y);

});

<!-------------------------------CANVAS--------------------------------------------->





var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");




//notas: no se debe poner el valor que se quiere incrementar dentro del loop, esto provocara que el resultado se mantenga de la misma manera, es bueno declararlo fuera del loop y luego añadir el incremento con la forma que se quiera//
//Let sirve para declarar variables que solo esten dentro de un solo scope, no algo global, esto es bueno para variables que solo se quieren declarar una sola vez con el objetivo de traer el resultado de una variable global//




function Iniciar () {

//Palabra Elegida//
palabraElegida = words[Math.floor(Math.random()*words.length)];


pincel.fillStyle = "white";
pincel.rect(0,0,1200,800);
pincel.fill();

//rayas//

 var x = 200;

for (i=0; i<palabraElegida.length; i++) {



	pincel.fillStyle = "black";
     pincel.fillRect(x, 700, 100, 10);

     x+= 115;

            console.log(i)

        }
}

function resetear () {
	location.reload();
}



function LetraFalsa (txt,x,y) {
	pincel.fillStyle = "red";
	pincel.font = "100px Comic Sans MS";
	pincel.fillText(txt,x,y);
}



function EscribirTexto (txt,x,y) {

	pincel.fillStyle = "black"
	pincel.font = "100px Comic Sans MS";
	pincel.fillText(txt,x,y);

}

function cambiar () {
	encontrado = false;
}

function Cuerpo () {
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,260);
	pincel.lineTo(450,450);
	pincel.stroke();
	pincel.closePath();

	//brazos//

	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,350);
	pincel.lineTo(300,258);
	pincel.stroke();
	pincel.closePath();

	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,348);
	pincel.lineTo(580,257);
	pincel.stroke();
	pincel.closePath();

	//pies//

	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,450);
	pincel.lineTo(350,580);
	pincel.stroke();
	pincel.closePath();


	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,450);
	pincel.lineTo(550,580);
	pincel.stroke();
	pincel.closePath();



}


function cabeza () {
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.arc(450, 210, 50, 0, 2 * 3.14);
	pincel.stroke();


}




function cuello () {
	//palo mas largo//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(100,100);
	pincel.lineTo(450,100);
	pincel.closePath();
	pincel.stroke();

	//palo mas corto//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,100);
	pincel.lineTo(450,160);
	pincel.closePath();
	pincel.stroke();

}

function DibujoCuerpo () {


	pincel.beginPath();
	pincel.lineWidth = 5;
    pincel.moveTo(100, 100);
    pincel.lineTo(100, 700);
    pincel.closePath();
    pincel.stroke();


	
}

function DibujoBase () {
	//izquierda//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(100,700);
	pincel.lineTo(40,720);
	pincel.closePath();
	pincel.stroke();

	//derecha//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(100,700);
	pincel.lineTo(160,720);
	pincel.closePath();
	pincel.stroke();


	//base//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(40,720);
	pincel.lineTo(160,720);
	pincel.closePath();
	pincel.stroke();

}








function comprobar (txt,posicion,y) {


var encontrado = true;
	


for(i=0; i<palabraElegida.length;i++) {

	if(txt == palabraElegida[i]) {

				if(i == 0) {
					EscribirTexto(txt,posicion,y);
					encontrado = false;
					ganar = ganar + 1;
				} else if(i == 1 ) {
					EscribirTexto(txt, posicion + 120,y);
					encontrado = false;
					ganar = ganar + 1;
					
					
					
				 } else if (i == 2) {
				 	EscribirTexto(txt, posicion + 230,y);
				 	encontrado = false;
				 	ganar = ganar + 1;
				 	
				 					 	
				 } else if (i == 3) {
				 	EscribirTexto(txt, posicion + 330,y);
				 	encontrado = false;
				 	ganar = ganar + 1;
				 	
				 	
				 
				  } else if (i == 4) {
				  	EscribirTexto(txt, posicion + 450, y);
				  	encontrado = false;
				  	ganar = ganar + 1;
				  	
				  	
				  	
				  } else if (i == 5 ) {
				  	EscribirTexto(txt, posicion + 560, y);
				  	encontrado = false;
				  	ganar = ganar + 1;
				  	
		
				  } else if (i == 6 ) {
				  	EscribirTexto(txt, posicion + 670, y);
				  	encontrado = false;
				  	ganar = ganar + 1;
				  	
				  	
				  } else if ( i == 7) {
				  	EscribirTexto(txt, posicion + 790, y);
				  	encontrado = false;
				 ganar = ganar + 1;
				  	
				  	
				  } else if ( i == 8) {
				  	EscribirTexto(txt, posicion + 900, y);
				  	encontrado = false;
				  	ganar = ganar + 1;
				  	
				} 
			} 

		} if (encontrado) { 
			intentos = intentos - 1;

		} if (intentos == -1) {

			Cuerpo();
			LetraFalsa(txt,800,400);
			alert("PERDISTE!");
			resetear();

		} else if (ganar == palabraElegida.length) {
			alert("FELICIDADES, GANASTE!");
			resetear();
		} if (intentos == 4) {
			DibujoBase();
			LetraFalsa(txt,620,400);
			
		} else if (intentos == 3) {
			DibujoCuerpo();
			LetraFalsa(txt,690,400);
			
		} else if (intentos == 2) {
			cuello();
			LetraFalsa(txt,740,400);
			
		} else if (intentos == 1) {
			cabeza();
			alert("Solo te queda 1 intento!");
			LetraFalsa(txt,820,400);
			intentos = 0;
		}


	};
			


	 

	






