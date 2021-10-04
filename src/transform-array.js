import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) throw {'message' :"'arr' parameter must be an instance of the Array!"};
  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case ('--discard-prev'):
        transformArr.pop();
        break;
      case ('--double-next'):
        if (i + 1 < arr.length) transformArr.push(arr[i + 1]);
        break;
      case ('--discard-next'):
        i++;
        transformArr.push(null);
        break;
      case ('--double-prev'):
        if (i > 0 && transformArr[transformArr.length - 1] !== null) transformArr.push(arr[i - 1]);
        break;
      default:
        transformArr.push(arr[i]);
    }
  }
  return transformArr.filter(elem => elem !== null);
}
