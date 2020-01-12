
var parinte = document.getElementById("continut")

var f = document.createElement("form");
f.setAttribute('method',"post");
//f.setAttribute('action',"test-form.php");
f.setAttribute('name','formular');

var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("Nume");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);


var nume = document.createElement("input"); //input element, text
nume.setAttribute('type',"text");
nume.setAttribute('placeholder',"nume");
nume.setAttribute('name',"nume");
nume.setAttribute("id","nume");
f.appendChild(nume);
nume.addEventListener ("keypress", function() {
	nume.style.backgroundColor="Pink";
});




var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("Email");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);


var email = document.createElement("input"); //input element, email
email.setAttribute('type',"email");
email.setAttribute('placeholder',"email");
email.setAttribute('name',"email");
email.setAttribute("id","email");
f.appendChild(email);
email.addEventListener ("keypress", function() {
	email.style.backgroundColor="Pink";
});





var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("Parola");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);


var password = document.createElement("input"); //input element, password
password.setAttribute('type',"password");
password.setAttribute('placeholder',"Parola");
password.setAttribute('name',"password");
password.setAttribute("id","password");
f.appendChild(password);
password.addEventListener ("keypress", function() {
	password.style.backgroundColor="Pink";
});





var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("De cate ori plecati, in medie, pe an in vacanta?");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);


var selectList = document.createElement("SELECT");//Lista select
selectList.setAttribute("id","selectList");
f.appendChild(selectList);

var array_values=["o singura data","de doua ori","mai mult de trei ori"];
for (var i=0; i < array_values.length; i++){
	var option=document.createElement("option");
	option.value = array_values[i];
    option.text = array_values[i];
    selectList.appendChild(option);
}








var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("Sex?");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);


var label = document.createElement("LABEL");
var c = document.createElement("INPUT");
c.setAttribute("type", "radio");
c.value="female";
c.name="gender";
if(localStorage.getItem("gender")=="female") c.checked=true;
label.htmlFor="female";
label.innerHTML="Female ";
f.appendChild(label);
f.appendChild(c);

var label = document.createElement("LABEL");
var c = document.createElement("INPUT");
c.setAttribute("type", "radio");
c.value="male";
c.name="gender";
if(localStorage.getItem("gender")=="male") c.checked=true;
label.htmlFor="male";
label.innerHTML=" Male ";
f.appendChild(label);
f.appendChild(c);




var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("Care este suma medie pe care o cheltuiti intr-o vacanta?");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);

var rng = document.createElement("INPUT");
rng.setAttribute("type", "range");
rng.setAttribute("min",100);
rng.setAttribute("max",4000);
rng.setAttribute("name","rng");
f.appendChild(rng);












var paragraf = document.createElement("p");
var txtparagraf = document.createTextNode("Doriti sa va abonati la newsletter?");
paragraf.appendChild(txtparagraf);
f.appendChild(paragraf);


var check = document.createElement("input");//checkbox
check.setAttribute("type","checkbox");
check.setAttribute("checked","checked");
check.setAttribute("name","checkbox")
check.setAttribute('value',"Newsletter");
f.appendChild(check);






var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");
s.addEventListener ("click", function(event) {
	event.preventDefault()
	
  var nume = document.forms["formular"]["nume"].value;
  if ( nume === ''){
	  alert("Campul nume trebuie sa fie completat");
	  return false;
  }
  var emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  var email= document.forms["formular"]["email"].value;
	if(email===''){
		alert("Campul email trebuie sa fie completat");
		return false;
	}else if(! emailregex.test(email)){
		alert("Introduceti o adresa de email valida");
		return false
	}
  var passwordregex=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
  var password=document.forms["formular"]["password"].value;
	if(password ===''){
		alert("campul password trebuie sa aiba o valoare");
		return false;
	}else if(!passwordregex.test(password)){
		alert("introduceti o parola valida");
		return false;
	}
	
	Swal.fire({
  title: "<i>Felicitari !</i>", 
  html: "Formularul a fost trimis cu succes !!! <br><b>Te asteptam pe site-ul nostru!</b>",  
  confirmButtonText: " <u>Inchide</u>", 
});
	return true; 
});
f.appendChild(s);
parinte.appendChild(f);




