const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const { STORE } = require('../store/store');

const {log} = STORE;

const makeTreeInst = () => {
  const t = new BinarySearchTree;

  for (let i = 0; i < STORE.intArray.length; i++) {
    t.insert(STORE.intArray[i],STORE.intArray[i]);    
  }
  return t;
};

// log(makeTreeInst());

const findThirdGreatest = (tree, store=[]) => {
  if(!tree){
    return;
  }
  store.push(tree.find(tree.key));

  findThirdGreatest(tree.right, store);
  findThirdGreatest(tree.left, store);

  return store.sort((a,b) => a- b)[store.length - 3];
};  

log(findThirdGreatest(makeTreeInst()));