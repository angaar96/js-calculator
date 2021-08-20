"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var screenInput = document.querySelector("#screen_input");
var screenOutput = document.querySelector("#screen_output"); // Special Button Functionality - Functions

function calculate() {
  var calc_answer;
  var regex_operators = /[+-/*]/;
  var numberArray = screenInput.innerText.split(/[+\-/*]/);

  var floatArray = _toConsumableArray(numberArray).map(function (number) {
    return parseFloat(number);
  });

  console.log(floatArray);
  var whichOperatorData = screenInput.innerText.match(/[+\-/*]/);
  console.log(whichOperatorData);
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

  console.log(calc_answer);
  return calc_answer;
}

function equals(event) {
  screenOutput.innerText = "";
  screenOutput.innerText += "= ".concat(calculate());
}

function decimal_point(event) {
  screenInput.innerHTML += event.target.innerHTML;
}

function delete_entry() {
  screenInput.innerHTML = screenInput.innerText.slice(0, -1);
}

function add(event) {
  var regex_add = /[+]/;

  if (!regex_add.test(screenInput.innerHTML)) {
    screenInput.innerHTML += event.target.innerHTML;
  }
}

function subtract(event) {
  var regex_subtract = /[-]/;

  if (!regex_subtract.test(screenInput.innerHTML)) {
    screenInput.innerHTML += event.target.innerHTML;
  }
}

function divide(event) {
  var regex_divide = /[/]/;

  if (!regex_divide.test(screenInput.innerHTML)) {
    screenInput.innerHTML += "/";
  }
}

function multiply(event) {
  var regex_multiply = /[*]/;

  if (!regex_multiply.test(screenInput.innerHTML)) {
    screenInput.innerHTML += "*";
  }
}

function acbutton() {
  screenInput.innerHTML = "";
  screenOutput.innerHTML = "";
} // Special Button Functionality - Event Listeners 


var acButton = document.querySelector("#ac");
acButton.addEventListener("click", acbutton);
var decimalButton = document.querySelector("#decimal_point");
decimalButton.addEventListener("click", decimal_point);
var equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", equals);
var deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", delete_entry);
var addButton = document.querySelector("#add");
addButton.addEventListener("click", add);
var subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", subtract);
var divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", divide);
var multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", multiply); // Basic Button Functionality and pressing animation 

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