$(document).ready(function() {
	$('.pedir').attr("disabled", "true");

	$.ajax({
	   	url: 'http://localhost:8000/js/menu.json', 
	   	dataType: 'json',
	   	success: carta
	});

	//Creamos la carta

	function carta(response){
		var count = 0;
		var plato;
		var total = 0;
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



		//AÑADIR

		function anadir(){
			count = count + 1;

			var cantidad = 1;
			
			var sum;
			var nombrePlato = $(this).parent().children("h6").text();
			var precioPlato = $(this).parent().children(".precio").text().split(":")[1].split("€")[0].trim();
			sum = parseFloat(precioPlato);

			sum = precioPlato * cantidad;

			$('.platos').append("<li value='"+sum+"' data-nombre='"+nombrePlato+"'>"+ nombrePlato +
				" - "+ precioPlato +" € x <input type='number' class='cantidad' name='cantidad' min='1' value='1'>"+
				" <img id='plato"+ count +"' class='supr' src='./images/supr.png'> </li>");
			
			$('.cantidad').change(function(){
				console.log( $(this).val() );
			});
			
			//llamamos a calcular total
			total = totalFuncion(total, sum);

			$('#total').text(total.toFixed(2));

			//llamamos a la funcion eliminar
			$('#plato'+count).click(eliminar);

			if ($('.platos').has('li')){
				$('.pedir').removeAttr("disabled");
			}

		} //fin AÑADIR

		//ELIMINAR

		function eliminar(){

			sum = parseFloat($(this).parent().attr("value"));
			console.log(sum);

			//sum = parseFloat($(this).parent().text().split("-")[1].split("€")[0].trim());
			$(this).parent().remove();

			total = total - sum;

			$('#total').text(total.toFixed(2));
		} //fin ELIMINAR


		//TOTAL
		function totalFuncion(total, sum){
			return total + sum;
		} //fin TOTAL


		function inputChange(){
			console.log( $('.cantidad').val() );
		}



	}//fin FUNCTION crear carta





});