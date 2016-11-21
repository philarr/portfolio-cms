import { expect } from 'chai';
import jwt from 'jsonwebtoken';

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

function createJWT(username, state) {
    return jwt.sign({
        username,
        isLogged: state,
    }, 'secret');
}

function decodeJWT(string) {
    return jwt.decode(string, { complete: true });
}

describe('JWT check', () => {
    const UserToken = createJWT('user', true);

    it('should be a string', () => {
        expect(UserToken).to.be.a('string');
    });

    it('should contain username and state', () => {
        const { payload: { username, isLogged } } = decodeJWT(UserToken);
        expect(username).to.not.be.undefined;
        expect(isLogged).to.not.be.undefined;
    });
});

describe('Authentication', () => {
    it('should send jwt token if exists');
    it('should redirect to /login if response 401');
    it('should redirect to /dashboard if response 202');
});


describe('Login Page', () => {
    it('should render login form');
    it('should fill in username when jwt exists');
});

describe('Dashboard container', () => {
    it('should render title bar');
    it('should render left navigation');
    it('should render main content');
});
