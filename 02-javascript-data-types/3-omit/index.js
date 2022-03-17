/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
// export const omit = function (obj, ...fields) {
// 	const length = arguments.length;
// 	const omitObj = {...obj};

// 	for (let i = 1; i < length; i +=1) {
// 		if (omitObj[arguments[i]]) {
// 			delete omitObj[arguments[i]];
// 		}
// 	}
// 	return omitObj;
// };


export const omit = function (obj, ...fields) {
  const length = arguments.length;
  let arr = Object.entries(obj);	

  for (let i = 1; i < length; i += 1) {
    arr = arr.filter(([key, value]) => key !== arguments[i]);
  }

  return Object.fromEntries(arr);
};