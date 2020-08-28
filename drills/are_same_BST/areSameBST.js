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
  if(arrOne.length !== arrTwo.length){
    return false;
  }

  let right1 = [];
  let left1 = [];
  let right2 = [];
  let left2 = [];
  let i = 1; 

  while( i  < arrOne.length){
    if(arrOne[i] < arrOne[0]){
      left1.unshift(arrOne[i]);
    }
    else {
      right1.unshift(arrOne[i]);
    }
    if(arrTwo[i] < arrTwo[0]){
      left2.unshift(arrTwo[i]);
    }
    else {
      right2.unshift(arrTwo[i]);
    }
    i++;
  }
  return (
    right2.length === left1.length 
    && 
    right1.length === left2.length
    &&
    right2.length === right1.length 
    && 
    left1.length === left2.length);
};

log(areSameTree(samArray1,samArray2)); 