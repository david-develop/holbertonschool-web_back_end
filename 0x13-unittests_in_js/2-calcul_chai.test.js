const expect = require('chai').expect
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('SUM Two integers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('SUM Integer and float', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('SUM Foalt and float', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('SUM Foalt and float', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('SUM Foalt and integer', () => {
    expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
  });
  it('SUBTRACT Foalt and float', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('DIVIDE Foalt and float', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('DIVIDE Foalt and float', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
