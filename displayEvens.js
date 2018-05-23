
function validateItems() {
  // clearErrors();

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

function calculation(){
  const start = document.getElementById("startNumInput").value;
  const end = document.getElementById("endNumInput").value;
  const counter = document.getElementById("stepNumInput").value;

  var evensArray = [];

  for (var index = 2; index < 19; index+=2) {
    if (index % 2 == 0){
      evensArray.push([index]);
    }
  }

  return evensArray;
}