function Calculate() {
  const bd = document.getElementById("birthDate").value;
  const cd = document.getElementById("currentDate").value;
  const result = document.getElementById("Result");

  document.querySelectorAll(".Error").forEach((e) => {
    e.innerText = "";
  });
  result.innerText = "";

  if (!bd) {
    document.getElementById("BirthError").innerText = "Required";
    return;
  }

  if (!cd) {
    document.getElementById("CurrentError").innerText = "Required";
    return;
  }

  if (bd > cd) {
    document.getElementById("CurrentError").innerText =
      "Current date must be after Birth date";
    return;
  }

  const birthDate = new Date(bd);
  const currentDate = new Date(cd);

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age = age - 1;
  }

  result.innerText = `Your age is ${age} years.`;
}