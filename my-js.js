let firstNumber, secondNumber, operator;


const operatorsList = ["+", "-", "*", "/", "=",];


function operate(numberOne, numberTwo, mathOp) {
  
    
};


const container = document.createElement("div");
container.setAttribute("style", 
    `width: 190px;
     height: 220px;`)
document.body.appendChild(container);

const displayContainer = document.createElement("div");
displayContainer.setAttribute("style", 
    `border: solid 3px violet;
    padding: 20px`
)
container.appendChild(displayContainer);

const calculatorContainer = document.createElement("div");
container.appendChild(calculatorContainer);
calculatorContainer.setAttribute("style", 
    `border: thick double #32a1ce;
     flex-wrap: wrap;`)

for (let i = 1; i <= 9; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.setAttribute("style", "width: 60px;");
    calculatorContainer.appendChild(btn);
};

for (let x = 0; x <= operatorsList.length - 1; x++) {
    let opBtn = document.createElement("button");
    opBtn.textContent = operatorsList[x];
    opBtn.setAttribute("style", "width: 30px; margin-top: 15px");
    opBtn.setAttribute("class", "mathOperator");
    calculatorContainer.appendChild(opBtn);

}

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.setAttribute("style", 
    `margin-top: 20px;
    border: red 2px dashed;
    padding: 5px;
    text-align: center;
    `
);
calculatorContainer.appendChild(clearButton);

const allButtons = document.querySelectorAll("button");

let inputPhase = "firstNumber";
for (let btn of allButtons) {
  btn.addEventListener('click', (e) => {

  if (inputPhase === "firstNumber") {
    firstNumber = e.target.textContent;
    inputPhase = "operator";

  } else if (inputPhase === "operator") {
      operator = e.target.textContent;
      inputPhase = "secondNumber";
      
  } else if (inputPhase === "secondNumber") secondNumber = e.target.textContent;
 });
};



const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};

const power = function(num, power) {
  return num**power;
};

const factorial = function(num) {
  if (num == 0) return 1;
	for (let i = num - 1; i >= 1; i--) {
    num *= i;
  };
  return num;
};
