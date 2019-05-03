const traverse = require('../../lib/tree/inorder_traversal_tree').traverse;
const expect = require("chai").expect;

describe('Inorder traverse tree', () => {

    it('should traverse the tree', () => {
        const tree = {
            l: {
                l: {v: 'c'},
                r: {
                    l: {v: 'e'},
                    r: {v: 'f'},
                    v: 'd'
                },
                v: 'b'
            },
            r: {
                l: {v: 'h'},
                r: {
                    l: {v: 'j'},
                    r: {v: 'k'},
                    v: 'i'
                },
                v: 'g'
            },
            v: 'a'
        };

        expect(traverse(tree)).to.eql([
            'c', 'b', 'e', 'd', 'f', 'a', 'h', 'g', 'j', 'i', 'k'
        ]);
    });

});
