const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Two integers', () => {
    assert.deepStrictEqual(calculateNumber(1, 3), 4);
  });
  it('Integer and float', () => {
    assert.deepStrictEqual(calculateNumber(1, 3.7), 5);
  });
  it('Foalt and float', () => {
    assert.deepStrictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('Foalt and float', () => {
    assert.deepStrictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('Foalt and integer', () => {
    assert.deepStrictEqual(calculateNumber(3.7, 1), 5);
  });
});
