/* SELECTORS */
//Maintenance
const buttonElementCE = document.querySelector(".button-CE");
const buttonElementOnOff = document.querySelector(".button-ON-OFF");
//Numbers
const buttons = document.querySelectorAll(".button-number");
//Operators
const operators = document.querySelectorAll(".button-operator");
//Rest
const buttonElementDot = document.querySelector(".button-dot");
const buttonElementBck = document.querySelector(".button-bck");
const buttonElementEqual = document.querySelector(".button-equal");
const divElementResultScreen = document.querySelector(".result__screen");
//Everything
const allButtons = document.querySelectorAll(".onOff");

//Variables
let variable1;
let variable2;
let operator;
let result;
let token = 0;

//Event listeners button push

buttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (divElementResultScreen.innerText === "Too big!") {
      divElementResultScreen.innerText = this.innerText;
    } else {
      divElementResultScreen.innerText += this.innerText;
    }

    if (divElementResultScreen.innerText.length > 15) {
      divElementResultScreen.innerText = "Too big!";
    }
  });
});

//Backspace

buttonElementBck.addEventListener("click", function () {
  divElementResultScreen.innerText = divElementResultScreen.innerText.slice(
    0,
    -1
  );
});

//Dot

buttonElementDot.addEventListener("click", function () {
  if (!divElementResultScreen.innerText.includes(".")) {
    divElementResultScreen.innerText += ".";
  }
});

//ON / OFF
allButtons.forEach((button) => {
  buttonElementOnOff.addEventListener("click", function () {
    button.classList.toggle("not-working");
  });
});

//Event listener operators

operators.forEach((item) => {
  item.addEventListener("click", function () {
    if (token === 0) {
      if (variable1 >= 0) {
        result = operate(variable1, divElementResultScreen.innerText, operator);
        operator = this.innerText;
        variable1 = result;
        divElementResultScreen.innerText = "";
      } else {
        operator = this.innerText;
        variable1 = divElementResultScreen.innerText;
        divElementResultScreen.innerText = "";
      }
    } else {
      variable1 = divElementResultScreen.innerText;
      divElementResultScreen.innerText = "";
      operator = this.innerText;
      token = 0;
    }
  });
});

//Equal

buttonElementEqual.addEventListener("click", function () {
  if (variable1 != 0 && variable1 != "") {
    variable2 = divElementResultScreen.innerText;
    result = operate(variable1, variable2, operator);
    if (result) {
      if (result === "Bingo") {
        divElementResultScreen.innerText = "Bingo!";
      } else if (result > 1e15) {
        divElementResultScreen.innerText = "Too big!";
      } else {
        divElementResultScreen.innerText = parseFloat(result.toFixed(3));
      }
    }
    variable1 = result;
    variable2 = undefined;
    result = undefined;
    token = 1;
  }
});

//Clear
buttonElementCE.addEventListener("click", function () {
  divElementResultScreen.innerText = "";
  variable1 = undefined;
  variable2 = undefined;
  operator = undefined;
  result = undefined;
});

//Calculator funcions
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (b == 0) {
    return "Bingo";
  }
  return Number(a) / Number(b);
}

function operate(variable1, variable2, operator) {
  if (operator == "+") {
    return add(variable1, variable2);
  } else if (operator == "-") {
    return subtract(variable1, variable2);
  } else if (operator == "x") {
    return multiply(variable1, variable2);
  } else if (operator == "/") {
    return divide(variable1, variable2);
  }
}
