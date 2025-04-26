const operatorsList = ["+", "-", "*", "/", "=",];

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


function operate(num1, num2, mathOp) {
  num1 = +num1;
  num2 = +num2;

  let calc = operations[mathOp](num1, num2);
  displayPara.textContent += calc;
};

function calculation() {
  let numberOne= "", numberTwo = "", operator = "", numberPhase = "firstNumber";

  function clearDisplay() {
    numberOne = "";
    numberTwo = "";
    operator = "";
    numberPhase = "firstNumber";
    displayPara.textContent = "0";
  };

    for (let btn of allButtons) {
      btn.addEventListener('click', (e) =>{
        if (e.target.textContent === "Clear") {
          clearDisplay();
          return;
        }; 

        if (operatorsList.includes(e.target.textContent) == true) {
          mathOp = e.target.textContent;
          displayPara.textContent += mathOp;
          if (mathOp === "=") {
            operate(numberOne, numberTwo, operator);
          }
          operator = mathOp;
          numberPhase = "secondNumber"
          
        } else {
            if (numberPhase == "firstNumber") {
              if (displayPara.textContent == "0") displayPara.textContent = "";
              numberOne += e.target.textContent;
              displayPara.textContent += e.target.textContent;
            } else {
              numberTwo += e.target.textContent;
              displayPara.textContent += e.target.textContent;
            };  
        }; 
    });
  };
};

calculation()


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
