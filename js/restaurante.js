$.ajax({
   	url: 'http://localhost:8000/js/menu.json', 
   	dataType: 'json',
   	success: carta
});


function carta(response){

	var data = response.carnes;

		for(i = 0; i < data.length; i++){
			$('.carnes').after("<div class='row'> <div class='col-7 carnes-json'>" + 
					"<h6>" + data[i].nombre + "</h6> <img class='img-json' src='" + data[i].imagen + "'>" +
					" <p class='descripcion-json'> <i>"+ data[i].descripcion +"</i> </p> <p class='precio-json'>" +
					"<strong>Precio: " + data[i].precio + " € </strong> </p> </div>"+
				"<div class='col-2'> <button class='pedido' type='button'> Pedir</button> </div> </div>");
		}

	data = response.entrantes;

		for(i = 0; i < data.length; i++){
			$('.entrantes').after("<div class='row'> <div class='col-7 entrantes-json'>" + 
					"<h6>" + data[i].nombre + "</h6> <img class='img-json' src='" + data[i].imagen + "'>" +
					" <p class='descripcion-json'> <i>"+ data[i].descripcion +"</i> </p> <p class='precio-json'>" +
					"<strong>Precio: " + data[i].precio + " € </strong> </p> </div>"+
				"<div class='col-2'> <button class='pedido' type='button'> Pedir</button> </div> </div>");
		}

	data = response.pescados;

	for(i = 0; i < data.length; i++){
		$('.pescados').after("<div class='row'> <div class='col-7 pescados-json'>" + 
				"<h6>" + data[i].nombre + "</h6> <img class='img-json' src='" + data[i].imagen + "'>" +
				" <p class='descripcion-json'> <i>"+ data[i].descripcion +"</i> </p> <p class='precio-json'>" +
				"<strong>Precio: " + data[i].precio + " € </strong> </p> </div>"+
				"<div class='col-2'> <button class='pedido' type='button'> Pedir</button> </div> </div>");
	}

	data = response.postres;

	for(i = 0; i < data.length; i++){
		$('.postres').after("<div class='row'> <div class='col-7 postres-json'>" + 
				"<h6>" + data[i].nombre + "</h6> <img class='img-json' src='" + data[i].imagen + "'>" +
				" <p class='descripcion-json'> <i>"+ data[i].descripcion +"</i> </p> <p class='precio-json'>" +
				"<strong>Precio: " + data[i].precio + " € </strong> </p> </div>"+
				"<div class='col-2'> <button class='pedido' type='button'> Pedir</button> </div> </div>");
	}

	data = response.bebidas;

	for(i = 0; i < data.length; i++){
		$('.bebidas').after("<div class='row'> <div class='col-7 bebidas-json'>" + 
				"<h6>" + data[i].nombre + "</h6> <img class='img-json' src='" + data[i].imagen + "'>" +
				" <p class='descripcion-json'> <i>"+ data[i].descripcion +"</i> </p> <p class='precio-json'>" +
				"<strong>Precio: " + data[i].precio + " € </strong> </p> </div>"+
				"<div class='col-2'> <button class='pedido' type='button'> Pedir</button> </div> </div>");
	}

}