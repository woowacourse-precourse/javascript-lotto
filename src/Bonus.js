const LottoNumberError = require('./Constants/Messages');
class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.number = number;
  }

  validate(number) {
    if (number < 1 || number > 45) {
      throw new Error(LottoNumberError.NOT_VALID_NUMBER_SCOPE);
    }
  }
}

module.exports = Bonus;
