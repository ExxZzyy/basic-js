import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options ) {
  if(str === undefined) str = '';
  let {
    repeatTimes : repeatTimes = 1,
    separator : separator = '+',
    addition : addition = '',
    additionRepeatTimes : additionRepeatTimes = 1,
    additionSeparator : additionSeparator = '|',
  } = options;

  let result = [];
  let addArr = [];
  let strArr = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    addArr.push(addition + '');
  }

  strArr.push(str + '');
  strArr.push(addArr.join(additionSeparator));

  for (let i = 0; i < repeatTimes; i++) {
    result.push(strArr.join(''));
  }
  return result.join(separator);
}
