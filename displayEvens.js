function validateItems() {

  var startNumInput = document.forms["displayEvens"]["startNumInput"].value;
  var endNumInput = document.forms["displayEvens"]["endNumInput"].value;
  var stepNumInput = document.forms["displayEvens"]["stepNumInput"].value;

  document.getElementById("results").style.display = "block";

  document.getElementById("startingNumber").innerText = startNumInput;
  document.getElementById("endingNumber").innerText = endNumInput;
  document.getElementById("step").innerText = stepNumInput;

  document.getElementById("evens").innerText = calculation();

  // Return false so that the form doesn't submit and the results will stay visible
  return false;
}

function calculation() {
  const start = parseInt(document.getElementById("startNumInput").value);
  const end = parseInt(document.getElementById("endNumInput").value);
  const counter = parseInt(document.getElementById("stepNumInput").value);

  if (start >= end) {
    alert("Ending Number must be greater that the Starting Number.");
  } else {
    var evensArray = [];

    for (var index = start; index < end; index += counter) {
      if (index % 2 == 0) {
        evensArray.push([index]);
      }
    }
  }
  return evensArray;
}