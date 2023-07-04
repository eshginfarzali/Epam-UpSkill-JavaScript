/**
 *
 * @param array1: {Array}
 * @param array2: {Array}
 * @returns {Array}
 */
module.exports.arrayDiff = function arrayDiff(array1, array2) {
    const diff = [];

    for (const element of array1) {
        if (!array2.includes(element)) {
            diff.push(element);
        }
    }

    for (const element of array2) {
        if (!array1.includes(element)) {
            diff.push(element);
        }
    }

    return diff;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Array}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y) {
    let result = [];

    for (let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            result.push(`${i} is even`);
        } else {
            result.push(`${i} is odd`);
        }
    }

    return result;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum = function rangeSum(x, y) {
    let result =0
    for (let i = x; i <= y; i++) {
       result +=i
    }

    return result;
};
