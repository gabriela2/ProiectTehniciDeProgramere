
var parinte = document.getElementById("formular")

var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"test-form.php");
f.setAttribute('name','formular');

var txt = document.createElement("input"); //input element, text
txt.setAttribute('type',"text");
txt.setAttribute('placeholder',"Nume");
txt.setAttribute('name',"nume");

var email = document.createElement("input"); //input element, email
email.setAttribute('type',"text");
email.setAttribute('placeholder',"Email");
email.setAttribute('name',"email");

var password = document.createElement("input"); //input element, password
password.setAttribute('type',"password");
password.setAttribute('placeholder',"Parola");
password.setAttribute('name',"password");

var p1 =document.createElement("p");
var txt1 = document.createTextNode("De cate ori mergeti in vacanta pe an?");
p1.appendChild(txt1);

var selectList = document.createElement("SELECT");//Lista select
selectList.setAttribute("id","mySelect");

var p2 = document. createElement("p");
var txt2=document.createTextNode("Doriti sa va abonati la Newsletter?");
p2.appendChild(txt2);


var check = document.createElement("input");//checkbox
check.setAttribute("type","checkbox");
check.setAttribute("checked","checked");
check.setAttribute("name","checkbox")
check.setAttribute('value',"Newsletter");

f.appendChild(txt);
f.appendChild(email);
f.appendChild(password);
f.appendChild(p1);
f.appendChild(selectList);
f.appendChild(p2);
f.appendChild(check);

var p3 = document. createElement("p");
var txt3=document.createTextNode("Sex");
p3.appendChild(txt3);
f.appendChild(p3);


var gender=["feminin","masculin"];
for (var i=0;i<gender.length;i++){
	
	var rad=document.createElement("input");
	rad.type="radio";
	rad.name="gender";
	if(i==0) rad.checked=true;
	rad.value=gender[i];
	var p5 = document. createElement("p");
	var txt5=document.createTextNode(gender[i]);
	p5.appendChild(txt5);
	f.appendChild(p5);
	f.appendChild(rad);
	
}

var p4 = document. createElement("p");
var txt4=document.createTextNode("Care este suma medie(euro) pe care o cheltuiti in vacanta?(100e-4000e)");
p4.appendChild(txt4);
f.appendChild(p4);

var rng = document.createElement("INPUT");
rng.setAttribute("type", "range");
rng.setAttribute("min",100);
rng.setAttribute("max",4000);
rng.setAttribute("name","rng");
f.appendChild(rng);

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");
s.addEventListener ("click", function() {
	
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
	return true;
	
 
});
f.appendChild(s);




var array_values=["o singura data","de doua ori","mai mult de trei ori"];
for (var i=0; i < array_values.length; i++){
	var option=document.createElement("option");
	option.value = array_values[i];
    option.text = array_values[i];
    selectList.appendChild(option);
}


parinte.appendChild(f);

