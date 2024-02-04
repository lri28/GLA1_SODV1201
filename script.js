
document.body.style.backgroundColor = "#050301";


/*Add JS code to display your full name inside h1 element 
and add the following style (align center and color gray or #A9A9A9)*/

const heading1 = document.createElement("h1");
heading1.innerHTML = "Leona Ilao";
heading1.style.textAlign = "center";
heading1.style.color = "gray";
document.body.appendChild(heading1);


/*Add JS code to append two input elements and one buton, 
when click the buton, the sum of these two numbers will show on the page.*/

document.addEventListener("DOMContentLoaded", function () {
const num1 = document.createElement("input");
const num2 = document.createElement("input");
const buttonSum = document.createElement("button");
  
  num1.type = "text";
  num1.id = "num1";

  num2.type = "text";
  num2.id = "num2";

  buttonSum.textContent = "SUM";
  buttonSum.addEventListener("click", sumOfTwoNumbers);

  const containerDiv = document.createElement("div");
  containerDiv.style.textAlign = "center";

  const result = document.createElement("div");
  result.id = "result";

  document.body.appendChild(containerDiv);
  containerDiv.appendChild(num1);
  containerDiv.appendChild(num2);
  containerDiv.appendChild(buttonSum);

  num1.style.height = "23px";
  num1.style.width = "175px";
  num1.style.margin = "10px";

  num2.style.height = "23px";
  num2.style.width = "175px";
  num2.style.margin = "10px";

  buttonSum.style.height = "30px";
  buttonSum.style.width = "175px";
  buttonSum.style.margin = "10px";
});


/*Add JS code to create an arrow function to validate the value of two input boxes (use try catch). 
Only the number is validated. If input is not number, show the error message on the page (DO NOT USE ALERT) 
and set the input box with red border*/

  const sumOfTwoNumbers = () => {
    removeError();
    removeResult();
    removeBorders();
  
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2").value;
  
    try {
      let number1 = parseFloat(input1);
      let number2 = parseFloat(input2);
  
      if (isNaN(number1) || isNaN(number2)) {
        throw new Error("Please enter a number!");
      }
  
      const sum = number1 + number2;
  
      showResult("The sum of two numbers is: " + sum);
       
    } catch (error) {
      let errMessage = document.createElement("div");
      errMessage.id = "errMessage";
      errMessage.style.color = "red";
      errMessage.style.textAlign = "center";
      errMessage.style.fontSize = "large";
      errMessage.innerHTML = "<br>" + error.message;
  
      num1.style.border = "3px solid red";
      num2.style.border = "3px solid red";
  
      document.body.appendChild(errMessage);
    }
  };
  
  function removeBorders() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    num1.style.border = "";
    num2.style.border = "";
  }
  
  function removeError() {
    let errorMsg = document.getElementById("errMessage");
    if (errorMsg) {
      errorMsg.remove();
    }
  }
  
  function removeResult() {
    let resultMsg = document.getElementById("result");
    if (resultMsg) {
      resultMsg.remove();
    }
  }
  
  function showResult(resultMessage) {
    let resultMsg = document.createElement("div");
    resultMsg.id = "result";
    resultMsg.style.color = "white";
    resultMsg.style.textAlign = "center";
    resultMsg.style.fontSize = "large";
    resultMsg.innerHTML = "<br>" + resultMessage;
  
    document.body.appendChild(resultMsg);
  }
  
  
  
  
