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

// log(makeTree());

/**
 * 
 * @param {isnt_of BinarySearchTree} tree 
 */

const isBST = tree => {
  if(!tree){
    return;
  }else{
    isBST(tree.left);
    isBST(tree.right);
    if(tree.left && tree.right && (tree.left.key < tree.right.key)){
      return true;
    }
    else{
      return false;
    }
  }
};

log(isBST(makeTree()));