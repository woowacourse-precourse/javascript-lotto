const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
class LottoIssuer {
  constructor(number) {
    this.lotteries = [];
    this.number = number;
  }

  issue() {
    let count = 0;
    while (count < this.number) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotteries.push(lottoNumbers);
      count += 1;
    }
  }

  print() {
    Console.print(`\n${this.number}${MESSAGE.numberOfPurchase}`);
    this.lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  getLotteries() {
    return this.lotteries;
  }
}

module.exports = LottoIssuer;
