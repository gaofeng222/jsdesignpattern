function displayError(msg) {
  displayError.numTimeExecuted++;
  console.log(msg);
}
displayError.numTimeExecuted = 0;

displayError("Error 1");
displayError("Error 2");
console.log(displayError.numTimeExecuted);
