/* Acá va todo el jquery */
$(document).ready( function(){
 // aqui va el codigo
 // alert("working");
 $.get('https://api.dribbble.com/v1/users/eduardo/shots?access_token=c86586c1235b2e5e9aef166131195f67e2f792cbe5cf7eaee7ea66923fc1a8ce', function(x) {
		//console.log(x);
		// array 721
		x.forEach(function(element){
			// elemento
			//console.log(element.pokemon_species.name[0]);
			console.log(x);
			console.log(element.images.normal);
			var  titulo = element.description;
			$("#dribbble").append("<li><img src='" + element.images.normal + "'><div class='overlay'<div class='text'>" +titulo+"</div></div></li>")
		});

		function imagen(hover){
			var  titulo = hover.title;
			var imagen = "https://cdn.dribbble.com/users/1972/screenshots/2291937/grav_1x.png" + titulo + ".jpg";
			$(".li").append("<li><img src='" + element.images.normal + "'></li>")

		}
		
	});
});

