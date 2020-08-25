const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const {STORE} = require('../store/store');

const {log, intArray} = STORE;



const makeTree = () =>{
  const t = new BinarySearchTree;
  for(let i = 0 ; i < intArray.length ; i++){
    t.insert(intArray[i]);
  }
  return t;
};

log(makeTree());