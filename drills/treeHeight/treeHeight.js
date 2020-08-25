const BinarySearchTree = require('../../binary_search_tree/binarySearchTree');
const {STORE} =require('../store/store');

const {log} = STORE;

const makeTree = () =>{
  const tree = new BinarySearchTree;
  for(let i = 0 ; i < STORE.intArray.length ; i++ ){
    tree.insert(STORE.intArray[i], STORE.intArray[i]);
  }
  return tree; 
};

/**
 * 
 * @param {BST inst w/val} tree 
 * @param {default int = 0} count 
 * 
 * base case : if the value is null
 *  you have reached the end: [stop count];
 * else
 * check bother left and right
 *      if they do have value && they aren't changing directions (i.e. L -> R)
 *              push() value into array;
 *      else if(other direction exist)[i.e. push L, new L has both L, R.]
 *          push last array(i.e. new.push([...old])) into new direction array
 *      
 */

const treeHeight = (tree) =>{  
  if(!tree){
    return 0;
  }
  else{
    let treeRight = treeHeight(tree.right);
    let treeLeft =  treeHeight(tree.left);
    if(treeLeft > treeRight){
      return treeLeft + 1;
    }
    else{
      return treeRight + 1;
    }
  }
};

log(treeHeight(makeTree())); //left having depth of 2