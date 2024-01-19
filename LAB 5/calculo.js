//Aqui se recviben los datos de cada empleado

var suma = 0;

	function empleado1(){
		

		for (var i = 0; i < 5; i++){
			var empleado1 = document.getElementsByClassName("empleado1")[i].value;
			suma += parseInt(empleado1);
		}
		resultado1 = document.getElementById("resultado1")
		resultado1.innerHTML += `<b style="font-size: 40px; font-weight: bold;">${suma}</b>`

	}

	function empleado2(){
		
		suma = 0;

		for (var i = 0; i < 5; i++){
			var empleado2 = document.getElementsByClassName("empleado2")[i].value;
			suma += parseInt(empleado2);
		}
		resultado2 = document.getElementById("resultado2")
		resultado2.innerHTML += `<b style="font-size: 40px; font-weight: bold;">${suma}</b>`
	}


	function empleado3(){
		
		suma = 0;

		for (var i = 0; i < 5; i++){
			var empleado3 = document.getElementsByClassName("empleado3")[i].value;
			suma += parseInt(empleado3);
		}
		resultado3 = document.getElementById("resultado3")
		resultado3.innerHTML += `<b style="font-size: 40px; font-weight: bold;">${suma}</b>`
	}
