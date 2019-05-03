let sort = require('../../lib/sort/merge_sort').sort;
const expect = require("chai").expect;

describe('Merge Sort', () => {

    it('should sort elements in the list 1', () => {
        expect(sort([5, 1, 7, 3])).to.eql([1, 3, 5, 7]);
    });

    it('should sort elements in the list 2', () => {
        expect(sort([5, 4, 2, 3, 1])).to.eql([1, 2, 3, 4, 5]);
    });

    it('should sort elements in the list 3', () => {
        expect(sort([5, 9, 4, 6, 5, 3])).to.eql([3, 4, 5, 5, 6, 9]);
    });

    it('should sort elements in empty list', () => {
        expect(sort([])).to.eql([]);
    });

    it('should sort elements in singleton list', () => {
        expect(sort([3])).to.eql([3]);
    });

});
