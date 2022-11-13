const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  rank(winNumbers, bonusNumber) {
    let count = 0;
    winNumbers.forEach((winNumber) => {
      count += this.#numbers.includes(winNumber);
    });

    if (count === 6) return 1;
    if (count === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (count >= 3) return 8 - count;
    return 0;
  }
}

module.exports = Lotto;
