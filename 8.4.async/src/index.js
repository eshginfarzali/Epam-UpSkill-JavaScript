/**
 *
 * @param data: {Array}
 * @returns number
 */
 module.exports.callback1 = function(data) {
    return data.reduce((sum, num) => sum + num, 0);

};

/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback2 = function(data) {
    return data.reduce((product, num) => product * num, 1);

};

/**
 *
 * @param s: {string}
 * @returns number
 */
module.exports.w = function(s, callback) {
    const words = s.split(' ');
  const data = words.map(word => word.length);
  return callback(data);
};

/**
 *
 * @param data: {Array | Object}
 * @returns {Function}
 */
module.exports.mocker = function mocker(data) {
    return () => new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
module.exports.summarize1 = function summarize1(...promises) {
    return Promise.all(promises).then(values => {
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        return sum;
      });
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
 module.exports.summarize2 = async function summarize2(...promises) {
    const values = await Promise.all(promises);
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return sum;
};
