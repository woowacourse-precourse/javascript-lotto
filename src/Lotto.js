const { REQUIRE, PRIZE, ERROR_TEXT } = require('./Constant');
const Exception = require('./Exception');

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
    const exception = new Exception();
    exception.length(numbers);
    numbers.forEach((number) => {
      exception.range(number);
    });
    exception.deduplication(numbers);
  }

  bonusExecption(number) {
    if (this.#numbers.includes(number))
      throw new Error(ERROR_TEXT.DUPLICATE_WINNING);
    new Exception().range(number);
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
    if (this.winningCount === REQUIRE.FIRST) return (this.firstCount += 1);
    if (
      this.winningCount === REQUIRE.SECOND &&
      publish.includes(this.bonusNumber)
    )
      return (this.secondCount += 1);
    if (this.winningCount === REQUIRE.THIRD) return (this.thirdCount += 1);
    if (this.winningCount === REQUIRE.FOURTH) return (this.fourthCount += 1);
    if (this.winningCount === REQUIRE.FIFTH) return (this.fifthCount += 1);
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
