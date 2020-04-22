var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".button");

function setGradient(){
    body.style.background =
         "linear-gradient(to right, "
         + color1.value
         + ", "
         + color2.value
         + ")";

         css.textContent = body.style.background;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

function addRandomButton(){
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode('random'));
    random.appendChild(btn);
}

window.addEventListener(document.onload, setGradient());

random.addEventListener('click', setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

addRandomButton();

