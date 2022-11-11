const Validation = require("./Validation");

class LottoBonus {
  number;

  constructor(number) {
    this.validate(number);
    this.number = number;
  }

  validate(number) {
    Validation.validateNumberRange(number);
  }
}

module.exports = LottoBonus;
