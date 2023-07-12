/**
 *
 * @returns {Null}
 */
module.exports.Logger = function logger() {
  const logData = [];

  function log(event) {
    logData.push(event);
  }

  function getLog() {
    return logData;
  }

  function clearLog() {
    logData.length = 0;
  }

  return {
    log,
    getLog,
    clearLog
  };
};

/**
 *
 * @returns {Array}
 */
// Change this function and implement task
Array.prototype.shuffle = function() {
    const array = [...this];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
