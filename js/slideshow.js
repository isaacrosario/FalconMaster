
	var i = 0; // Start point
	var images = []; //array para las imagenes
	var time = 2000;

	// Image List
	
	images[0] = 'imagenes/bocachica/bocachica1.jpg';
	images[1] = 'imagenes/bocachica/bocachica2.jpg';
	images[2] = 'imagenes/bocachica/bocachica3.jpg';
	images[3] = 'imagenes/bocachica/bocachica4.jpg';
	images[4] = 'imagenes/bocachica/bocachica5.jpg';

	images[5] = 'imagenes/puntacana/puntacana1.jpg';
	images[6] = 'imagenes/puntacana/puntacana2.jpg';
	images[7] = 'imagenes/puntacana/puntacana3.jpg';
	images[8] = 'imagenes/puntacana/puntacana4.jpg';
	images[9] = 'imagenes/puntacana/puntacana5.jpg';
	

	// Change Image
	function changeImg(){
		document.slide.src = images[i]; 

					
//slide es el objeto que va a recibir todas la images del array
		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;


