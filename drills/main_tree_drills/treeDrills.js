const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const {STORE} = require('../store/store');

const { log } = STORE;


const intTree = intArr =>{

  const tree = new BinarySearchTree;

  for(let i = 0 ; i < intArr.length ; i++){
    tree.insert(intArr[i]);
  }
  return tree;
};

// log(intTree(STORE.intArray));

const charTree = charArr => {

  const tree = new BinarySearchTree;

  for(let i = 0 ; i < charArr.length ; i++){
    tree.insert(charArr[i]);
  }
  return tree;
}; 

// log(charTree(STORE.easyCharArray));