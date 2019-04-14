function doSort(list) {
    if (list.length < 2) {
        return list
    }

    let pivotIndex = Math.round(list.length / 2);
    const pivot = list[pivotIndex];

    const less = [];
    const greater = [];
    for (let i = 0; i < list.length; i++) {
        if (i === pivotIndex) {
            continue
        }
        if (list[i] <= pivot) less.push(list[i]);
        else greater.push(list[i])
    }
    let left = doSort(less);
    left.push(pivot);
    left.push.apply(left, doSort(greater));
    return left
}

/**
 * O(n * log n), O(n2) in worst case
 * @param list to sort
 * @returns sorted list
 */
function sort(list) {
    return doSort(list)
}

module.exports.sort = sort;
