//see {http://interactivepython.org/lpomz/courselib/static/pythonds/Trees/TreeTraversals.html}
// In a preorder traversal, we visit the root node first,
// then recursively do a preorder traversal of the left subtree,
// followed by a recursive preorder traversal of the right subtree.
function doTraverse(tree, arr) {
    arr.push(tree.v);
    if (tree.l) {
        doTraverse(tree.l, arr)
    }
    if (tree.r) {
        doTraverse(tree.r, arr)
    }
}

function traverse(tree) {
    let result = [];
    doTraverse(tree, result);
    return result
}

module.exports.traverse = traverse;
