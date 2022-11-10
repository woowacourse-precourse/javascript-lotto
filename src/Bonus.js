const { LOTTO, ERROR } = require('./constructor.js');
const { throwErrorMessage } = require('./utils.js');

class Bonus {
  #number;

  constructor(bonus, winnigNumbers) {
    this.validate(bonus, winnigNumbers);
    this.#number = parseInt(bonus);
  }

  validate(bonus, winnigNumbers) { 
    if (isNaN(bonus)) {
      return throwErrorMessage(ERROR.ONLY_NUMBER);
    }
    
    const number = parseInt(bonus);
    if (number < LOTTO.MIN || number > LOTTO.MAX) {
      return throwErrorMessage(ERROR.OUT_OF_NUMEBR_RANGE);
    }

    if (winnigNumbers.includes(number)) {
      return throwErrorMessage(ERROR.DUPLICATE_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현
  getNumber() {
    return this.#number;
  }
}

module.exports = Bonus;