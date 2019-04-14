function doSum(list) {
    if (list.length === 0) {
        return 0
    }
    if (list.length === 1) {
        return list[0]
    }
    return list.pop() + doSum(list);
}

function doCount(list) {
    if (list.length === 0) {
        return 0
    }
    if (list.length === 1) {
        return 1
    }
    list.pop();
    return 1 + doCount(list)
}

function findMax(list) {
    if (list.length === 0) {
        return null
    }
    if (list.length === 1) {
        return list[0]
    }
    let last = list.pop();
    let guess = findMax(list);
    return last > guess ? last : guess
}

function max(list) {
    return findMax(list)
}

function count(list) {
    return doCount(list)
}

function sum(list) {
    return doSum(list)
}

module.exports.sum = sum;
module.exports.count = count;
module.exports.max = max;
