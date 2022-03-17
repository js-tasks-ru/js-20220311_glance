/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = function (obj, ...fields) {
  const length = arguments.length;
  const pickedObj = {};

  for (let i = 1; i < length; i +=1) {
    if (obj[arguments[i]]) {
      pickedObj[arguments[i]] = obj[arguments[i]];
    }
  }

  return pickedObj;
};
