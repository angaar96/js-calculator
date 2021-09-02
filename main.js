let screenInput = document.querySelector("#screenInput");
let screenOutput = document.querySelector("#screenOutput");


// Special Button Functionality - Functions

function calculateAnswer() { 
  let regex_operators = /[+/*-]/g;
  let numberArray = screenInput.innerText.split(/[+\-/*]/);
  let floatArray = [...numberArray].map(number => {
    return parseFloat(number); 
  }); 
  let whichOperatorData = screenInput.innerText.match(/[+\-/*]/g);
  // First switch handles the first operation with the first two numbers.
  let answer = floatArray[0];
  for (let i=0; i<floatArray.length; i++) {
    switch (whichOperatorData[i]) {
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
  regexRecurring = /(\d)\2+/ 
  if (regexRecurring.test(answer)) {
    return answer.toFixed(1) + " (Recurring)";
  } else {
    return answer;
  }
} 

function handleEquals(event) {
  screenOutput.innerText = ""; 
  screenOutput.innerText += `= ${calculateAnswer()}`;
  screenOutput.value = calculateAnswer().toString();
}

function handleDecimalInput(event) {
  screenInput.innerHTML += event.target.innerHTML
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
  screenInput.innerHTML = ""
  screenOutput.innerHTML = ""
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
    screenInput.innerHTML += event.target.innerHTML
  })
})

allButtons.forEach(button => {
  button.addEventListener("mousedown", buttonPress)
  button.addEventListener("mouseup", buttonUnpress)
})