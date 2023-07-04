/**
 *
 * @param arr: {Array}
 * @param n: {Number}
 * @returns {Number}
 */
module.exports.nThNoRepeatedValue = function nThNoRepeatedValue(arr, n) {
    const counts = {};
    const uniqueElements = [];

    for (const element of arr) {
        counts[element] = (counts[element] || 0) + 1;
    }
    for (const element of arr) {
        if (counts[element] === 1) {
            uniqueElements.push(element);
        }
    }

    return uniqueElements[n - 1];
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.primeValues = function primeValues(arr) {
  
  let boolArr = [];

  for (let element of arr) {
    if (element <= 1) {
      boolArr.push(false);
    } else if (element === 2) {
      boolArr.push(true);
    } else {
      let isPrime = true;
      // for (let i = 2; i <= Math.sqrt(element); i++)
      for (let i = 2; i <= Math.floor(element/2); i++) {
        if (element % i === 0) {
          isPrime = false;
          break;
        }
      }
      boolArr.push(isPrime);
    }
  }

  return boolArr;

};


