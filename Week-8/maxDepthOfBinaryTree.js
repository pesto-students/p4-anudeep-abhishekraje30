// A binary tree node
class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root;

/*  Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path from theroot node down to the farthest leaf node.
*/
const maxDepth = (node) => {
    if (node == null)
        return 0;
    else {
        /* compute the depth of each subtree */
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}

/* Driver program to test above functions */

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log("Maximum Depth of Binary Tree is : " + maxDepth(root));

// Time complexity is O(N)
// Space complexity is O(N)




