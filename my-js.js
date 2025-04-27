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
     height: 430px;
     color: #222831;
     font-size: 24px;
     font-family: monospace, monospace;
     border:solid 5px #85193C;
     border-radius: 30px;
     background-color: #78B3CE;`)
document.body.appendChild(container);

const displayContainer = document.createElement("div");
displayContainer.setAttribute("style", 
    `border: solid 5px #F16767;
    padding: 10px;
    background-color: #FFF085;
    border-radius: 25px;`
)
container.appendChild(displayContainer);
let displayPara = document.createElement("p");
displayPara.style.textAlign = "right";
displayPara.textContent = "0";
displayContainer.appendChild(displayPara);

const calculatorContainer = document.createElement("div");
container.appendChild(calculatorContainer);
calculatorContainer.setAttribute("style", 
    `flex-wrap: wrap;
    margin-top: 20px;
    text-align: center;
    `)

for (let i = 1; i <= 9; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.setAttribute("style", `width: 60px;
      font-size: 20px;
      font-family: monospace, monospace;
      border: solid 5px #F16767;
      background-color: #FFF085;
      border-radius: 25px;
      margin: 1px;`);
    calculatorContainer.appendChild(btn);
};

let zeroButton = document.createElement("button");
zeroButton.textContent = "0"
zeroButton.setAttribute("style", `width: 100px;
      text-align: center;
      font-size: 20px;
      margin: 3px 42px 1px 42px;
      font-family: monospace, monospace;
      border: solid 5px #F16767;
      background-color: #FFF085;
      border-radius: 25px;`)
calculatorContainer.appendChild(zeroButton);

for (let x = 0; x <= operatorsList.length - 1; x++) {
    let opBtn = document.createElement("button");
    opBtn.textContent = operatorsList[x];
    opBtn.setAttribute("style", `width: 30px;
      font-size: 18px;
      font-family: monospace, monospace;
      color: white;
      border: solid 5px #4F1C51;
      background-color: #A64D79;
      border-radius: 25px;
      padding: 5px;
      margin: 1px;
      margin-top: 14px;
      font-weight: bold;`);
    opBtn.setAttribute("class", "mathOperator");
    calculatorContainer.appendChild(opBtn);

};

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.setAttribute("style", 
    `margin-top: 20px;
    border: solid 5px #85193C;
    background-color: #F16767;
    border-radius: 25px;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-family: monospace, monospace;
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
            targetOpe.background = "#A64D79";
            phaseCheck = "third";
          };
            currentNumber += value;
            displayPara.textContent += value;
 
        } else {
          inputArr.push(currentNumber);
          inputArr.push(value);
          currentNumber = "";
          targetOpe = e.target.style;
          targetOpe.background = "#003161";
          
          if (phaseCheck == "third") {
            targetOpe.background = "#A64D79";
            if (inputArr.includes("/") && inputArr.includes("0")) {
              clearDisplay();
              alert("You can't divide by 0!");
              return;
            };
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
};

