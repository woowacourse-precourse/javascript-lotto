const { Console, Random } = require('@woowacourse/mission-utils');
const { RESULT_MESSAGE, LOTTO_RANGE, LOTTO_NUMBER } = require('./Constants');

const { min, max } = LOTTO_RANGE;

class LottoIssuer {
  #lotteries;

  #number;

  constructor(number) {
    this.#number = number;
    this.#lotteries = LottoIssuer.issue(number);
  }

  static issue(number) {
    return Array(number)
      .fill(0)
      .map(() => {
        const lottery = Random.pickUniqueNumbersInRange(min, max, LOTTO_NUMBER);
        return lottery.sort((current, next) => current - next);
      });
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
