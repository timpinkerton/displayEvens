// The clearErrors function loops through the form components and looks
// for the class 'has-error'

function clearErrors() {
  for (var loopCounter = 0; loopCounter < document.forms["displayEvens"].elements.length; loopCounter++) {
    if (document.forms["displayEvens"].elements[loopCounter]
      .parentElement.className.indexOf("has-") != -1) {

      document.forms["displayEvens"].elements[loopCounter]
        .parentElement.className = "form-group";
    }
  }
}

function validateItems() {
  clearErrors();
  var startNumInput = document.forms["displayEvens"]["startNumInput"].value;
  var endNumInput = document.forms["displayEvens"]["endNumInput"].value;
  var stepNumInput = document.forms["displayEvens"]["stepNumInput"].value;

  if (startNumInput == "" || isNaN(startNumInput)) {
    alert("Starting Number must be filled in with a number.");
    document.forms["displayEvens"]["startNumInput"]
      .parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["startNumInput"].focus();
    return false;
  }
  if (endNumInput == "" || isNaN(endNumInput)) {
    alert("Ending Number must be filled in with a number.");
    document.forms["displayEvens"]["endNumInput"]
      .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["endNumInput"].focus();
    return false;
  }
  if (endNumInput <= startNumInput) {
    alert("Ending Number must be greater than the Starting Number.");
    document.forms["displayEvens"]["endNumInput"]
      .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["endNumInput"].focus();
    return false;
  }
  if (stepNumInput < 1) {
    alert("Step Number must be 1 or greater.");
    document.forms["displayEvens"]["stepNumInput"]
      .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["stepNumInput"].focus();
    return false;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
  document.getElementById("startingNumber").innerText = startNumInput;
  document.getElementById("endingNumber").innerText = endNumInput;

  document.getElementById("step").innerText = stepNumInput;

  document.getElementById("evens").innerText = calculation();

  // Return false so that the form doesn't submit and the results will stay visible
  return false;
}

function calculation() {
  var allStepNumbers = [];
  var evens = [];
  var counterStart = 10;
  var counterEnd = document.forms["displayEvens"]["endNumInput"].value;
  var counterStep = 5;

  for (var i = counterStart; i < counterEnd; i+=counterStep) {
    allStepNumbers.push(i);
  }
  // do {
  //   allStepNumbers.push(counterStart);
  //   counterStart += counterStep;
  // } while (counterStart < counterEnd);

  return allStepNumbers;

  // This will find ALL the numbers from the startNum to the endNum
  // TODO: change the increment to equal the stepNumInput



  //This will loop through allStepNumbers array an put the evens numbers in the evens array.
  // for (var i = 0; i < allStepNumbers.length; i++) {
  //   if (allStepNumbers[i] % 2 == 0) {
  //     evens.push(allStepNumbers[i]);
  //   }
  // }
}

