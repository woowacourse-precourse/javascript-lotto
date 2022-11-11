const { ERROR, CONDITION } = require('./constant');

class Validator {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  isValidateLength() {
    return this.#numbers.length === CONDITION.LOTTO_LENGTH;
  }

  isValidateRange() {
    for (let number of this.#numbers) {
      if (!(CONDITION.MIN_NUMBER <= number && number <= CONDITION.MAX_NUMBER))
        return false;
    }

    return true;
  }

  isDuplicate() {
    return new Set(this.#numbers).size !== this.#numbers.length;
  }

  isPurchasable() {
    return this.#numbers >= CONDITION.LOTTO_PRICE;
  }

  isDivisible() {
    return this.#numbers % CONDITION.LOTTO_PRICE === 0;
  }

  purchaseAmountValidate() {
    console.log(this.#numbers);
    if (!this.isPurchasable()) throw new Error(ERROR.PURCHASABLE);

    if (!this.isDivisible()) throw new Error(ERROR.DIVISIBLE);
  }

  lottoNumberValidate() {
    if (!this.isValidateLength()) throw new Error(ERROR.LENGTH);

    if (!this.isValidateRange()) throw new Error(ERROR.RANGE);

    if (this.isDuplicate()) throw new Error(ERROR.DUPLICATE);
  }
}

module.exports = Validator;
