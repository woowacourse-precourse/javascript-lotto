
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  setBonusNumber(number) {
    let bonusNumber = number;
    validateBonusNumber(this.#numbers, bonusNumber);
  }

  validate(numbers) {
    validateLottoNumber(numbers);
  }
}

module.exports = Lotto;
