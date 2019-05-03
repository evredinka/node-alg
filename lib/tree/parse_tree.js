const numberRegex = RegExp('[0-9]');
const operatorRegex = RegExp('[+*/-]');

const isNumber = (str) => numberRegex.test(str);
const isOperator = (str) => operatorRegex.test(str);

function evaluate(tree) {
    const leftChild = tree.left;
    const rightChild = tree.right;

    if (leftChild && rightChild) {
        let operator = tree.value;
        let leftResult = evaluate(leftChild);
        let rightResult = evaluate(rightChild);
        return eval(`${leftResult} ${operator} ${rightResult}`)
    } else {
        return tree.value
    }
}

/**
 * see {http://interactivepython.org/lpomz/courselib/static/pythonds/Trees/ParseTree.html}
 * @param expression
 * @returns tree
 */
function toTree(expression) {
    let tokens = expression.split(' ');

    const root = {};
    let currentNode = root;
    for (const token of tokens) {
        //If the current token is a '(', add a new node
        // as the left child of the current node, and descend to the left child.
        if (token === '(') {
            const leftChild = {root: currentNode};
            currentNode.left = leftChild;
            currentNode = leftChild
        }
        //If the current token is in the list ['+','-','/','*'],
        // set the root value of the current node to the operator represented by the current token.
        // Add a new node as the right child of the current node and descend to the right child.
        if (isOperator(token)) {
            currentNode.value = token;
            let rightChild = {root: currentNode};
            currentNode.right = rightChild;
            currentNode = rightChild
        }
        //If the current token is a number, set the root value
        // of the current node to the number and return to the parent.
        if (isNumber(token)) {
            currentNode.value = parseInt(token);
            currentNode = currentNode.root
        }
        //If the current token is a ')', go to the parent of the current node.
        if (token === ')') {
            currentNode = currentNode.root
        }
    }

    return root
}

module.exports = {
    toTree,
    evaluate,
    isNumber,
    isOperator
};
