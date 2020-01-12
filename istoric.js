//creare element nou
var song = document.createElement("audio");
//adaugare sursa
song.src = "Audio/audio1.mp3";
// adaugare atribut control
song.setAttribute("controls","controls");
//inserase in pagina HTML
document.getElementById("container-audio").appendChild(song);