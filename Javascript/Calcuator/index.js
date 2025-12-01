function Input(char) {
  if (char === "=") {
    try {
      const exp = document.getElementById("display").value;
      document.getElementById("display").value = eval(exp);
    } catch (error) {
      alert("Invalid Ecpression");
      document.getElementById("display").value = "";
    }
  } else if (char === "C") {
    document.getElementById("display").value = "";
  } else {
    let exp = document.getElementById("display").value;
    //   put previous data in  a const
    exp = exp + char;
    document.getElementById("display").value = exp;
    // getting element from div that has id display to the char
  }
}
