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

function printTree(node, space = "") {
    if (node === null) {
        return;
    }

    printTree(node.right, space + "   ");
    console.log(space + node.value);
    printTree(node.left, space + "   ");
}

let root = null;
const values = [15, 10, 20, 8, 12];

for (const value of values) {
    root = insert(root, value);
}

printTree(root);