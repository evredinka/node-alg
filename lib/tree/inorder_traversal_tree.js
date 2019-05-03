//see {http://interactivepython.org/lpomz/courselib/static/pythonds/Trees/TreeTraversals.html}
// In an inorder traversal, we recursively do an inorder traversal
// on the left subtree, visit the root node, and finally
// do a recursive inorder traversal of the right subtree.
function doTraverse(tree, arr) {
    if (tree.l) {
        doTraverse(tree.l, arr)
    }
    arr.push(tree.v);
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
