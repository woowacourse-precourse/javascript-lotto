const { LOTTO, ALERT} = require('./Const.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ALERT.HEADER+ALERT.LOTTO_LENGTH);
    }
    
    if ((new Set([...numbers])).size !== LOTTO.LENGTH) {
      throw new Error(ALERT.HEADER+ALERT.LOTTO_UNIQUE);
    }

    for(let elem of numbers) {
      if(isNaN(elem) || !Number.isInteger(elem)) {
        throw new Error(ALERT.HEADER+ALERT.LOTTO_INT);
      }
    }
    
    for(let elem of numbers) {
      if(LOTTO.RANGE_LEFT > elem || elem > LOTTO.RANGE_RIGHT) {
        throw new Error(ALERT.HEADER+ALERT.LOTTO_RANGE);
      }
    }

  }

  getLottoNums() {
    return this.#numbers;
  }
}

module.exports = Lotto;
