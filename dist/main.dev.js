"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var screenInput = document.querySelector("#screenInput");
var screenOutput = document.querySelector("#screenOutput"); // Special Button Functionality - Functions

function calculateAnswer() {
  var regex_operators = /[+/*-]/g;
  var numberArray = screenInput.innerText.split(/[+\-/*]/);

  var floatArray = _toConsumableArray(numberArray).map(function (number) {
    return parseFloat(number);
  });

  var whichOperatorData = screenInput.innerText.match(/[+\-/*]/g); // First switch handles the first operation with the first two numbers.

  var answer = floatArray[0];

  for (var i = 0; i < floatArray.length; i++) {
    switch (whichOperatorData[i]) {
      case "+":
        answer += floatArray[i + 1];
        break;

      case "-":
        answer -= floatArray[i + 1];
        break;

      case "*":
        answer *= floatArray[i + 1];
        break;

      case "/":
        answer /= floatArray[i + 1];
        break;
    }
  } // If the number is recurring, then round it. 


  regexRecurring = /(\d)\1+/;

  if (regexRecurring.test(answer)) {
    return answer.toFixed(1) + " (Recurring)";
  } else {
    return answer;
  }
}

function handleEquals(event) {
  screenOutput.innerText = "";
  screenOutput.innerText += "= ".concat(calculateAnswer());
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
multiplyButton.addEventListener("click", handleOperation); // Basic Button Functionality and pressing animation 

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