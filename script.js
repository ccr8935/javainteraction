let myButton = document.getElementById("button");
let output = document.getElementById("output");
let inputElement = document.getElementById("input");

let songs = ["Chateau Lobby #4 (in C for Two Virgins) by Father John Misty",
	"Lost in the Supermarket by The Clash",
	"Give Me Back My Man by The B-52's",
	"Dancing Barefoot by Patti Smith",
	"Human Behavior by Bjork",
	"Say Yes by Elliott Smith",
	"Viva La Megababes by Shampoo",
	"Look At Us Now (Honeycomb) by Daisy Jones & The Six",
	"This is Love by PJ Harvey",
	"Across The Universe by The Beatles",
	"Love My Way by The Psychedelic Furs",
	"The Only Living Boy in New York by Simon and Garfunkel",
	"Mandinka by Sinead O'Connor",
	]

let fonts = ["Helvetica",
	"Trebuchet MS",
	"Verdana",
	"Arial",	
	"Tahoma",
	]

myButton.addEventListener("click", function(){
	let currentInput = inputElement.value
	generate(currentInput)
	restyle()
});
output.style.fontSize = "xx-large"
function generate(currentInput){
	let randomIndex = Math.floor(Math.random()* songs.length);
	let randomText = songs[randomIndex];
	output.innerText = currentInput + " " + "is a good word. You should add" + " " + randomText + " " + "to your playlist!"
}

function restyle() {
  let randomR = Math.random() * 255;
  let randomG = Math.random() * 255;
  let randomB = Math.random() * 255;
  let randomColor = "rgb("+randomR+","+randomG+","+randomB+")";
  output.style.color = randomColor;

  let randomFont = Math.floor(Math.random()*fonts.length);
  let randomFontSelect = fonts[randomFont]
  console.log(randomFontSelect)
  output.style.fontFamily = randomFontSelect
  
  let randomNewR = Math.random() * 127.5;
  let randomNewG = Math.random() * 127.5;
  let randomNewB = Math.random() * 127.5;
  let randomNewColor = "rgb("+randomNewR+","+randomNewG+","+randomNewB+")";
  output.style.backgroundColor = randomNewColor;
}