let allButtons = document.querySelectorAll(".buttons");
let screenInputDisplay = document.querySelector("#screenInput");
let screenOutput = document.querySelector("#screenOutput");
let screenInput = "";


// Special Button Functionality - Functions

const calculateAnswer = () => {
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

const handleInput = (e) => {
  switch(e.target.innerHTML) {
    case "=":
      screenOutput.innerText = ""; 
      screenOutput.innerText += `= ${calculateAnswer()}`;
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
    case "+": case "-": case "*":
      screenInputDisplay.innerHTML += e.target.innerHTML;
      screenInput += e.target.innerHTML;
      break;
    case "÷": 
      screenInputDisplay.innerHTML += "÷";
      screenInput += "/"; 
      break;
    case "AC":
      screenInputDisplay.innerHTML = ""
      screenOutput.innerHTML = ""
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
}

// Wire up buttons to handleInput function and pressing animation. 

allButtons.forEach(button => {
  button.addEventListener("click", handleInput)
  button.addEventListener("mousedown", (e) => e.target.classList.add("pressed"));
  button.addEventListener("mouseup", (e) => e.target.classList.remove("pressed")); 
})