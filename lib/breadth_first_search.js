/**
 * O(V+E), where V is the number of vertices, and E is the number of Edges
 * @param graph
 * @param from
 * @param to
 * @returns {boolean}
 */
function search(graph, from, to) {
    const queue = [];
    queue.push(...graph[from]);
    const viewed = [];

    while (queue.length !== 0) {
        let city = queue.shift();
        if (viewed.lastIndexOf(city) === -1) {
            if (city === to) {
                return true
            } else {
                queue.push(...graph[city]);
                viewed.push(city)
            }
        }
    }

    return false
}

module.exports.search = search;
