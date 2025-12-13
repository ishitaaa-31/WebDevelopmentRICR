const secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("Secret Number:", secretNumber); // for testing

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (!guess || guess < 1 || guess > 10) {
    message.innerText = "Please enter a number between 1 and 10.";
    message.className = "text-danger";
    return;
  }

  if (guess > secretNumber) {
    message.innerText = "Oops! Sorry Try a Smaller Number";
    message.className = "text-warning";
  } 
  else if (guess < secretNumber) {
    message.innerText = "Oops! Sorry Try a Larger Number";
    message.className = "text-warning";
  } 
  else {
    message.innerText = "Congratulations! You have choosen the right number.";
    message.className = "text-success";
  }
}