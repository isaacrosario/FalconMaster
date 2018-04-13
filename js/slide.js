
	var i = 0; // Start point
	var images = []; //array para las imagenes
	var time = 3000;

	// Image List
	images[0] = 'imagenes/catalina.jpg';
	images[1] = 'imagenes/BocaChica.jpg';
	images[2] = 'imagenes/puntacana.jpg';
	

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


