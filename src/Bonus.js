const { ERROR } = require('./constructor.js');
const { throwErrorMessage, checkIsNumber, checkIsOutOfRange } = require('./utils.js');

class Bonus {
  #number;

  constructor(bonus, winnigNumbers) {
    this.validate(bonus, winnigNumbers);
    this.#number = parseInt(bonus);
  }

  validate(bonus, winnigNumbers) { 
    checkIsNumber(bonus);
  
    const number = parseInt(bonus);
    checkIsOutOfRange(bonus);

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