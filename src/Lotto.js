const { PRIZE, ERROR_TEXT } = require('./Constant');
const Exception = require('./Exception');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.createCount();
  }

  validate(numbers) {
    const exception = new Exception();
    exception.length(numbers);
    numbers.forEach((number) => {
      exception.range(number);
    });
    exception.deduplication(numbers);
  }

  createCount() {
    this.firstCount = 0;
    this.secondCount = 0;
    this.thirdCount = 0;
    this.fourthCount = 0;
    this.fifthCount = 0;
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
    if (this.winningCount === PRIZE.FIRST[0]) return (this.firstCount += 1);
    if (
      this.winningCount === PRIZE.SECOND[0] &&
      publish.includes(this.bonusNumber)
    )
      return (this.secondCount += 1);
    if (this.winningCount === PRIZE.THIRD[0]) return (this.thirdCount += 1);
    if (this.winningCount === PRIZE.FOURTH[0]) return (this.fourthCount += 1);
    if (this.winningCount === PRIZE.FIFTH[0]) return (this.fifthCount += 1);
  }

  profitCalculator(payment) {
    const PROFIT =
      ((this.firstCount * PRIZE.FIRST[1] +
        this.secondCount * PRIZE.SECOND[1] +
        this.thirdCount * PRIZE.THIRD[1] +
        this.fourthCount * PRIZE.FOURTH[1] +
        this.fifthCount * PRIZE.FIFTH[1]) /
        payment) *
      100;
    return parseFloat(PROFIT.toFixed(2));
  }
}

module.exports = Lotto;
