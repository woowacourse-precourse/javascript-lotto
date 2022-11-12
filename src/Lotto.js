const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLottoNumbers(numbers);
    this.#numbers = numbers.map(Number);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getRanking(winningLotto) {
    const matchCount = winningLotto.get('당첨 번호').reduce((acc, cur) => {
      if (this.#numbers.includes(cur)) return acc + 1;
      return acc;
    }, 0);

    if (matchCount === 6) return 1;
    if (matchCount === 5 && this.#numbers.includes(winningLotto.get('보너스 번호'))) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
  }
}

module.exports = Lotto;
