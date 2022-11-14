const LottoSystem = require("../src/domain/LottoSystem");
const { ERROR_MESSAGES } = require("./constants");

class Lotto extends LottoSystem {
  #numbers;

  constructor(numbers) {
    super();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers.slice(0, this.lottoLength);
  }

  get bonusNumber() {
    if (this.#numbers.length === this.lottoLength + 1) {
      return this.#numbers[this.#numbers.length - 1];
    }
    return null;
  }

  addBonusNumber(number) {
    this.checkRange(number);
    this.checkDuplication([...this.#numbers, number]);
    this.#numbers.push(number);
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplication(numbers);
    this.checkRangeNumbers(numbers);
  }

  checkLength(numbers) {
    if (numbers.length !== this.lottoLength) {
      throw new Error(ERROR_MESSAGES.LOTTO_LENGTH);
    }
  }

  checkDuplication(numbers) {
    const numberSet = new Set(numbers);
    if ([...numberSet].length !== numbers.length) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATION);
    }
  }

  checkRangeNumbers(numbers) {
    numbers.forEach(this.checkRange.bind(this));
  }

  checkRange(number) {
    if (
      typeof number !== "number" ||
      Number.isNaN(Number(number)) ||
      number < this.minNumber ||
      number > this.maxNumber
    ) {
      throw new Error(ERROR_MESSAGES.LOTTO_LENGTH);
    }
  }
}

module.exports = Lotto;
