const sort = require('../lib/selection_sort');
const expect = require("chai").expect;

describe('Selection Sort', () => {
        it('should sort empty list', () => {
            expect(sort([])).to.eql([]);
        });

        it('should sort list', () => {
            expect(sort([3, 2, 1])).to.eql([1, 2, 3]);
        });

        it('should sort list with duplicates', () => {
            expect(sort([3, 2, 3])).to.eql([2, 3, 3]);
        });

    }
);
