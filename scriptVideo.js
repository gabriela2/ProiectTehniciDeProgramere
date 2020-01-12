

//creare element nou
var video1 = document.createElement("video");
//adaugare sursa
video1.src = "Movies/Incredible+Balloons+of+Cappadocia+-+Amazing+Places.mp4";
// adaugare atribut control
video1.setAttribute("controls","controls");
video1.play();
//inserase in pagina HTML
document.getElementById("item1").appendChild(video1);





//creare element nou
var video2 = document.createElement("video");
//adaugare sursa
video2.src = "Movies/Turkey.Home_-_Turkey’s_Turquoise_Coast_from_the_Air.mp4";
// adaugare atribut control
video2.setAttribute("controls","controls");
video2.play();
//inserase in pagina HTML
document.getElementById("item3").appendChild(video2);




//creare element nou
var video3 = document.createElement("video");
//adaugare sursa
video3.src = "Movies/DroneTurk_Grubu_-_Doğa_İçin_Uç_-_Karadeniz.mp4";
// adaugare atribut control
video3.setAttribute("controls","controls");
video3.style.width = "500px";
video3.style.marginTop = "30px";
video3.play();
//inserase in pagina HTML
document.getElementById("item4").appendChild(video3);





//creare element nou
var video4 = document.createElement("video");
//adaugare sursa
video4.src = "Movies/️Antalya_amazing_Turkey_4K_The_Land_of_Legend.mp4";
// adaugare atribut control
video4.setAttribute("controls","controls");
//inserase in pagina HTML
document.getElementById("item6").appendChild(video4);




//creare element nou
var video5 = document.createElement("video");
//adaugare sursa
video5.src = "Movies/Alanya_2018_4K___Turkey_(Cinematic_Trailer).mp4";
// adaugare atribut control
video5.setAttribute("controls","controls");
//inserase in pagina HTML
document.getElementById("item7").appendChild(video5);



//creare element nou
var video6 = document.createElement("video");
//adaugare sursa
video6.src = "Movies/Watchtower+of+Turkey.mp4";
// adaugare atribut control
video6.setAttribute("controls","controls");
//inserase in pagina HTML
document.getElementById("item8").appendChild(video6);



//stergere paragraf
var p = document.getElementById("p1");
var parinte = document.getElementById("continut");
parinte.removeChild(p);