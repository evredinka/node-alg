const search = require('../lib/binary_search');
const expect = require("chai").expect;

const list = [0, 1, 5, 7, 12, 45, 67, 900, 1344, 45467, 50000];
const emptyList = [];
const singletonList = [12];


describe('Binary Search', function () {
    it('should return 1 when search for number 1', function () {
        expect(search(list, 1)).to.equal(1);
    });

    it('should return 10 when search for number 50000', function () {
        expect(search(list, 50000)).to.equal(10);
    });

    it('should return null when search for not present number', function () {
        expect(search(list, 666)).to.equal(null);
    });

    it('should return null when search in empty list', function () {
        expect(search(emptyList, 666)).to.equal(null);
    });

    it('should return 0 when search in singleton list', function () {
        expect(search(singletonList, 12)).to.equal(0);
    });

});