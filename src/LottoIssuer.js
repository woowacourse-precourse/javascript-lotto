const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');

class LottoIssuer {
  #lotteries;

  #number;

  constructor(number) {
    this.#number = number;
    this.#lotteries = LottoIssuer.issue(number);
  }

  static issue(number) {
    const lotteries = [];
    while (lotteries.length < number) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotteries.push(lottoNumbers);
    }
    return lotteries;
  }

  print() {
    Console.print(`\n${this.#number}${MESSAGE.numberOfPurchase}`);
    this.#lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  getLotteries() {
    return this.#lotteries;
  }
}

module.exports = LottoIssuer;
