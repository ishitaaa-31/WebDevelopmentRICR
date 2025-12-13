function Submit() {
  const nm = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value.trim();
  const num = document.getElementById("no").value.trim();
  const dob = document.getElementById("dob").value.trim();
  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("nameError").innerText =
      "only alphabet and Character allowed";
    return;
  }
  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("emailError").innerText = "Put correct Email";
    return;
  }
  if (!/^[6-9]\d{9}$/.test(num)) {
    document.getElementById("numError").innerText = "Enter valid phone no.";
    return;
  }
  const currentDate = new Date().getFullYear();
  const birthYear = Number(dob.split("-")[0]);
  console.log(currentDate);
  console.log(birthYear);

  if (currentDate - birthYear < 18) {
    document.getElementById("dobError").innerText = "You are UnderAge";
    return;
  }

  const data = {
    Name: nm,
    Email: em,
    Phone: num,
    DOB: dob,
  };

  console.log(data);
}
