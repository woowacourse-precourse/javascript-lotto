const { ERROR, CONDITION } = require('./utils/constant');

class Validator {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  isValidateLength() {
    return this.#numbers.length === CONDITION.LOTTO_LENGTH;
  }

  isLottoValidateRange() {
    for (let number of this.#numbers) {
      if (!(CONDITION.MIN_NUMBER <= number && number <= CONDITION.MAX_NUMBER))
        return false;
    }

    return true;
  }

  isLottoDuplicate() {
    return new Set(this.#numbers).size !== this.#numbers.length;
  }

  isPurchasable() {
    return this.#numbers >= CONDITION.LOTTO_PRICE;
  }

  isDivisible() {
    return this.#numbers % CONDITION.LOTTO_PRICE === 0;
  }

  isBonusValidateRange() {
    return (
      CONDITION.MIN_NUMBER <= this.#numbers &&
      this.#numbers <= CONDITION.MAX_NUMBER
    );
  }

  isBonusDuplicate(winningNumbers) {
    return winningNumbers.includes(this.#numbers);
  }

  purchaseAmount() {
    if (!this.isPurchasable()) throw new Error(ERROR.PURCHASABLE);

    if (!this.isDivisible()) throw new Error(ERROR.DIVISIBLE);
  }

  lottoNumber() {
    if (!this.isValidateLength()) throw new Error(ERROR.LENGTH);

    if (!this.isLottoValidateRange()) throw new Error(ERROR.RANGE);

    if (this.isLottoDuplicate()) throw new Error(ERROR.DUPLICATE);
  }

  bonusNumber(winningNumbers) {
    if (!this.isBonusValidateRange()) throw new Error(ERROR.RANGE);

    if (this.isBonusDuplicate(winningNumbers)) throw new Error(ERROR.DUPLICATE);
  }
}

module.exports = Validator;
