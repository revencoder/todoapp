
function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}

function button() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTarea(inputBoxValue);
		clean();
	}
}

function doTarea(tareaText) {
	var tarea = document.getElementById("tarea");

	//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "tarea";
	elemento.innerHTML = tareaText;

	//Crear ícono
	var icono = document.createElement("i")
	icono.className = "fa fa-bitbucket"

	//EliminarBoton
	var boton = document.createElement("boton")
    boton.className = "eliminar"
    boton.id = tarea.childNodes.length
    boton.onclick = function() {eliminarTarea(this)}

	//check-box
	var checkbox = document.createElement("input")
	checkbox.type = "checkbox"
	checkbox.className = "check"
    checkbox.checked = false
    checkbox.id = tarea.childNodes.length
    checkbox.onchange = function() {linea(this)}

	//Agregar elementos a tarea
	boton.appendChild(icono)
	elemento.appendChild(boton)
	elemento.appendChild(checkbox)

	tarea.appendChild(elemento);
}

function clean() {
	var inputBox = document.getElementById("inputBox")
	inputBox.value = "";
	inputBox.focus();
}


function eliminarTarea(boton){
    var tarea = document.getElementById("tarea")
    console.log("Se va a borrar el: " + boton.id)
    tarea.removeChild(tarea.childNodes[parseInt(boton.id)])
    reIDBuckets()
}

function reIDBuckets(){
    var tarea = document.getElementById("tarea")

    for (var i=1; i < tarea.childNodes.length; i++)
    {
        var elemento = tarea.childNodes[i-1].nextSibling
        var boton = elemento.childNodes[1]
        boton.id = i
        var checkbox = elemento.childNodes[2]
        checkbox.id = i
    }
}

function linea(checkbox){
	var tarea = document.getElementById("tarea")
	var elemento = tarea.childNodes[parseInt(checkbox.id)-1].nextSibling

	if(checkbox.checked == true){
		elemento.style.textDecoration = "line-through"
	}
	else{
		elemento.style.textDecoration = "none"
	}
}




