const { lottoNumberError } = require('./Constants/ErrorMessages');
class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.number = number;
  }

  validate(number) {
    if (number < 1 || number > 45) {
      throw new Error(lottoNumberError.NOT_VALID_NUMBER_SCOPE);
    }
  }
}

module.exports = Bonus;
