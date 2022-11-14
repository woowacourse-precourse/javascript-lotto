const { validateLotto } = require('../src/utils/validations');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateLotto(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

class WinningLotto {
  constructor() {
    this.lotto;
    this.bonusNum;
  }

  setBonusNum(bonusNum) {
    this.bonusNum = bonusNum;
  }

  setLotto(lotto) {
    this.lotto = lotto;
    const lottoClass = new Lotto(lotto);
  }
}

module.exports = WinningLotto;
