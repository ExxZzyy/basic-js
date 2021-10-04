import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(!this.chain) this.chain = [];
    if(value === undefined) value = '';
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(!this.chain) {
      this.chain = [];
    }
    position--;
    if(!(position in this.chain) || isNaN(+position)) {
      this.chain = null;
      throw {'message': 'You can\'t remove incorrect link!'}
    }
    this.chain = this.chain.slice(0, position).concat(this.chain.slice(position + 1));
    return this;
  },
  reverseChain() {
    if(!this.chain) this.chain = [];
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    if(!this.chain) this.chain = [];
    const chain = this.chain.map((val) =>`( ${val} )`).join('~~');
    this.chain = null;
    return chain;
  }
};
