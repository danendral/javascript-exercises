const fibonacci = function(num) {
  // Invalid number
  if (num < 0) {
    return "OOPS"
  }

  // Initiate the series
  let fibonacciSeries = [0, 1];

  while (fibonacciSeries.length-1 < num) {
    fibonacciSeries.push(fibonacciSeries[fibonacciSeries.length-2] + fibonacciSeries[fibonacciSeries.length-1]);
  } 
  return fibonacciSeries[num]
};

// Do not edit below this line
module.exports = fibonacci;
