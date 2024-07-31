const sumAll = function(num1, num2) {
  // Input validation
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  // Get the smaller and larger numbers
  let smallerNumber = 0;
  let largerNumber = 0;
  if (num1 < num2) {
    smallerNumber = num1;
    largerNumber = num2;
  } else {
    smallerNumber = num2;
    largerNumber = num1;
  }

  let sum = 0;
  // Iterate the numbers in between, and sum them up
  for (let i=smallerNumber; i<=largerNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
