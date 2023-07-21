'use strict';

/**
 *
 * @param str: {String}
 * @returns {Boolean}
 */
const isValidJSON = (str) => {
  try{
    JSON.parse(str);
    return true ;
  }
  catch(error){
    return false
  }
};

/**
 *
 * @param params: {Object}
 * @returns {String}
 */
const greeting = (params) => {
    return `Hello, my name is ${params.name} ${params.surname} and I am ${params.age} years old.`
};

/**
 *
 * @param params: {Array}
 * @returns {Array}
 */
 function unique(arr) {
    const uniqueArr = new Set(arr);
    return Array.from(uniqueArr);
}

/**
 * 
 * @param arr: {Array}
 * @return {Iterator}
 */
 function* generator(arr) {
    for (const block of arr) {
        yield block;
    }}

module.exports = {
    isValidJSON,
    greeting,
    unique,
    generator
};
