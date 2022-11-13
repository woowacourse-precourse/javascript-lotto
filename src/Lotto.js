const { REQUIRE, PRIZE, ERROR_TEXT } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.firstCount = 0;
    this.secondCount = 0;
    this.thirdCount = 0;
    this.fourthCount = 0;
    this.fifthCount = 0;
  }

  validate(numbers) {
    const LOTTO_LENGTH = 6;
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(ERROR_TEXT.MIN_COUNT);
    }
    numbers.forEach((number) => {
      this.numberException(number);
    });
    this.deduplicationException(numbers);
  }

  numberException(number) {
    const ONLY_NUMBER = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!ONLY_NUMBER.test(number)) throw new Error(ERROR_TEXT.VALUE_BETWEEN);
  }

  deduplicationException(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== set.size) {
      throw new Error(ERROR_TEXT.DUPLICATE_VALUE);
    }
  }

  bonusExecption(number) {
    if (this.#numbers.includes(number))
      throw new Error(ERROR_TEXT.DUPLICATE_WINNING);
    this.numberException(number);
    this.bonusNumber = parseInt(number);
  }

  compare(publishResult) {
    for (let index in publishResult) {
      this.winningCount = 0;
      publishResult[index].map((publish) => {
        this.comapreResult(publish, this.#numbers);
      });
      this.compareDivision(publishResult[index]);
    }
  }

  comapreResult(publish, winning) {
    if (winning.includes(publish)) return (this.winningCount += 1);
  }

  compareDivision(publish) {
    if (this.winningCount === REQUIRE.FIRST) {
      return (this.firstCount += 1);
    }
    if (
      this.winningCount === REQUIRE.SECOND &&
      publish.includes(this.bonusNumber)
    ) {
      return (this.secondCount += 1);
    }
    if (this.winningCount === REQUIRE.THIRD) {
      return (this.thirdCount += 1);
    }
    if (this.winningCount === REQUIRE.FOURTH) {
      return (this.fourthCount += 1);
    }
    if (this.winningCount === REQUIRE.FIFTH) {
      return (this.fifthCount += 1);
    }
  }

  profitCalculator(payment) {
    const PROFIT =
      ((this.firstCount * PRIZE.FIRST +
        this.secondCount * PRIZE.SECOND +
        this.thirdCount * PRIZE.THIRD +
        this.fourthCount * PRIZE.FOURTH +
        this.fifthCount * PRIZE.FIFTH) /
        payment) *
      100;
    return parseFloat(PROFIT.toFixed(2));
  }
}

module.exports = Lotto;
