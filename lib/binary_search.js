/**
 * O(log n)
 * @param list sorted list
 * @param item element to search for
 * @returns index of element or null if not found
 */
function search(list, item) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid
        }
        if (guess > item) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return null
}

module.exports = search;
