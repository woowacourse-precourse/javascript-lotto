const { Random } = require('@woowacourse/mission-utils');

class LottoIssuer {
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
