var mensaje = document.getElementById("mensaje");

function callApi(direction){
	axios.get('http://18.217.42.219/backend/apis/setRegistro.php?estatus=' + direction)
	  .then(function (response) {
	    console.log(response);
	    mensaje.innerHTML = "Respuesta : " + response.data;
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
	  .finally(function () {
	});
}

window.onload = function(){
	let adelante = document.getElementById("adelante");
	let atras = document.getElementById("atras");
	let izquierda = document.getElementById("izquierda");
	let derecha = document.getElementById("derecha");
	let detener = document.getElementById("detener");

	adelante.addEventListener("click", function(){
		callApi("F")
	});

	atras.addEventListener("click", function(){
		callApi("B")
	});

	izquierda.addEventListener("click", function(){
		callApi("L")
	});

	derecha.addEventListener("click", function(){
		callApi("R")
	});

	detener.addEventListener("click", function(){
		callApi("S")
	});
}
