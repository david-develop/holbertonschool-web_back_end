const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('SUM Two integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('SUM Integer and float', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('SUM Foalt and float', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('SUM Foalt and float', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('SUM Foalt and integer', () => {
    assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
  });
  it('SUBTRACT Foalt and float', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('DIVIDE Foalt and float', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('DIVIDE Foalt and float', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
