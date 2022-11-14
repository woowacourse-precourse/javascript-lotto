const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_PRICE, NUMBER_RANGE, LOTTO_DIGITS } = require('./Constants');

class LottoIssuer {
  issue(money) {
    const numberOfLottoes = this.calculateNumberOfLottoes(money);
    const lottoes = this.generateLottoes(numberOfLottoes);

    return lottoes;
  }

  calculateNumberOfLottoes(money) {
    return money / LOTTO_PRICE;
  }

  generateLottoes(numberOfLottoes) {
    const lottoes = [];

    for (let i = 0; i < numberOfLottoes; i++) {
      lottoes.push(this.generateLottoNumbers());
    }

    return lottoes;
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      NUMBER_RANGE.lower,
      NUMBER_RANGE.upper,
      LOTTO_DIGITS
    ).sort(this.compareNumbers);
  }

  compareNumbers(a, b) {
    return a - b;
  }
}

module.exports = LottoIssuer;
