class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countNodes(node) {
    if (node === null) {
        return 0;
    }

    return 1 + countNodes(node.left) + countNodes(node.right);
}

const root = new Node(15);

root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);

console.log("Number of nodes:", countNodes(root));