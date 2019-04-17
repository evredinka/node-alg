function swap(list, i, j) {
    const swapTemp = list[i];
    list[i] = list[j];
    list[j] = swapTemp;
}

function partition(list, firstInd, lastInd) {
    const pivot = list[lastInd];
    let i = firstInd - 1;
    for (let j = firstInd; j < lastInd; j++) {
        if (list[j] <= pivot) {
            i++;
            swap(list, i, j);
        }
    }
    swap(list, i + 1, lastInd);
    return i + 1;
}

function doSort(list, firstInd, lastInd) {
    if (firstInd < lastInd) {
        let pivotIndex = partition(list, firstInd, lastInd);
        doSort(list, firstInd, pivotIndex - 1);
        doSort(list, pivotIndex + 1, lastInd);
    }
    return list
}

/**
 * O(n * log n), O(n2) in worst case
 * @param list to sort
 * @returns sorted list
 */
function sort(list) {
    return doSort(list, 0, list.length - 1)
}

module.exports.sort = sort;
