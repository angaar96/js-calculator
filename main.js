let screenInputDisplay = document.querySelector("#screenInput");
let screenOutput = document.querySelector("#screenOutput");
let screenInput = "";


// Special Button Functionality - Functions

function calculateAnswer() {
  let screenInputArray = screenInput.split(/[n+\-/*]/);
  // The split needs to allow for numbers with more than one digit. Therefore a split is used. 
  // As the split changes "n", which represents a negative number, to "", we need to switch it back to "n" in screenInputArray using a map loop. 
  const completeScreenInputArray = screenInputArray.map(character => {
    return character == "" ? "n" : character; 
  }); 
  // Let's remove all the operators but keep special characters such as the negative number indicator "n". 
  let filteredInputArray = completeScreenInputArray.filter(i => {return !i.match(/[+\-/*]/)}); 
  let floatArray = [];
  // Now lets grab all the numbers as floats. Use the for loop to make numbers negative based on indicator "n" if they need to be. 
  for (let i = 0; i<filteredInputArray.length; i++) {
    if (filteredInputArray[i-1] && filteredInputArray[i-1] == "n") {
      floatArray.push(parseFloat(filteredInputArray[i])*-1); 
    } else if (filteredInputArray[i] !== "n") {
      floatArray.push(parseFloat(filteredInputArray[i])); 
    }
  };
  let operatorArray = screenInput.match(/[+\-/*]/g);
  let answer = floatArray[0]; 

  for (let i=0; i < floatArray.length; i++) {
    switch (operatorArray[i]) {
      case "+":
        answer += floatArray[i+1]; 
        break; 
      case "-":
        answer -= floatArray[i+1];
        break;
      case "*": 
        answer *= floatArray[i+1]; 
        break; 
      case "/": 
        answer /= floatArray[i+1]; 
        break; 
    }
}
// If the number is recurring, then round it. 
  regexRecurring = /\.(\d)\1+/;
  if (regexRecurring.test(answer)) {
    return answer.toFixed(1) + " (Recurring)";
  } else {
    return answer;
  }
} 

function handleEquals(event) {
  screenOutput.innerText = ""; 
  screenOutput.innerText += `= ${calculateAnswer()}`;
  screenOutput.value = calculateAnswer().toString(); // for cypress tests
}

function handleNegativeNumber() {
  screenInputDisplay.innerHTML += "(-)";
  screenInput += "n"
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
  screenInputDisplay.innerHTML = ""
  screenOutput.innerHTML = ""
  screenInput = ""; 
}
// Special Button Functionality - Event Listeners 

let acButton = document.querySelector("#ac");
acButton.addEventListener("click", handleAc); 
let decimalButton = document.querySelector("#decimalPoint"); 
decimalButton.addEventListener("click", handleDecimalInput);
let equalsButton = document.querySelector("#equals"); 
equalsButton.addEventListener("click", handleEquals);
let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", handleDelete);
let addButton = document.querySelector("#add");
addButton.addEventListener("click", handleOperation);
let subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", handleOperation);
let divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", handleDivide);
let multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", handleOperation);
let negativeNumberButton = document.querySelector("#negativeNumber");
negativeNumberButton.addEventListener("click", handleNegativeNumber); 



// Basic Button Functionality and pressing animation 

let allButtons = document.querySelectorAll(".buttons");
let allNumbers = document.querySelectorAll(".numbers")

function buttonPress(event) {
  event.target.classList.add("pressed")
  }
function buttonUnpress(event) {
  event.target.classList.remove("pressed")
}

allNumbers.forEach(number => {
  number.addEventListener("click", (event) => {
    screenInputDisplay.innerHTML += event.target.innerHTML;
    screenInput += event.target.innerHTML; 
  })
})

allButtons.forEach(button => {
  button.addEventListener("mousedown", buttonPress)
  button.addEventListener("mouseup", buttonUnpress)
})