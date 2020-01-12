var vacante = [];
//obiect vacanta
function Vacanta(nume, src){
	var imagine = document.createElement("img");
	imagine.src = src;
	imagine.style.width = "300px";
	imagine.style.height = "300px";
	this.nume = nume;
	this.pret = parseFloat(Math.floor(Math.random() * 2000) + 1);
	this.durata = parseInt(Math.floor(Math.random() * 20) + 1);
	this.numarPersoane = Math.floor(Math.random() * 6) + 1 ;
	document.getElementById("continut").appendChild(imagine);
	
	var nm = document.createElement("p");
	var txt = document.createTextNode("Nume: " + this.nume)
	nm.appendChild(txt);
	nm.style.fontSize = "25px";
	document.getElementById("continut").appendChild(nm);
	
	var nm = document.createElement("p");
	var txt = document.createTextNode("Pret: " + this.pret + " euro")
	nm.appendChild(txt);
	nm.style.fontSize = "25px";
	document.getElementById("continut").appendChild(nm);
	
	
	var nm = document.createElement("p");
	var txt = document.createTextNode("Durata: " + this.durata + " zile")
	nm.appendChild(txt);
	nm.style.fontSize = "25px";
	document.getElementById("continut").appendChild(nm);
	
	
	var nm = document.createElement("p");
	var txt = document.createTextNode("Numar persoane: " + this.numarPersoane );
	nm.appendChild(txt);
	nm.style.fontSize = "25px";
	document.getElementById("continut").appendChild(nm);
	
}


var i = 1;
function FunctieAdaugare(){
	var vacantaNoua = new Vacanta("vacanta "+i, "Images/galerie"+i+".jpg");
	vacante.push(vacantaNoua);
	i++;
	
}

function FunctieStergere(){
	vacante.pop();
	var select = document.getElementById("continut");
	select.removeChild(select.lastChild);
	select.removeChild(select.lastChild);
	select.removeChild(select.lastChild);
	select.removeChild(select.lastChild);
	select.removeChild(select.lastChild);
}

function FunctieNrVacante(){
	alert("Numarul de vacante din vector este: " + vacante.length);
	
}



function Vacanta2(nume, src){
	var imagine = document.createElement("img");
	imagine.src = src;
	imagine.style.width = "300px";
	imagine.style.height = "300px";
	this.nume = nume;
	this.pret = parseFloat(Math.floor(Math.random() * 2000) + 1);
	this.durata = parseInt(Math.floor(Math.random() * 20) + 1);
	this.numarPersoane = Math.floor(Math.random() * 6) + 1 ;
}


var vacante2 = [];
var vacantaNoua = new Vacanta2("Grecia ", "Images/index2.jpg");
vacante2.push(vacantaNoua);
var vacantaNoua = new Vacanta2("Spania ", "Images/index4.jpg");
vacante2.push(vacantaNoua);
var vacantaNoua = new Vacanta2("Thailanda ", "Images/index5.jpg");
vacante2.push(vacantaNoua);



function FunctieConcateneaza(){
	var vacante3 = vacante.concat(vacante2);
	alert(vacante3.length);
	
}



var myVar = setInterval(setColor, 300);
 
function setColor() {
  	var x = document.getElementById("continut");
  	x.style.backgroundColor = x.style.backgroundColor == "purple" ? "pink" : "purple";
}
function stopColor() {
  	clearInterval(myVar);

}





//cerinta proprie: Sa se afiseze numarul elemtelor din array dupa concatenare