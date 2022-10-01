

/* Class containing left and right child of current
node and key value*/
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


// Root of the Binary Tree
let root = null;

/* function to print level order traversal of tree */
const printLevelOrder = () => {
    let h = height(root);
    let i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

/*
* Compute the "height" of a tree -- the number of nodes along the longest path
* from the root node down to the farthest leaf node.
*/
const height = (root) => {
    if (root == null)
        return 0;
    else {
        /* compute height of each subtree */
        let lheight = height(root.left);
        let rheight = height(root.right);

        /* use the larger one */
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

/* Print nodes at the current level */
const printCurrentLevel = (root, level) => {
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}

/* Driver program to test above functions */

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(17);

console.log("Level order traversal of binary tree is ");
printLevelOrder();

// Time complexity O(N^2)
// Space complexity O(N)


