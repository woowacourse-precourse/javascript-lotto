const GameUtils = require('./GameUtils');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = Validator.lottoValidCheck(numbers);    
  }
  getWinningLotto() {
    return this.#numbers;
  }
}
module.exports = Lotto;
