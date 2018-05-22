// The clearErrors function loops through the form components and looks
// for the class 'has-error'.  

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
  var startNum = document.forms["displayEvens"]["startNumInput"].value;
  var endNum = document.forms["displayEvens"]["endNumInput"].value;
  var stepNum = document.forms["displayEvens"]["stepNumInput"].value;

  if (startNum == "" || isNaN(startNum)) {
    alert("Starting Number must be filled in with a number.");
    document.forms["displayEvens"]["startNum"]
      .parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["startNum"].focus();
    return false;
  }
  if (endNum == "" || isNaN(endNum)) {
    alert("Ending Number must be filled in with a number.");
    document.forms["displayEvens"]["endNum"]
      .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["endNum"].focus();
    return false;
  }
  if (endNum <= startNum) {
    alert("Ending Number must be greater than the Starting Number.");
    document.forms["displayEvens"]["endNum"]
      .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["endNum"].focus();
    return false;
  }
  if (stepNum < 1) {
    alert("Step Number must be 1 or greater.");
    document.forms["displayEvens"]["stepNum"]
      .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["stepNum"].focus();
    return false;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
  document.getElementById("startingNumber").innerText = startNum;
  document.getElementById("endingNumber").innerText = endNum;

  document.getElementById("step").innerText = stepNum;

  document.getElementById("evens").innerText = calculation();

  // Return false so that the form doesn't submit and the results will stay visible
  return false;
}

function calculation() {
  var allStepNumbers = [];
  var evens = [];

  // This will find ALL the numbers from the startNum to the endNum
  // TODO: change the increment to equal the stepNumInput
  for (var i = document.forms["displayEvens"]["startNumInput"].value; i < document.forms["displayEvens"]["endNumInput"].value; i++) {
    allStepNumbers.push(i);
  }

  //This will loop through allStepNumbers array an put the evens numbers in the evens array.
  for (var i = 0; i < allStepNumbers.length; i ++) {
    if (allStepNumbers[i] % 2 == 0) {
      evens.push(allStepNumbers[i]);
    }
  }
  return evens;
}
