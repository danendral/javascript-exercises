const palindromes = function (input) {
  let newString = input.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLowerCase();

  let reversedString = newString.split('').reverse().join('');

  return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
