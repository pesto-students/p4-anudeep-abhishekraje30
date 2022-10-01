class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root;

const isBST = (node) => {
    if (node == null)
        return true;

    /* False if left is > than node */
    if (node.left != null && node.left.data > node.data)
        return false;

    /* False if right is < than node */
    if (node.right != null && node.right.data < node.data)
        return false;

    /* False if, recursively, the left or right is not a BST */
    if (!isBST(node.left) || !isBST(node.right))
        return false;

    /* Passing all that, it's a BST */
    return true;
}

/* Driver program to test above functions */
root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

console.log("The Given Binary Tree is : " + isBST(root));

// Time complexity is O(N)
// Space complexity is O(N)