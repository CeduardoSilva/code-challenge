const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require('sinon').createSandbox();

chai.use(chaiAsPromised);
chai.should();

describe('Tests all Validate scenarios', () => {

    beforeEach( () => {
        //sandbox.stub(service, 'functionName').returns(false);
    });
    afterEach(() => {
        sandbox.restore()
    });
    it('should return true', (done) => {
        testing().should.eventually.become(true).and.notify(done);
    });
});

function testing() {
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}