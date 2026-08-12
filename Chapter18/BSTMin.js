class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insert(node, value) {
    if (node === null) {
        return new Node(value);
    }

    if (value < node.value) {
        node.left = insert(node.left, value);
    } else {
        node.right = insert(node.right, value);
    }

    return node;
}

function min(node) {
    if (node === null) {
        throw new Error("Tree is empty");
    }

    while (node.left !== null) {
        node = node.left;
    }

    return node.value;
}

let root = null;
const values = [15, 10, 20, 8, 12];

for (const value of values) {
    root = insert(root, value);
}

console.log("Minimum value:", min(root));