const userColor = document.getElementById("color");
userColor.addEventListener("change", () => changeBulbColor(userColor.value));
function changeBulbColor(color) {
  document.getElementById("subDiv").style.backgroundColor = color;
}



const userColor2 = document.getElementById("color2");
userColor2.addEventListener("change", () => changeBulbColor2(userColor2.value));
function changeBulbColor2(color2) {
  document.getElementById("h1").style.color = color2;
}




const userColor3 = document.getElementById("color3");
userColor3.addEventListener("change", () => changeBulbColor3(userColor3.value));
function changeBulbColor3(color3) {
  document.getElementById("p1").style.color= color3;
}
