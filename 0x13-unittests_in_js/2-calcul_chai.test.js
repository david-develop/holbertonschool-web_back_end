const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect

describe('calculateNumber', () => {
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should round a and b and return by the type', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
