const toTree = require('../../lib/tree/parse_tree').toTree;
const evaluate = require('../../lib/tree/parse_tree').evaluate;
const isNumber = require('../../lib/tree/parse_tree').isNumber;
const isOperator = require('../../lib/tree/parse_tree').isOperator;

const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const chaiExclude = require('chai-exclude');
chai.use(chaiExclude);


describe('Parse tree', () => {

    it('should parse and evaluate ( 1 + 2 )', () => {
        const actual = toTree("( 1 + 2 )");
        const expected = {
            left: {value: 1},
            right: {value: 2},
            value: "+"
        };
        assert.deepEqualExcludingEvery(actual, expected, 'root');
        expect(evaluate(actual)).to.eql(3);
    });

    it('should parse and evaluate ( ( 1 + 2 ) * ( 3 + 4 ) )', () => {
        const actual = toTree("( ( 1 + 2 ) * ( 3 + 4 ) )");
        const expected = {
            left: {
                left: {value: 1},
                right: {value: 2},
                value: "+"
            },
            right: {
                left: {value: 3},
                right: {value: 4},
                value: "+"
            },
            value: "*"
        };
        assert.deepEqualExcludingEvery(actual, expected, 'root');
        expect(evaluate(actual)).to.eql(21);
    });

    it('should parse and evaluate ( 2 * ( 4 + 7 ) )', () => {
        const actual = toTree("( 2 * ( 4 + 7 ) )");
        const expected = {
            left: {
                value: 2
            },
            right: {
                left: {value: 4},
                right: {value: 7},
                value: "+"
            },
            value: "*"
        };
        assert.deepEqualExcludingEvery(actual, expected, 'root');
        expect(evaluate(actual)).to.eql(22);
    });

});

describe('Parse tree isNumber', () => {

    it('should return true for numbers', () => {
        expect(isNumber("1")).to.eql(true);
        expect(isNumber("0")).to.eql(true);
        expect(isNumber("15")).to.eql(true);
        expect(isNumber("-100")).to.eql(true);
    });

    it('should return false for non-numbers', () => {
        expect(isNumber("a")).to.eql(false);
        expect(isNumber("&")).to.eql(false);
        expect(isNumber("}")).to.eql(false);
        expect(isNumber("VVV")).to.eql(false);
    });

});

describe('Parse tree isOperator', () => {

    it('should return true for operators', () => {
        expect(isOperator("+")).to.eql(true);
        expect(isOperator("-")).to.eql(true);
        expect(isOperator("*")).to.eql(true);
        expect(isOperator("/")).to.eql(true);
    });

    it('should return false for non-operators', () => {
        expect(isOperator("a")).to.eql(false);
        expect(isOperator("&")).to.eql(false);
        expect(isOperator("}")).to.eql(false);
        expect(isOperator("VVV")).to.eql(false);
    });

});
