import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
  let letterMap = new Map();
  const alphabetFirstLetter = "A".charCodeAt(0);
  const alphabetLastLetter = "Z".charCodeAt(0);
  const alphabetLength = 26;

  for(let i = alphabetFirstLetter; i <= alphabetLastLetter; i++) {
    letterMap.set(String.fromCharCode(i), i - alphabetFirstLetter);
  }

export default class VigenereCipheringMachine {
  constructor(directMode) {
    this.reverseMode = directMode === false;
  }
  encrypt(str, key) {
    if (!str || !key) throw {'message' : 'Incorrect arguments!'};
    str = str.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyChar = 0;
    for (let i = 0; i < str.length; i++) {
      if (letterMap.has(str[i])) {
        if (keyChar === key.length) keyChar = 0;
        result += String.fromCharCode((letterMap.get(str[i]) + letterMap.get(key[keyChar])) % alphabetLength + alphabetFirstLetter);
        keyChar++;
      } else {
        result += str[i];
      }
    }
    return (this.reverseMode) ? result.split('').reverse().join('') : result;
  }
  decrypt(str, key ) {
    if (!str || !key) throw {'message' : 'Incorrect arguments!'};
    key = key.toUpperCase();

    let result = '';
    let keyChar = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (letterMap.has(char)) {
        if (keyChar === key.length) keyChar = 0;
        result += String.fromCharCode((letterMap.get(char) - letterMap.get(key[keyChar]) + alphabetLength) % alphabetLength + alphabetFirstLetter);
        keyChar++;
      } else {
        result += char;
      }
    }
    return (this.reverseMode) ? result.split('').reverse().join('') : result;
  }
}
