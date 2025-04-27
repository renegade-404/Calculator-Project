const operatorsList = ["+", "-", "*", "/", "=",];
let result = "nothing";

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": division,
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
let displayPara = document.createElement("p");
displayPara.style.textAlign = "center";
displayPara.textContent = "0";
displayContainer.appendChild(displayPara);

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

function calculation() {
  let inputArr = [];
  let phaseCheck = "first", currentNumber = "";

  function operate(arr) {
    num1 = Number(arr[0]);
    num2 = Number(arr[2]);
    mathOp = arr[1];
  
    calc = operations[mathOp](num1, num2);


    result = calc;
    phaseCheck = "first";
    inputArr = [];
    currentNumber = result;
  };

function clearDisplay() {
  phaseCheck = "first";
  currentNumber = "";
  displayPara.textContent = "0";
  result = "nothing";
  inputArr = [];
};

    for (let btn of allButtons) {
      btn.addEventListener('click', (e) =>{
        let value = e.target.textContent;

        if (displayPara.textContent == "0") displayPara.textContent = "";

        if (value === "Clear") {
          clearDisplay();
          return;
        };

        if (!operatorsList.includes(value)) {
          if (phaseCheck == "second") {
            displayPara.textContent = "";
            targetOpe.background = "white";
            phaseCheck = "third";
          };
            currentNumber += value;
            displayPara.textContent += value;
 
        } else {
          inputArr.push(currentNumber);
          inputArr.push(value);
          currentNumber = "";
          targetOpe = e.target.style;
          targetOpe.background = "violet";
          
          if (phaseCheck == "third") {
            targetOpe.background = "white";
            operate(inputArr);
          };

          phaseCheck = "second";

          if (result != "nothing") displayPara.textContent = result;
        };
    });         
  };
};

calculation();


function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
	return num1 * num2;
};

function division(num1, num2) {
  return (num1 / num2).toFixed(2);
}


// const multiply = function(arr) {
//   return arr.reduce((acc, curr) => {
//     return acc * curr;
//   }, 1);
// };


// const sum = function(arr) {
// 	return arr.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// };


// const power = function(num, power) {
//   return num**power;
// };

// const factorial = function(num) {
//   if (num == 0) return 1;
// 	for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   };
//   return num;
// };
