"use strict";

var screenInput = document.querySelector("#screenInput");
var screenOutput = document.querySelector("#screenOutput"); // Special Button Functionality - Functions

function calculateAnswer() {
  console.log(screenInput.innerText);
  screenInputArray = screenInput.innerText.split(/[n+\-/*]/);
  console.log(screenInputArray.indexOf(''));
  screenInput.innerText.match(/[n]/) ? screenInputArray[screenInputArray.indexOf('')] = "n" : console.log("no negative numbers");
  console.log(screenInputArray);
  var newNumberArray = screenInputArray.filter(function (i) {
    return !i.match(/[+\-/*]/);
  });
  console.log(newNumberArray);
  var floatArray = newNumberArray.filter(function (i) {
    return i.match(/[\d]/);
  });
  console.log(floatArray);
  var floatNumbersOnly = floatArray.map(function (number) {
    return parseFloat(number);
  });
  console.log(floatNumbersOnly);
  var whichOperatorData = screenInput.innerText.match(/[+\-/*]/g);
  console.log(whichOperatorData);
  var answer = newNumberArray[0] === "n" ? -1 * floatNumbersOnly[0] : floatNumbersOnly[0]; // for 1 * 3
  // first element is not n so answer = 1 
  // new numbers array = ["1", "3"]
  // float array = ["1", "3"]
  // which operators array = [*]
  // its a multiply, so it checks next element and its not n, therefore 

  for (var i = 0; i <= whichOperatorData.length - 1; i++) {
    switch (whichOperatorData[i]) {
      case "+":
        if (newNumberArray[i + 1] == "n") {
          answer -= floatNumbersOnly[i + 1];
        } else {
          answer += floatNumbersOnly[i + 1];
        }

        break;

      case "-":
        if (newNumberArray[i + 1] == "n") {
          answer += floatNumbersOnly[i + 1];
        } else {
          answer -= floatNumbersOnly[i + 1];
        }

        break;

      case "*":
        if (newNumberArray[i + 1] == "n") {
          answer *= -1 * floatNumbersOnly[i + 1];
        } else {
          answer *= floatNumbersOnly[i + 1];
        }

        break;

      case "/":
        if (newNumberArray[i + 1] == "n") {
          answer /= floatNumbersOnly[i + 1] * -1;
        } else {
          answer /= floatNumbersOnly[i + 1];
        }

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