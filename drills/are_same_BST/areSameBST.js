const {STORE} = require('../store/store');

const {log, samArray1, samArray2} = STORE;

/**
 * 
 * @param {Array} arrOne 
 * @param {Array} arrTwo
 * @summary when called should return a boolean based on whether the 2 arrays going in would
 * create a similar tree to one another.
 * 
 */

const areSameTree = (arrOne, arrTwo) => {
  if(arrOne.length !== arrTwo){
    return false;
  }
  let right1 = [],
    left1 = [],
    right2 = [],
    left2 = [],
    i = 0; 
    /**
     * @todo find a way to mimic the tree 
     * so the can be compared.
     */
  while( i  < arrTwo.length){
  }

};

log(areSameTree());