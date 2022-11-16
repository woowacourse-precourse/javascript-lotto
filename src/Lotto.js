const {
  LottoSizeException,
  DuplicatedNumberException,
  InvalidInputException,
  RangeException,
} = require('./exceptions');

class Lotto {
  #numbers;
  static PRICE = 1000;
  static SIZE = 6;
  static RANGE = [1, 45];

  /**
   * 
   * @param {number[]} numbers 
   */
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!numbers) {
      throw new LottoSizeException(Lotto.SIZE);
    }

    if (numbers.length !== Lotto.SIZE) {
      throw new LottoSizeException(Lotto.SIZE);
    }

    const set = new Set();

    for (const num of numbers) {
      this.validateNumber(num);
      set.add(num);
    }

    if (set.size !== Lotto.SIZE) {
      throw new DuplicatedNumberException();
    }
  }

  validateNumber(num) {
    if (!num) {
      throw new InvalidInputException();
    }

    if (num < 0 || num > 45) {
      throw new RangeException(Lotto.RANGE);
    }

    if (this.#numbers) {
      if (this.#numbers.indexOf(num) !== -1) {
        throw new DuplicatedNumberException();
      }
    }
  }

  // TODO: 추가 기능 구현
  stringfy() {
    const sorted = this.#numbers.sort((a, b)=>a-b);
    return '[' + sorted.join(', ') + ']'
  }

  /**
   * 
   * @param {Lotto} lotto  
   * @returns {[number, boolean]}
   */
  match(lotto) {
    let cnt = 0;
    for (const m of lotto.#numbers) {
      if (this.isMatchNumber(m)) {
        cnt++;
      }
    }

    const isMatchedBonus = false;
    return [cnt, isMatchedBonus];
  }

  isMatchNumber(num) {
    for (const n of this.#numbers) {
      if (n === num) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Lotto;
