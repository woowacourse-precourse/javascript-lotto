const { Random } = require('@woowacourse/mission-utils');

class LottoIssuer {
  issue(money) {
    const numberOfLottoes = this.calculateNumberOfLottoes(money);
    const lottoes = this.generateLottoes(numberOfLottoes);

    return lottoes;
  }

  calculateNumberOfLottoes(money) {
    return money / 1000;
  }

  generateLottoes(numberOfLottoes) {
    const lottoes = [];

    for (let i = 0; i < numberOfLottoes; i++) {
      lottoes.push(this.generateLottoNumbers());
    }

    return lottoes;
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort(this.compareNumbers);
  }

  compareNumbers(a, b) {
    return a - b;
  }
}

module.exports = LottoIssuer;
