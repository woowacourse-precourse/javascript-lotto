const validate = require("./validation/validation");

class Purchase {
  constructor(input) {
    this.validate(input);
  }

  validate(input) {
    validate.moneyInput(input);
  }
}

module.exports = Purchase;
