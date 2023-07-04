/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.numberOfDuplicates = function numberOfDuplicates(arr) {
  const count = {};
  const result = [];

  for (const element of arr) {
    const duplicates = count[element] || 0;
    result.push(duplicates + 1);
    count[element] = duplicates + 1;
  }

  return result;
};

/**
*
* @param obj: {Object}
* @returns {Number}
*/
module.exports.countObjectStrength = function countObjectStrength(obj) {
  const types = {

    undefined: 0,
    boolean: 1,
    number: 2,
    string: 3,
    object: 5,
    function: 7,
    bigint: 9,
    symbol: 10,
  };



  let strength = 0;

  const properties = Object.getOwnPropertyNames(obj);

  for (const prop of properties) {

    const value = obj[prop];
    const type = typeof value;
    strength += types[type] || 0;


    if (type === 'object' && value !== null && !Array.isArray(value)) {
      strength += countObjectStrength(value);
    }
  }
  return strength;
};