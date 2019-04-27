const findShortestPath = require('../lib/dijkstra').findShortestPath;
const lowestCostNode = require('../lib/dijkstra').lowestCostNode;
const expect = require("chai").expect;

describe('Dijkstra algorithm', () => {

    it('should find shortest path 1', () => {
        const graph = {
            start: {a: 6, b: 2},
            a: {finish: 1},
            b: {a: 3, finish: 5},
            finish: {}
        };
        const result = findShortestPath(graph, "start", "finish");
        expect(result.cost).to.eql(6);
        expect(result.path).to.eql(["start", "b", "a", "finish"]);
    });

    it('should find shortest path 2', () => {
        const graph = {
            start: {a: 5, b: 2},
            a: {c: 4, d: 2},
            b: {a: 8, d: 7},
            c: {finish: 3, d: 6},
            d: {finish: 1},
            finish: {}
        };
        let result = findShortestPath(graph, "start", "finish");
        expect(result.cost).to.eql(8);
        expect(result.path).to.eql(["start", "a", "d", "finish"]);
    });

    it('should find shortest path in cyclic graph', () => {
        const graph = {
            a: {b: 10},
            b: {c: 20},
            c: {d: 1, e: 30},
            d: {b: 1},
            e: {}
        };
        let result = findShortestPath(graph, "a", "e");
        expect(result.cost).to.eql(60);
        expect(result.path).to.eql(["a", "b", "c", "e"]);
    });

});

describe('For unit tests only', () => {

    it('should find lowest cost node in empty costs', () => {
        expect(lowestCostNode({}, [])).to.eql(undefined);
    });

    it('should find lowest cost node "a"', () => {
        expect(lowestCostNode({a: 1, b: 2, c: 3})).to.eql("a");
    });

    it('should find lowest cost node "c"', () => {
        expect(lowestCostNode({a: 3, b: 2, c: 1})).to.eql("c");
    });

    it('should find lowest cost node "b"', () => {
        expect(lowestCostNode({a: 1, b: 2, c: 3}, ["a"])).to.eql("b");
    });

    it('should not find lowest cost node when all nodes are viewed', () => {
        expect(lowestCostNode({a: 1, b: 2, c: 3}, ["a", "b", "c"])).to.eql(undefined);
    });

});
