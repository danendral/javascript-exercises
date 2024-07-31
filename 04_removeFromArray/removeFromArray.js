const removeFromArray = function(array, ...elementsToRemove) {
  // console.log(elementsToRemove);
  for (let i=array.length-1; i>=0; i--) {
    for (const element of elementsToRemove) {
      if (array[i] === element) {
        array.splice(i, 1);
      }
    }
  }
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
