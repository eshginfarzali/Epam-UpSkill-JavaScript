/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    let count = startValue;

    function increment() {
        return ++count;
    }

    return increment;
};

/**
 *
 * @param x: {Number}
 * @returns {Function}
 */
module.exports.multiply = function multiply(x) {
    return (y) => {
        return (z) => {
            return x * y * z;
        };
    };
};
