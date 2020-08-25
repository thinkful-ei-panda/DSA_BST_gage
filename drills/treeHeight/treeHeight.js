const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const {STORE} =require('../store/store');

const {log} = STORE;

const makeTree = () =>{
  const tree = new BinarySearchTree;
  for(let i = 0 ; i < STORE.intArray.length ; i++ ){
    tree.insert(STORE.intArray[i]);
  }
  return tree; 
};

const treeHeight = tree =>{
  return tree;
};

log(treeHeight(makeTree()));