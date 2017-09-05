$(document).ready(function() {
	$('.pedir').attr("disabled", "true");

	$.ajax({
	   	url: 'http://localhost:8000/js/menu.json', 
	   	dataType: 'json',
	   	success: carta
	});

	var count = 0;
	var total = 0;

	//Creamos la carta

	function carta(response){
		var plato;
		var categoria = response;

		categoria = Object.keys(categoria);

		for(var p = 0; p < categoria.length; p++){
			nombreCategoria = categoria[p];
			$('.menu').append("<h2>"+nombreCategoria+"</h2> <div class='row'> <div class='col-9'>"+
				"<div class='row "+nombreCategoria+"'> </div> </div> </div>");

			for(var i=0; i < response[nombreCategoria].length; i++){
				plato = response[nombreCategoria][i];

				$('.'+nombreCategoria+'').append("<div class='col-4'>" + 
						"<h6>" + plato.nombre + "</h6> <img class='img' src='" + plato.imagen + "'>" +
						" <p class='descripcion'> <i>"+ plato.descripcion +"</i> </p> <p class='precio'>" +
						"<strong>Precio: " + plato.precio + " € </strong> </p>"+
						"<button class='btn btn-success anadir' type='button'>Añadir</button> </div>");
			}//fin FOR

		}//finn FOR

		//llamamos a la funcion añadir
		$('.anadir').click(anadir);

	}//fin FUNCTION crear carta


	//AÑADIR

	function anadir(){
		count = count + 1;

		var cantidad = 1;
		var sum;
		var nombrePlato = $(this).parent().children("h6").text();
		var precioPlato = $(this).parent().children(".precio").text().split(":")[1].split("€")[0].trim();
		sum = parseFloat(precioPlato);

		$('.platos').append("<li value='"+sum+"' data-nombre='"+nombrePlato+"'>"+ nombrePlato +
			" - "+ precioPlato +" € x <input type='number' class='cantidad' name='cantidad' min='1' value='1'>"+
			" <img id='plato"+ count +"' class='supr' src='./images/supr.png'> </li>");
		
		//llamamos a inputChange cuando cambie el valor del input
		$('.cantidad').change(inputChange);

		//llamamos a calcular total
		total = totalFunction(sum, cantidad);

		$('#total').text(Math.abs(total.toFixed(2)));

		//llamamos a la funcion eliminar
		$('#plato'+count).click(eliminar);

		//Quito el atributo disabled del boton PEDIR
		if ($('.platos').has('li')){
			$('.pedir').removeAttr("disabled");
		}

	} //fin AÑADIR

	//ELIMINAR

	function eliminar(){
		cantidad = parseFloat($(this).parent().children('input').val());

		precio = parseFloat($(this).parent().attr("value"));

		$(this).parent().remove();

		total = total - (precio * cantidad);

		$('#total').text(Math.abs(total.toFixed(2)));
	} //fin ELIMINAR


	//TOTAL
	function totalFunction(precio, cantidad){
		total = total + (cantidad * precio) ;
		return total;
	} //fin TOTAL

	//TOTAL
	function totalChange(precio, cantidad){
		total = total - ( (cantidad - 1 ) * precio) + (cantidad * precio);
		return total;
	} //fin TOTAL


	function inputChange(){
		cantidad = parseFloat($(this).val());

		precio = parseFloat($(this).parent().attr('value'));

		total = totalChange(precio, cantidad);

		$('#total').text(Math.abs(total.toFixed(2)));
	}



});