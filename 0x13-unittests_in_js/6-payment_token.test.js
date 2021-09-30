const sinon = require("sinon");
const expect = require('chai').expect

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {

  it('check asynchronous code result', (done) => {
    getPaymentTokenFromAPI(true)
      .then((value) => {
        expect(value).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((e) => done(e));
  });
});
