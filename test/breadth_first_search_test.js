let search = require('../lib/breadth_first_search').search;
const expect = require("chai").expect;

describe('Breadth First Search', function () {

    const graph = {
        berlin: ["london", "madrid"],
        london: ["berlin"],
        madrid: ["london"],
        rome: ["madrid", "berlin"]
    };

    it('should find a connection from Berlin to London', function () {
        expect(search(graph, "berlin", "london")).to.eql(true);
    });

    it('should find a connection from Rome to London', function () {
        expect(search(graph, "rome", "london")).to.eql(true);
    });

    it('should not find a connection from Berlin to Rome', function () {
        expect(search(graph, "berlin", "rome")).to.eql(false);
    });

    it('should not find a connection from London to Rome', function () {
        expect(search(graph, "london", "rome")).to.eql(false);
    });

    const cyclicGraph = {
        berlin: ["london"],
        london: ["berlin"]
    };

    it('should find a connection from Berlin to London', function () {
        expect(search(cyclicGraph, "berlin", "london")).to.eql(true);
    });

    it('should not find a connection from Berlin to Rome', function () {
        expect(search(cyclicGraph, "berlin", "rome")).to.eql(false);
    });

});
