function lowestCostNode(costs, viewedNodes = []) {
    return Object.keys(costs).reduce((minKey, currentKey) => {
        if (viewedNodes.includes(currentKey)) {
            return minKey;
        }
        if (minKey === undefined) {
            return currentKey
        }
        return costs[currentKey] <= costs[minKey] ? currentKey : minKey
    }, undefined);
}

/**
 * @param nodes object ex. {a: 1, b: 2}, where a is
 * node name and 1 is cost to get to the node
 */
function initCosts(nodes) {
    const costs = {};
    Object.keys(nodes).forEach(node => {
        costs[node] = nodes[node]
    });
    return costs;
}

function findShortestPath(graph, from, to) {
    //init
    const costs = initCosts(graph[from]);
    const parents = {};
    const viewed = [];
    let lowestCostUnviewedNode = lowestCostNode(costs, viewed);

    //do
    while (lowestCostUnviewedNode) {
        const neighbours = graph[lowestCostUnviewedNode];
        Object.keys(neighbours).forEach(node => {
            let newCostToNode = costs[lowestCostUnviewedNode] + neighbours[node];
            if (!costs[node]) {
                costs[node] = newCostToNode;
                parents[node] = lowestCostUnviewedNode
            } else if (costs[node] > newCostToNode) {
                costs[node] = newCostToNode;
                parents[node] = lowestCostUnviewedNode
            }
        });
        viewed.push(lowestCostUnviewedNode);
        lowestCostUnviewedNode = lowestCostNode(costs, viewed);
    }

    const path = [];
    path.unshift(to);
    let parent = parents[to];
    while (parent) {
        path.unshift(parent);
        parent = parents[parent]
    }
    path.unshift(from);

    return {cost: costs[to], path}
}

module.exports = {
    findShortestPath: findShortestPath,
    lowestCostNode: lowestCostNode
};
