async function GetNewJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
  const data = await response.json();
//   console.log(data);
//   converting non readable api fetched data into readable json format
document.getElementById("setup").innerText=data.setup;
document.getElementById("punchLine").innerText=data.punchline;

  
}