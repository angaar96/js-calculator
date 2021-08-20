let screenInput = document.querySelector("#screen_input");
let screenOutput = document.querySelector("#screen_output");


// Special Button Functionality - Functions

function calculate() {
  let calc_answer; 
  let regex_operators = /[+-/*]/;
  let numberArray = screenInput.innerText.split(/[+\-/*]/);
  let floatArray = [...numberArray].map(number => {
    return parseFloat(number); 
  }); 
  console.log(floatArray);
  let whichOperatorData = screenInput.innerText.match(/[+\-/*]/);
  console.log(whichOperatorData)
  let whichOperator = whichOperatorData[0];
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
  console.log(calc_answer)
  return calc_answer;
}

function equals(event) {
  screenOutput.innerText = ""; 
  screenOutput.innerText += `= ${calculate()}`;
}

function decimal_point(event) {
  screenInput.innerHTML += event.target.innerHTML
  }

function delete_entry() {
  screenInput.innerHTML = screenInput.innerText.slice(0, -1);
}

function add(event) {
  let regex_add = /[+]/;
  if (!regex_add.test(screenInput.innerHTML)) {
    screenInput.innerHTML += event.target.innerHTML;
  }
}

function subtract(event) {
  let regex_subtract = /[-]/;
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
  let regex_multiply = /[*]/;
  if (!regex_multiply.test(screenInput.innerHTML)) {
    screenInput.innerHTML += "*";
  }
  }

function acbutton() {
  screenInput.innerHTML = ""
  screenOutput.innerHTML = ""
}
// Special Button Functionality - Event Listeners 

let acButton = document.querySelector("#ac");
acButton.addEventListener("click", acbutton); 
let decimalButton = document.querySelector("#decimal_point"); 
decimalButton.addEventListener("click", decimal_point)
let equalsButton = document.querySelector("#equals"); 
equalsButton.addEventListener("click", equals);
let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", delete_entry);
let addButton = document.querySelector("#add");
addButton.addEventListener("click", add);
let subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", subtract);
let divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", divide);
let multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", multiply);



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


