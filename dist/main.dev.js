"use strict";

var screen = document.querySelector("#screen");
var screenOutput = document.querySelector("#screen_output"); // Special Button Functionality - Functions

function calculate() {
  'use strict';

  var calc_answer;
  var regex_operators = /[+-/*]/;
  var numberArray = screen.innerText.split(/[+-/*]/);
  var whichOperatorData = screen.innerText.match(/[+-/*]/);
  var whichOperator = whichOperatorData[0];

  switch (whichOperator) {
    case "+":
      calc_answer = numberArray[0] + numberArray[1];
      break;

    case "-":
      calc_answer = numberArray[0] - numberArray[1];
      break;

    case "*":
      calc_answer = numberArray[0] * numberArray[1];
      break;

    case "/":
      calc_answer = numberArray[0] / numberArray[1];
      break;
  }

  return calc_answer;
}

function equals(event) {
  screenOutput.innerText = "";
  screenOutput.innerText += calculate().toString();
}

function decimal_point(event) {
  screen.innerHTML += event.target.innerHTML;
}

function delete_entry() {
  screen.innerHTML = screen.innerText.slice(0, -1);
}

function add(event) {
  var regex_add = /[+]/;

  if (!regex_add.test(screen.innerHTML)) {
    screen.innerHTML += event.target.innerHTML;
  }
}

function subtract(event) {
  var regex_subtract = /[-]/;

  if (!regex_subtract.test(screen.innerHTML)) {
    screen.innerHTML += event.target.innerHTML;
  }
}

function divide(event) {
  var regex_divide = /[/]/;

  if (!regex_divide.test(screen.innerHTML)) {
    screen.innerHTML += "/";
  }
}

function multiply(event) {
  var regex_multiply = /[*]/;

  if (!regex_multiply.test(screen.innerHTML)) {
    screen.innerHTML += "*";
  }
}

function acbutton() {
  screen.innerHTML = "";
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
    screen.innerHTML += event.target.innerHTML;
  });
});
allButtons.forEach(function (button) {
  button.addEventListener("mousedown", buttonPress);
  button.addEventListener("mouseup", buttonUnpress);
});