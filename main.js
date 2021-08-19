let screen = document.querySelector("#screen");
let screenOutput = document.querySelector("#screen_output");


// Special Button Functionality - Functions

// If statement used here to stop 2 operators being used in succession. 

function equals(event) {
  screenOutput.innerText = ""; 
  let calculation = eval(screen.innerText);
  screenOutput.innerText += ` = ${calculation.toString()}`
}

function decimal_point(event) {
  let regex_decimal = /[.]/
  if (!regex_decimal.test(screen.innerHTML)) {
    screen.innerHTML += event.target.innerHTML
  }
} 

function delete_entry() {
  screen.innerHTML = screen.innerText.slice(0, -1);
}

function add(event) {
  let regex_equals = /[+]/
  if (!regex_equals.test(screen.innerHTML)) {
    screen.innerHTML += event.target.innerHTML
  }
}

function subtract(event) {
  let regex_equals = /[-]/
  if (!regex_equals.test(screen.innerHTML)) {
    screen.innerHTML += event.target.innerHTML;
  }
}

function divide(event) {
  let regex_equals = /[/]/
  if (!regex_equals.test(screen.innerHTML)) {
    screen.innerHTML += "/"
  }
}

function multiply(event) {
  let regex_equals = /[*]/
  if (!regex_equals.test(screen.innerHTML)) {
    screen.innerHTML += event.target.innerHTML
  }
}
// Special Button Functionality - Event Listeners 

let acButton = document.querySelector("#ac")
acButton.addEventListener("click", () => {
  screen.innerHTML = ""
  screenOutput.innerHTML = ""
} ) 
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
    screen.innerHTML += event.target.innerHTML
  })
})

allButtons.forEach(button => {
  button.addEventListener("mousedown", buttonPress)
  button.addEventListener("mouseup", buttonUnpress)
})


