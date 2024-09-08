const findTheOldest = function(array) {
  const currentYear = (new Date()).getFullYear();

  let orderedArray = array.sort((a, b) => {
    const aAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const bAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    if (aAge > bAge) {
      return -1
    }
    else {
      return 1
    }
  })
  return orderedArray[0]
};

// Do not edit below this line
module.exports = findTheOldest;
