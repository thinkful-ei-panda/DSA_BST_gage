const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const {STORE} = require('../store/store');

const {log} = STORE;



const makeGoodTree = () =>{
  const t = new BinarySearchTree;
  for(let i = 0 ; i < STORE.blanchedArray.length ; i++){
    t.insert(STORE.blanchedArray[i]);
  }
  return t;
};


const makeBadTree = () =>{
  const t = new BinarySearchTree;
  for(let i = 0 ; i < STORE.intArray.length ; i++){
    t.insert(STORE.intArray[i]);
  }
  return t;
};

// log(makeGoodTree());

const treeBalance = tree => {
  if(!tree){
    return;
  }else{
    let rightTree = treeBalance(tree.right);
    let leftTree = treeBalance(tree.left);
    if(leftTree === rightTree) {
      return false;
    }
    else{
      return true;
    }
  }
};

log(treeBalance(makeGoodTree()));
log(treeBalance(makeBadTree()));