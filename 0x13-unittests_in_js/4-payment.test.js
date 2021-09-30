const sinon = require("sinon");
const { expect } = require('chai')

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Test behavior of sendPaymentRequestToApi same that Utils.calculateNumber', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyConsole = sinon.spy(console, 'log');
    const apiResponse = sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(apiResponse);

    stubUtils.restore();
    spyConsole.restore();
  });
});
