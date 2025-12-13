function calculateTip() {
  const bill = document.getElementById("bill").value.trim();
  const service = document.getElementById("service").value;
  const people = document.getElementById("people").value.trim();
  const result = document.getElementById("Result");

  // Clear errors
  document.querySelectorAll(".Error").forEach(e => e.innerText = "");
  result.innerText = "";

  // Validation
  if (!bill || bill <= 0) {
    document.getElementById("BillError").innerText = "Enter valid bill amount";
    return;
  }

  if (!service) {
    document.getElementById("ServiceError").innerText = "Select service quality";
    return;
  }

  if (!people || people <= 0) {
    document.getElementById("PeopleError").innerText = "Enter valid number";
    return;
  }

  // Calculation
  const tipAmount = bill * service;
  const totalBill = Number(bill) + tipAmount;
  const perPerson = totalBill / people;

  result.innerText =
    `Each person should pay ${perPerson} ,including tip of ${tipAmount/people}`;
}