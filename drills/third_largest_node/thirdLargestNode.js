const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const { STORE } = require('../store/store');

const {log} = STORE;

const makeTreeInst = ( ) => {
  const t = new BinarySearchTree;

  for (let i = 0; i < STORE.intArray.length; i++) {
    t.insert(STORE.intArray[i]);    
  }
  return t;
};
log(makeTreeInst());