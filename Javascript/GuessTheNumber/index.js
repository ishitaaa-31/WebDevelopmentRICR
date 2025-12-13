const secretNumber = Math.floor(Math.random() * 20) + 1;
console.log("Secret Number:", secretNumber);

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (!guess || guess < 1 || guess > 20) {
    message.innerText = "Please enter a number between 1 and 20.";
    message.className = "text-danger";
    return;
  }

  if (guess > secretNumber) {
    message.innerText = " Try a Smaller Number";
    message.className = "text-warning";
  } else if (guess < secretNumber) {
    message.innerText = " Try a Larger Number";
    message.className = "text-warning";
  } else {
    message.innerText = "Congratulations!";
    message.className = "text-success";
  }
}
