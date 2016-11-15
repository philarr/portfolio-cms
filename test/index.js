import { expect } from 'chai';

describe('ES6 environment check', () => {
    it('should give the correct array spread', () => {
        const a = [1, 2, 3];
        expect([...a][0]).to.equal(a[0]);
    });

    it('should give the correct object destructuring', () => {
        const { a, b: B, c: C } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        expect(a).to.equal(1);
        expect(B).to.equal(2);
        expect(C).to.equal(3);
    });

    it('should give the correct object spread', () => {
        const a = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        const b = { ...a };
        expect(a.a).to.equal(b.a);
    });
});

