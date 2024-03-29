const sum = require('../lib/recursion').sum;
const count = require('../lib/recursion').count;
const max = require('../lib/recursion').max;
const expect = require("chai").expect;

describe('Recursion', () => {
    describe('Recursive Sum', () => {

        it('should sum elements in the list', () => {
            expect(sum([1, 2, 3])).to.eql(6);
        });

        it('should sum elements in the list 2', () => {
            expect(sum([11, 9, 8, 12, 10, 13])).to.eql(63);
        });

        it('should sum elements in singleton list', () => {
            expect(sum([11])).to.eql(11);
        });

        it('should sum elements in empty list', () => {
            expect(sum([])).to.eql(0);
        });

    });

    describe('Recursive Count', () => {

        it('should count elements in the list', () => {
            expect(count([1, 2, 3])).to.eql(3);
        });

        it('should count elements in the list 2', () => {
            expect(count([1, 2, 3, 4, 5, 6])).to.eql(6);
        });

        it('should count elements in singleton list', () => {
            expect(count([1])).to.eql(1);
        });

        it('should count elements in empty list', () => {
            expect(count([])).to.eql(0);
        });

    });

    describe('Recursive Max', () => {
        it('should find max in the list', () => {
            expect(max([1, 2, 3])).to.eql(3);
        });

        it('should find max in the list', () => {
            expect(max([10, 15, 5, 25, 50, -35])).to.eql(50);
        });

        it('should find max in singleton list', () => {
            expect(max([10])).to.eql(10);
        });

        it('should return null for empty list', () => {
            expect(max([])).to.eql(null);
        });
    })

});
