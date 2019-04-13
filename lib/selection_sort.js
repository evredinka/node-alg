/**
 * O(n2)
 * @param list list to be sorted
 * @returns same list but sorted
 */
function sort(list) {
    for (let i = 0; i < list.length; i++) {
        let smallest = list[i];
        let smallestIndex = i;
        for (let j = i; j < list.length; j++) {
            if (list[j] && list[j] < smallest) {
                smallest = list[j];
                smallestIndex = j
            }
        }
        const current = list[i];
        list[i] = smallest;
        list[smallestIndex] = current
    }
    return list
}

module.exports = sort;
