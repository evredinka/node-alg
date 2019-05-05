const swap = require('../swapper');

/**
 * O(n2)
 * @param list
 * @returns sorted list
 */
function sort(list) {
    for (let i = 0; i < list.length; i++) {
        let j = i;
        while (j > 0 && list[j] < list[j - 1]) {
            swap(list, j, j - 1);
            j--
        }
    }
    return list
}

module.exports.sort = sort;
