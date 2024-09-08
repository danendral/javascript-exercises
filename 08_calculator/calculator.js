const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let totalSum = array.reduce((total, num) => total += num, 0)
  return totalSum
};

const multiply = function(array) {
  let product = array.reduce((total, num) => total *= num, 1)
  return product

};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if(num <1) {
    return 1;
  }
  else {
    return num * factorial(num-1); 
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
