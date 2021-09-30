const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('Express app', () => {
  it('Test code status', (done) => {
    request.get(url, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done()
    });
  });
  it('output', (done) => {
    request.get(url, function (err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done()
    });
  });
});