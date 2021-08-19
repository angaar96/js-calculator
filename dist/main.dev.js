"use strict";

var screen = document.querySelector("#screen");
var screenOutput = document.querySelector("#screen_output"); // Special Button Functionality - Functions

function equals(event) {
  screenOutput.innerText = "";
  var calculation = eval(screen.innerText);
  screenOutput.innerText += " = ".concat(calculation.toString());
}

function decimal_point(event) {
  screen.innerHTML += event.target.innerHTML;
}

function delete_entry() {
  screen.innerHTML = screen.innerText.slice(0, -1);
}

function add(event) {
  screen.innerHTML += event.target.innerHTML;
}

function subtract(event) {
  screen.innerHTML += event.target.innerHTML;
}

function divide(event) {
  screen.innerHTML += "/";
}

function multiply(event) {
  screen.innerHTML += event.target.innerHTML;
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