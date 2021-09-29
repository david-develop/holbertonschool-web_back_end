const Utils = {
  calculateNumber(type, a, b) {
    let res;
    switch (type) {
      case 'SUM': {
        res = Math.round(a) + Math.round(b);
        break
      }
      case 'SUBTRACT': {
        res = Math.round(a) - Math.round(b);
        break
      }
      case 'DIVIDE': {
        if (b === 0) {
          res = 'Error'
        } else {
          res = Math.round(a) / Math.round(b);
        }
        break
      }
    }
    return res;
  }
}

module.exports = Utils;