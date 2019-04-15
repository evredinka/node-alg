/**
 * O(n2)
 * @param list list to be sorted
 * @returns same list but sorted
 */
function sort(list) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < list.length; i++) {
            if (list[i] > list[i + 1]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swapped = true
            }
        }
    }
    return list
}

module.exports.sort = sort;
