const { Random, Console } = require('@woowacourse/mission-utils');
const { LOTTO_PRICE, NUMBER_RANGE, LOTTO_DIGITS } = require('./Constants');

class LottoIssuer {
  static issueLottoes(money) {
    const numberOfLottoes = LottoIssuer.calculateNumberOfLottoes(money);
    const lottoes = LottoIssuer.generateLottoes(numberOfLottoes);

    LottoIssuer.printLottoes(lottoes);

    return lottoes;
  }

  static calculateNumberOfLottoes(money) {
    return money / LOTTO_PRICE;
  }

  static generateLottoes(numberOfLottoes) {
    const lottoes = [];

    for (let i = 0; i < numberOfLottoes; i++) {
      lottoes.push(LottoIssuer.generateLottoNumbers());
    }

    return lottoes;
  }

  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      NUMBER_RANGE.lower,
      NUMBER_RANGE.upper,
      LOTTO_DIGITS
    ).sort((a, b) => a - b);
  }

  static printLottoes(lottoes) {
    Console.print(`\n${lottoes.length}개를 구매했습니다.`);
    lottoes.forEach((lotto) => {
      const lottoString = lotto.toString();
      Console.print(`[${lottoString.replace(/,/g, ', ')}]`);
    });
  }
}

module.exports = LottoIssuer;
