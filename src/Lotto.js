const { NUMBER, ERROR } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== NUMBER.LOTTO) {
      throw new Error(ERROR.LOTTO_COUNT);
    }

    if (new Set(numbers).size !== NUMBER.LOTTO){
      throw new Error(ERROR.LOTTO_OVERLAP);
    }
    
    numbers.map((number) => {
      if (/[^0-9]/g.test(number)){
        throw new Error(ERROR.LOTTO_NUMBER);
      }

      if (number < 1 || number > 45) {
        throw new Error(ERROR.LOTTO_RANGE);
      }
    });
  }

  setBonus(number){
    this.validateBonus(number);
    this.#numbers.push(number);
  }

  validateBonus(number) {
    if (/[^0-9]/g.test(number)){
      throw new Error(ERROR.BONUS_NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.BONUS_RANGE);
    }

    if (this.#numbers.includes(number)){
      throw new Error(ERROR.BONUS_OVERLAP)
    }
  }
  
  getLotto() {
    return this.#numbers;
  }

}

module.exports = Lotto;
