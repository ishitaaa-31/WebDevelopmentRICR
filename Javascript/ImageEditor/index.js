let b = 1;
c = 1;
c = 1;
g = 0;
s = 0;
const img = document.getElementById("image").src;

if (image === "http://127.0.0.1:5500/Javascript/ImageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}

function UploadImage() {
  const file = document.getElementById("upload").files[0];

  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("UploadLabel").style.display = "none";
}
function ApplyFilter(){
document.getElementById("image").style.filter=`brightness(${b}),contrast(${c})`;
}
function changeBrightness() {
  const value = document.getElementById("Brightness").value;
  document.getElementById("image").style.filter = `brightness(${
    (value * 2) / 100
  })`;
}
function changeContrast() {
  const value = document.getElementById("Contrast").value;
  document.getElementById("image").style.filter = `contrast(${
    (value * 2) / 100
  })`;
}
function changeBlur() {
  const value = document.getElementById("blur").value;
  document.getElementById("image").style.filter = `blur(${
    (value * 2) / 100
  }px)`;
}
function changeHue() {
  const value = document.getElementById("hue").value;
  document.getElementById("image").style.filter = `hue-rotate(${
    (value * 2) / 100
  })`;
}
function changeGrey() {
  const value = document.getElementById("grey").value;
  document.getElementById("image").style.filter = `grayscale(${value}%)`;
}
function changeSepia() {
  const value = document.getElementById("sepia").value;
  document.getElementById("image").style.filter = `sepia(${(value * 2) / 100})`;
}
function changeInvert() {
  const value = document.getElementById("invert").value;
  document.getElementById("image").style.filter = `sepia(${value}%)`;
}
