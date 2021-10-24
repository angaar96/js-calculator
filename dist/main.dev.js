"use strict";

var allButtons = document.querySelectorAll(".buttons");
var screenInputDisplay = document.querySelector("#screenInput");
var screenOutput = document.querySelector("#screenOutput");
var screenInput = ""; // Special Button Functionality - Functions

var calculateAnswer = function calculateAnswer() {
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
};

var handleInput = function handleInput(e) {
  switch (e.target.innerHTML) {
    case "=":
      screenOutput.innerText = "";
      screenOutput.innerText += "= ".concat(calculateAnswer());
      screenOutput.value = calculateAnswer().toString(); // for cypress tests

      break;

    case "+/-":
      screenInputDisplay.innerHTML += "(-)";
      screenInput += "n";
      break;

    case ".":
      screenInputDisplay.innerHTML += e.target.innerHTML;
      screenInput += e.target.innerHTML;
      break;

    case "DEL":
      screenInputDisplay.innerHTML = screenInputDisplay.innerText.slice(0, -1);
      screenInput = screenInput.slice(0, -1);
      break;

    case "+":
    case "-":
    case "*":
      screenInputDisplay.innerHTML += e.target.innerHTML;
      screenInput += e.target.innerHTML;
      break;

    case "÷":
      screenInputDisplay.innerHTML += "÷";
      screenInput += "/";
      break;

    case "AC":
      screenInputDisplay.innerHTML = "";
      screenOutput.innerHTML = "";
      screenInput = "";
      break;

    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      screenInputDisplay.innerHTML += e.target.innerHTML;
      screenInput += e.target.innerHTML;
      break;
  }
}; // Wire up buttons to handleInput function and pressing animation. 


allButtons.forEach(function (button) {
  button.addEventListener("click", handleInput);
  button.addEventListener("mousedown", function (e) {
    return e.target.classList.add("pressed");
  });
  button.addEventListener("mouseup", function (e) {
    return e.target.classList.remove("pressed");
  });
});