let sort = require('../lib/bubble_sort').sort;
const expect = require("chai").expect;

describe('Bubble Sort', function () {

    it('should sort elements in the list', function () {
        expect(sort([1, 5, 3, 7])).to.eql([1, 3, 5, 7]);
    });

    it('should sort elements in the list', function () {
        expect(sort([5, 4, 2, 3, 1])).to.eql([1, 2, 3, 4, 5]);
    });

    it('should sort elements in empty list', function () {
        expect(sort([])).to.eql([]);
    });

    it('should sort elements in singleton list', function () {
        expect(sort([3])).to.eql([3]);
    });

});
