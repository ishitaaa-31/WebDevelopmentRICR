function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}
function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
function R() {
  document.getElementById("bulb").style.backgroundColor = "red";
}
function B() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}
const userColor = document.getElementById("color");

userColor.addEventListener("change", () => changeBulbColor(userColor.value));
function changeBulbColor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}
function sB_control() {
  // document.getElementById("smartBulb").classList.toggle("on");
  const btn = document.getElementById("Sb_btn");
  if (Sb_btn.innerText === "on") {
    document.getElementById("Sb_btn").innerText = "off";

    document.getElementById("smartBulb").classList.add("on");
  } else {
    document.getElementById("Sb_btn").innerText = "on";

    document.getElementById("smartBulb").classList.remove("on");
  }
}

function sB_control2(){
    document.getElementById("smartBulb").classList.toggle("on")
}
