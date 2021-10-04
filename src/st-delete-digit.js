import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n.toString();
  const length = str.length;
  let max = null;
  for(let i = 0; i < length; i++){
    const currNum = str.slice(0, i) + str.slice(i + 1);
    if(currNum > max || currNum == null) max = +currNum;
  }
  return max;
}
