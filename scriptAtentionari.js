var div = document.getElementById("continut-atentionari");
div.getElementsByClassName("Clasa1")[0].style.color = "red";

var list = document.getElementsByTagName("p");
var i;
for (i = 0; i< list.length; i++){
	list[i].style.fontSize = "20px";
}