var mensaje = document.getElementById("respuesta");

function callApi(){
	axios.get('http://3.131.100.124/backend/apis/getRegistro.php')
	  .then(function (response) {
	    console.log(response);
	    
	    let text = "";
	    switch(response.data){
	    	case 'S':
	    		text = "STOP";
	    	break;
	    	case 'F':
	    		text = "FORWARD";
	    	break;
	    	case 'B':
	    		text = "BACKWARD";
	    	break;
	    	case 'L':
	    		text = "LEFT";
	    	break;
	    	case "R":
	    		text = "RIGHT";
	    	break;
	    }
	    
	    mensaje.innerHTML = "Respuesta : " + text;
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
	  .finally(function () {
	});
}

window.onload = function(){
	setInterval(callApi, 2000);
}
