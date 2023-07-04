/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    if (symbolsCount > str.length) {
        return str;
    }

    const suffix = str.slice(-symbolsCount);

    return suffix + str + suffix;

};


/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    const diffX = Math.abs(z - x);
    const diffY = Math.abs(z - y);

    if (diffX < diffY) {
        return x;
    } else {
        return y;
    }
};


/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    const uniqueArr = [];

    for (const i of arr) {
        if (!uniqueArr.includes(i)) {
            uniqueArr.push(i);
        }
    }

    return uniqueArr;

};
