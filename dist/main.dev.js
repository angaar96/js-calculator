"use strict";

var screenInput = document.querySelector("#screenInput");
var screenOutput = document.querySelector("#screenOutput"); // Special Button Functionality - Functions

function calculateAnswer() {
  screenInputArray = screenInput.innerText.split(/[n+\-/*]/); // The split needs to allow for numbers with more than one digit. Therefore a split is used. As the split changes "n", which represents a negative number, to "", we need to switch it back to "n" in screenInputArray. 

  screenInput.innerText.match(/[n]/) ? screenInputArray[screenInputArray.indexOf('')] = "n" : console.log("no negative numbers"); // Let's remove all the numbers but keep special characters such as the negative number indicator "n". 

  var filteredInputArray = screenInputArray.filter(function (i) {
    return !i.match(/[+\-/*]/);
  }); // Now lets grab all the numbers. 

  var numberArray = filteredInputArray.filter(function (i) {
    return i.match(/[\d]/);
  }); // And lets convert them into floats so we can grab any numbers with decimal points. 

  var floatArray = numberArray.map(function (number) {
    return parseFloat(number);
  });
  var operatorArray = screenInput.innerText.match(/[+\-/*]/g);
  var answer = filteredInputArray[0] === "n" ? -1 * floatArray[0] : floatArray[0];

  for (var i = 0; i <= operatorArray.length - 1; i++) {
    switch (operatorArray[i]) {
      case "+":
        filteredInputArray[i + 1] == "n" ? answer -= floatArray[i + 1] : answer += floatArray[i + 1];
        break;

      case "-":
        filteredInputArray[i + 1] == "n" ? answer += floatArray[i + 1] : answer -= floatArray[i + 1];
        break;

      case "*":
        filteredInputArray[i + 1] == "n" ? answer *= -1 * floatArray[i + 1] : answer *= floatArray[i + 1];
        break;

      case "/":
        filteredInputArray[i + 1] == "n" ? answer /= floatArray[i + 1] * -1 : answer /= floatArray[i + 1];
        break;
    }
  } // If the number is recurring, then round it. 


  regexRecurring = /\.(\d)\1+/;

  if (regexRecurring.test(answer)) {
    return answer.toFixed(1) + " (Recurring)";
  } else {
    return answer;
  }
}

function handleEquals(event) {
  screenOutput.innerText = "";
  screenOutput.innerText += "= ".concat(calculateAnswer());
  screenOutput.value = calculateAnswer().toString();
}

function handleNegativeNumber() {
  screenInput.innerHTML += "n";
}

function handleDecimalInput(event) {
  screenInput.innerHTML += event.target.innerHTML;
}

function handleDelete() {
  screenInput.innerHTML = screenInput.innerText.slice(0, -1);
}

function handleOperation(event) {
  screenInput.innerHTML += event.target.innerHTML;
}

function handleDivide(event) {
  screenInput.innerHTML += "/";
}

function handleAc() {
  screenInput.innerHTML = "";
  screenOutput.innerHTML = "";
} // Special Button Functionality - Event Listeners 


var acButton = document.querySelector("#ac");
acButton.addEventListener("click", handleAc);
var decimalButton = document.querySelector("#decimalPoint");
decimalButton.addEventListener("click", handleDecimalInput);
var equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", handleEquals);
var deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", handleDelete);
var addButton = document.querySelector("#add");
addButton.addEventListener("click", handleOperation);
var subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", handleOperation);
var divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", handleDivide);
var multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", handleOperation);
var negativeNumberButton = document.querySelector("#negativeNumber");
negativeNumberButton.addEventListener("click", handleNegativeNumber); // Basic Button Functionality and pressing animation 

var allButtons = document.querySelectorAll(".buttons");
var allNumbers = document.querySelectorAll(".numbers");

function buttonPress(event) {
  event.target.classList.add("pressed");
}

function buttonUnpress(event) {
  event.target.classList.remove("pressed");
}

allNumbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    screenInput.innerHTML += event.target.innerHTML;
  });
});
allButtons.forEach(function (button) {
  button.addEventListener("mousedown", buttonPress);
  button.addEventListener("mouseup", buttonUnpress);
});