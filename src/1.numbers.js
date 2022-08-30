
function add (num1, num2) {
  return parseInt(num1) + parseInt(num2) ;
}


function subtract (num1, num2) {
  return parseInt(num1) - parseInt(num2);
}


function multiply(num1, num2) {
  return num1 * num2;
}


function parseInt (str) {
  return Number.parseInt(str, 10);
}

//addAndReturn2DecimalPlaces: should return a number value, rounded to 2 decimal places
// Example: 1.23453 + 5.37873 should return 6.61 and the return type should be a number
function addAndReturn2DecimalPlaces(num1, num2) {
  const result=Number((num1+num2).toFixed(2))
  return result;
}

module.exports  = {
  add,
  subtract,
  multiply,
  parseInt,
  addAndReturn2DecimalPlaces
};