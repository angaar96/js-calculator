"use strict";

var screenInputDisplay = document.querySelector("#screenInput");
var screenOutput = document.querySelector("#screenOutput");
var screenInput = ""; // Special Button Functionality - Functions

function calculateAnswer() {
  var screenInputArray = screenInput.split(/[n+\-/*]/); // The split needs to allow for numbers with more than one digit. Therefore a split is used. 
  // As the split changes "n", which represents a negative number, to "", we need to switch it back to "n" in screenInputArray using a map loop. 

  var completeScreenInputArray = screenInputArray.map(function (character) {
    return character == "" ? "n" : character;
  }); // Let's remove all the operators but keep special characters such as the negative number indicator "n". 

  var filteredInputArray = completeScreenInputArray.filter(function (i) {
    return !i.match(/[+\-/*]/);
  });
  var floatArray = []; // Now lets grab all the numbers as floats. Use the for loop to make numbers negative based on indicator "n" if they need to be. 

  for (var i = 0; i < filteredInputArray.length; i++) {
    if (filteredInputArray[i - 1] && filteredInputArray[i - 1] == "n") {
      floatArray.push(parseFloat(filteredInputArray[i]) * -1);
    } else if (filteredInputArray[i] !== "n") {
      floatArray.push(parseFloat(filteredInputArray[i]));
    }
  }

  ;
  var operatorArray = screenInput.match(/[+\-/*]/g);
  var answer = floatArray[0];

  for (var _i = 0; _i < floatArray.length; _i++) {
    switch (operatorArray[_i]) {
      case "+":
        answer += floatArray[_i + 1];
        break;

      case "-":
        answer -= floatArray[_i + 1];
        break;

      case "*":
        answer *= floatArray[_i + 1];
        break;

      case "/":
        answer /= floatArray[_i + 1];
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
  screenOutput.value = calculateAnswer().toString(); // for cypress tests
}

function handleNegativeNumber() {
  screenInputDisplay.innerHTML += "(-)";
  screenInput += "n";
}

function handleDecimalInput(event) {
  screenInputDisplay.innerHTML += event.target.innerHTML;
  screenInput += event.target.innerHTML;
}

function handleDelete() {
  screenInputDisplay.innerHTML = screenInputDisplay.innerText.slice(0, -1);
  screenInput = screenInput.slice(0, -1);
}

function handleOperation(event) {
  screenInputDisplay.innerHTML += event.target.innerHTML;
  screenInput += event.target.innerHTML;
}

function handleDivide(event) {
  screenInputDisplay.innerHTML += "÷";
  screenInput += "/";
}

function handleAc() {
  screenInputDisplay.innerHTML = "";
  screenOutput.innerHTML = "";
  screenInput = "";
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
    screenInputDisplay.innerHTML += event.target.innerHTML;
    screenInput += event.target.innerHTML;
  });
});
allButtons.forEach(function (button) {
  button.addEventListener("mousedown", buttonPress);
  button.addEventListener("mouseup", buttonUnpress);
});