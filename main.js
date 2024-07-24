const result = document.getElementById("result");
let resultDisplayed = false;

function getResult(value) {
  if (value === "=") {
    const expression = result.value;
      if (expression.includes("/0")) {
         result.value = "Eroare";
        } else {
        result.value = eval(expression);
        }
    resultDisplayed = true;
  } else {
    if (resultDisplayed) {
      result.value = "";
      resultDisplayed = false;
    }

     const operators = ["+", "-", "*", "/", "%"];
     const lastChar = result.value.slice(-1);
       if (operators.includes(lastChar) && operators.includes(value)) {
          result.value = result.value.slice(0, -1) + value;
          } else {
         result.value += value;
        }

   }
}

function clearResult() {
  result.value = "";
}

function deleteLast() {
  if (resultDisplayed) {
    result.value = "";
    resultDisplayed = false;
  } else {
    result.value = result.value.slice(0, -1);
  }
}
