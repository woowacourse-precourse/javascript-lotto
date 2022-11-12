const error = require('./Constants/Messages');

class Purchase {
  constructor(number) {
    this.validate(number);
  }

  validate(number) {
    if (isNaN(number)) {
      throw new Error(error.NOT_NUMBER);
    }
    if (number < 0) {
      throw new Error(error.MINUS);
    }
    if (number % 1000 !== 0) {
      throw new Error(error.NOT_DIVIDED_BY_THOUSAND);
    }
  }
}
module.exports = Purchase;
