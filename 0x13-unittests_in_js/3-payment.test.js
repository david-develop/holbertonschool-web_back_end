const sinon = require("sinon");
const expect = require('chai').expect

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Test behavior of sendPaymentRequestToApi same that Utils.calculateNumber', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const apiResponse = sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(apiResponse);

    spyUtils.restore();
  });
});

