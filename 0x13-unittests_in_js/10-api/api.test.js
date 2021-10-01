const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('Express app /', () => {
  it('/ ok code status', (done) => {
    request.get(url, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done()
    });
  });
  it('/ correct output', (done) => {
    request.get(url, function (err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done()
    });
  });

  describe('Express app /cart/:id', () => {
    it('ok code status', (done) => {
      request.get(`${url}/cart/5`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done()
      });
    });
    it('correct output', (done) => {
      request.get(`${url}/cart/5`, (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 5');
        done()
      });
    });
    it('status code 404', (done) => {
      request.get(`${url}/cart/asd`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done()
      });
    });
  });

  describe('Express app /available_payments', () => {
    it('[Correct status] 200', (done) => {
      request.get(`${url}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('[Correct result] object', (done) => {
      request.get(`${url}/available_payments`, (error, response, body) => {
        expect(JSON.parse(body)).to.eql({ payment_methods: { credit_cards: true, paypal: false } })
        done();
      });
    });
  });

  describe('express app POST /login', () => {
    it('[Correct status] 200', (done) => {
      const options = {
        json: { "userName": "Betty" }
      }
      request.post(`${url}/login`, options, (err, httpResponse, body) => {
        expect(httpResponse.statusCode).to.equal(200);
        done();
      });
    });
    it('[Correct result] Welcome Betty', (done) => {
      const options = {
        json: { "userName": "Betty" }
      }
      request.post(`${url}/login`, options, (err, httpResponse, body) => {
        expect(body).to.equal('Welcome Betty')
        done();
      });
    });
  });
});
