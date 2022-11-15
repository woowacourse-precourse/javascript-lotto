const { validateLottoRange } = require('../../utils/method');

class Bonus {
  #number;

  constructor(number) {
    this.#number = validateLottoRange(number);
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = Bonus;
