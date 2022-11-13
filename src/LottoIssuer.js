const { Console, Random } = require('@woowacourse/mission-utils');

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
    Console.print(`\n${this.#number}개를 구매했습니다.`);
    this.#lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  getLotteries() {
    return this.#lotteries;
  }
}

module.exports = LottoIssuer;
