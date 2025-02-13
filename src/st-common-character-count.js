import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  arr1.forEach((val1) => {
    if (arr2.includes(val1)) {
      arr2.splice(arr2.findIndex((val2) => val2 === val1), 1);
      count++;
    }
  });
  return count;
}
