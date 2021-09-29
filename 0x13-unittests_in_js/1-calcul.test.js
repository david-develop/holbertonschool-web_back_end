const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should round a and b and return the sum', () => {
    assert.deepStrictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should round a and b and return the sum', () => {
    assert.deepStrictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should round a and b and return the sum', () => {
    assert.deepStrictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should round a and b and return the sum', () => {
    assert.deepStrictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
