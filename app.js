const buttonField = document.querySelector(".calc-body");
const output = document.querySelector(".calc-output");
const inputNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const inputOperators = ["+", "−", "×", "÷", "="];
const inputReset = ["←", "C"];
let inputs = [];

buttonField.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    taskDivider(event.target.innerText);
  }
});

function taskDivider(input) {
  if (inputNumbers.includes(input)) {
    displayInput(input);
  } else if (inputOperators.includes(input)) {
    displayOperator(input);
  } else if (inputReset.includes(input)) {
    displayReset(input);
  }
};

function displayInput(number) {
  if (inputOperators.includes(output.innerText)) {
    inputs.push(output.innerText);
    output.innerText = "";
  }
  output.innerText += number;
  console.log(inputs);
}

function displayOperator(operator) {
  if (operator != "=") {
    inputs.push(parseInt(output.innerText));
    output.innerText = operator;
    console.log(inputs);
  } else {
    inputs.push(parseInt(output.innerText));
    output.innerText = Math.round(calculate(inputs));
    inputs = [];
  }
}

function displayReset(reset) {
  if (reset === "←") {
    output.innerText = output.innerText.slice(0, -1);
  } else if (reset === "C") {
    inputs = [];
    output.innerText = "";
  }
}

function calculate(inputs) {
  let result = inputs[0];
  for (let i = 1; i < inputs.length; i++) {
    if (inputs[i] === "+") {
      result += inputs[i + 1];
    } else if (inputs[i] === "−") {
      result -= inputs[i + 1];
    } else if (inputs[i] === "×") {
      result *= inputs[i + 1];
    } else if (inputs[i] === "÷") {
      result /= inputs[i + 1];
    }
  }
  return result;
}
