const { Console, Random } = require('@woowacourse/mission-utils');
const { RESULT_MESSAGE } = require('./Constants');

class LottoIssuer {
  #lotteries;

  #number;

  constructor(number) {
    this.#number = number;
    this.#lotteries = LottoIssuer.issue(number);
  }

  static issue(number) {
    return [...new Array(number)].map(() => Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  print() {
    Console.print(RESULT_MESSAGE.purchase(this.#number));
    this.#lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  getLotteries() {
    return this.#lotteries;
  }
}

module.exports = LottoIssuer;
