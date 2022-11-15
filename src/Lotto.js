const { lottoNumberValidate } = require('./Validates');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    lottoNumberValidate(numbers);
  }

  rankLotto(winNumbers, bonusNumber) {
    const lottoNumbers = this.getNumbers();
    const isIncludeBonus = lottoNumbers.includes(bonusNumber);
    const matchCount = 12 - new Set([...lottoNumbers, ...winNumbers]).size;
    if (matchCount === 6) return 1;
    if (matchCount === 5 && isIncludeBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return -1;
  }

  setNumbers(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
