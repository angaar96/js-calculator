"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var screenInput = document.querySelector("#screen_input");
var screenOutput = document.querySelector("#screen_output"); // Special Button Functionality - Functions

function calculateAnswer() {
  var calc_answer;
  var regex_operators = /[+-/*]/;
  var numberArray = screenInput.innerText.split(/[+\-/*]/);

  var floatArray = _toConsumableArray(numberArray).map(function (number) {
    return parseFloat(number);
  });

  var whichOperatorData = screenInput.innerText.match(/[+\-/*]/);
  var whichOperator = whichOperatorData[0];

  switch (whichOperator) {
    case "+":
      calc_answer = floatArray[0] + floatArray[1];
      break;

    case "-":
      calc_answer = floatArray[0] - floatArray[1];
      break;

    case "*":
      calc_answer = floatArray[0] * floatArray[1];
      break;

    case "/":
      calc_answer = floatArray[0] / floatArray[1];
      break;
  }

  return calc_answer;
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