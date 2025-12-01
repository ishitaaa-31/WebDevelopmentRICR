function start() {
  console.log("Game Started");
  document.getElementById("p1btn").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
  // enabling and disabling button
}
function restart() {
  console.log("Game Restarted");
  window.location.reload();
}
function p1Play() {
  console.log("Player 1 playing");

  let score = Number(document.getElementById("p1sc").innerText);
  //    innerText is of label  not of Input(Self closing tags)
  //    type casting into number datatype as the input in lable tag is always string
  const df = Math.floor(Math.random() * 6) + 1;
  console.log(df);
  switch (df) {
    case 1:
      document.getElementById("p1dice").src = "img/1.jpg";
      break;
    case 2:
      document.getElementById("p1dice").src = "img/2.jpg";
      break;
    case 3:
      document.getElementById("p1dice").src = "img/3.jpg";
      break;
    case 4:
      document.getElementById("p1dice").src = "img/4.jpg";
      break;

    case 5:
      document.getElementById("p1dice").src = "img/d5.jpg";
      break;
    case 6:
      document.getElementById("p1dice").src = "img/dice.jpg";
      break;
    default:
      document.getElementById("p1dice").src = "img/dice.jpg";
      break;
  }
  if (df === 6) {
    document.getElementById("p1btn").disabled = true;
    document.getElementById("p2btn").disabled = false;
  } else {
    score = score + df;
    document.getElementById("p1sc").innerText = score;
  }
}

function p2Play() {
  console.log("Player 2 playing");
  let score = Number(document.getElementById("p2sc").innerText);
  const df = Math.floor(Math.random() * 6) + 1;
document.getElementById("p2dice").src= `img/${df}.jpg`
  if (df === 6) {
    document.getElementById("p1btn").disabled = false;
    document.getElementById("p2btn").disabled = true;
  } else {
    score = score + df;
    document.getElementById("p2sc").innerText = score;
  }
}
