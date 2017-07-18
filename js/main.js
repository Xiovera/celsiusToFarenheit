function convertirCelsius(){
	var input = document.getElementById("dato").value;
	var gradosFarenheit = ((9/5)*input)+32;
	document.getElementById("resultado").innerHTML=gradosFarenheit;
}