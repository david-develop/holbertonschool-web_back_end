const sinon = require("sinon");
const { expect } = require('chai')

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    expect(consoleSpy.calledOnce).to.be.true;
    consoleSpy.restore();
  });

  it('check sendPaymentRequestToApi outputs', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith(`The total is: 120`)).to.be.true;
  });
  it('check sendPaymentRequestToApi outputs', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith(`The total is: 20`)).to.be.true;
  });
});
