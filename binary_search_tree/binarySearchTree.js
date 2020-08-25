class BinarySearchTree {
	constructor(key= null, value = null, parent = null){
		this.key = key ; 
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}
	insert(key,value){
	/* If the tree is empty then this key being inserted is the root of the tree*/
		if(this.key === null){
			this.key = key;
			this.value = value;
		}
		/*If the tree a;read exists, then start at the root
		  and compare it to the key you want to insert
		  If the new key is less the n the node's key
		  then the new Node needs to live in the left-hand branch*/
		else if(key < this,key){
			/*If the existing node does not have a left child.
			 * mean that if the 'left' pointer is empty.
			 * then we can just instantiate and insert the new node
			 * as the left child of that node, passing 'this' as the parent
			 */
			if(this.left == null){
				this.left = new BinarySearchTree(key,value,this);
			}
			/*If the node has an existing left child
			 * then we recusively call the 'insert' method
			 * so the node is added futher down the tree*/
			else { 
				this.insert(key,value);
			}
			/*Similarly, if the new key is greater then the node's key
			 * then you do the same thing. but on the right-hand side*/
			else { 
				if(this.right == null){
					this.right = new BinarySearchTree(key,value, this);
				}
			}

		}
	}
	find(key){
	//If the item is found at the root return the value
		if(this.key == key){
			return this.value;
		}
		/*If the item you are looking for is less then the key value
		 * then you follow the left child.
		 * If there is an existing left child.
		 * then reursively check it's left and/or right children
		 * until you find the item */
		else if ( key < this.key && this.left){
			return this.left.find(key)
		}
		/* If the item you are looking for is greater then the root
		 * then follow the right child.
		 * If there is an existing right child.
		 * then recursively check it's left/or right child 
		 * until you find the item*/
		else if(key > this.key && this.right) {
			return this.right.find(key);
		}
		// You have searched the tree and the item is not in the tree
		else {
			throw new Error('key Error');
		}
	}
}
module.export = BinarySearchTree
