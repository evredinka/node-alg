function merge(l, r) {
    const result = [];

    while (l.length !== 0) {
        if (r[0] && r[0] < l[0]) {
            result.push(r[0]);
            r.splice(0, 1)
        } else {
            result.push(l[0]);
            l.splice(0, 1)
        }
    }

    if (l.length !== 0) {
        result.push(...l)
    }

    if (r.length !== 0) {
        result.push(...r)
    }

    return result;
}

function doSort(list) {
    if (list.length < 2) {
        return list
    }
    const mid = Math.round(list.length / 2);
    const l = doSort(list.slice(0, mid));
    const r = doSort(list.slice(mid, list.length));
    return merge(l, r)
}

/**
 * Ο(n log n)
 * @param list
 * @returns sorted list
 */
function sort(list) {
    return doSort(list, 0, list.length - 1)
}

module.exports.sort = sort;
