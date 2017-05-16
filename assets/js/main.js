var cambiarTexto = function(){
	this.childNodes[1].childNodes[1].innerHTML ="hola mundo";	
}

function principal(){
	var ultimo = document.querySelector("#menu-principal ul li:last-child");
	ultimo.addEventListener("mouseover", function(){
		alert("estoy sobre el menu")
	});
	var menu = document.getElementById("menu-principal");
	menu.addEventListener("click",cambiarTexto);
	var div = getElementByTagName("div")[0];
	div.addEventListener("click",cambiarTexto);
	var miInput= document.getElementById("mi-input");

	miInput.addEventListener("focus", function(){
		console.log("entro a mi input");
	});
	miInput.addEventListener("blur",function(){
		console.log("Salgo del Input");
	});
	miInput.addEventListener("change",function(){
		console.log("Cambiando!");
	});

}
principal();
