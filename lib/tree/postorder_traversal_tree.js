//see {http://interactivepython.org/lpomz/courselib/static/pythonds/Trees/TreeTraversals.html}
// In a postorder traversal, we recursively do a postorder traversal
// of the left subtree and the right subtree followed by a visit to the root node.
function doTraverse(tree, arr) {
    if (tree.l) {
        doTraverse(tree.l, arr)
    }
    if (tree.r) {
        doTraverse(tree.r, arr)
    }
    arr.push(tree.v);
}

function traverse(tree) {
    let result = [];
    doTraverse(tree, result);
    return result
}

module.exports.traverse = traverse;
