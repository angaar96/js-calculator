let screenInput = document.querySelector("#screenInput");
let screenOutput = document.querySelector("#screenOutput");


// Special Button Functionality - Functions

function calculateAnswer() {
  screenInputArray = screenInput.innerText.split(/[n+\-/*]/);
  // The split needs to allow for numbers with more than one digit. Therefore a split is used. As the split changes "n", which represents a negative number, to "", we need to switch it back to "n" in screenInputArray. 
  screenInput.innerText.match(/[n]/) ? screenInputArray[screenInputArray.indexOf('')] = "n" : console.log("no negative numbers");
  // Let's remove all the numbers but keep special characters such as the negative number indicator "n". 
  let filteredInputArray = screenInputArray.filter(i => {return !i.match(/[+\-/*]/)})
  // Now lets grab all the numbers. 
  let numberArray = filteredInputArray.filter(i => i.match(/[\d]/));  
  // And lets convert them into floats so we can grab any numbers with decimal points. 
  let floatArray = numberArray.map(number => parseFloat(number));
  let operatorArray = screenInput.innerText.match(/[+\-/*]/g);
  let answer = filteredInputArray[0] === "n" ? (-1*floatArray[0]) : floatArray[0]; 

  for (let i=0; i <= operatorArray.length-1; i++) {
    switch (operatorArray[i]) {
      case "+":
        filteredInputArray[i+1] == "n" ? answer -= floatArray[i+1] : answer += floatArray[i+1]; 
        break; 
      case "-": 
        filteredInputArray[i+1] == "n" ? answer += floatArray[i+1] : answer -= floatArray[i+1]; 
        break;
      case "*": 
        filteredInputArray[i+1] == "n" ? answer *= (-1*floatArray[i+1]) : answer *= floatArray[i+1]; 
        break; 
      case "/": 
        filteredInputArray[i+1] == "n" ? answer /= (floatArray[i+1]*-1) : answer /= floatArray[i+1]; 
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
  screenOutput.value = calculateAnswer().toString();
}

function handleNegativeNumber() {
  screenInput.innerHTML += "n"
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
    screenInput.innerHTML += event.target.innerHTML
  })
})

allButtons.forEach(button => {
  button.addEventListener("mousedown", buttonPress)
  button.addEventListener("mouseup", buttonUnpress)
})