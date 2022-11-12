const { Console, Random } = require('@woowacourse/mission-utils');

class LottoIssuer {
  constructor() {
    this.lotteries = [];
  }

  issue(number) {
    let count = 0;
    while (count < number) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotteries.push(lottoNumbers);
      count += 1;
    }
  }

  print() {
    this.lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  getLotteries() {
    return this.lotteries;
  }
}

module.exports = LottoIssuer;
