console.clear();
var num1, num2, result;

function extractData() {
  num1 = document.getElementById('number1').value;
  num2 = document.getElementById('number2').value;
  console.log(sum(num1, num2));
}

function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

function kalakhatta() {
  console.log(extractData());
}