const { Console } = require('@woowacourse/mission-utils');

const LOTTO_PRICE = {
  0: 0,
  1: 0,
  2: 0,
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  bonus: 30000000,
};

class LottoResult {
  constructor() {
    this.result = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
      rate: 0,
      profit: 0,
    };
  }

  print(winningNumber, lotteries, money) {
    this.calculateMatching(winningNumber, lotteries);
    this.calculateRate(money);
    this.printResult();
  }

  calculateMatching(winningNumber, lotteries) {
    lotteries.forEach((lottoNumbers) => {
      const matchingCount = LottoResult.countMatching(winningNumber, lottoNumbers);
      this.result[matchingCount] += 1;
      this.result.profit += LOTTO_PRICE[matchingCount];
    });
  }

  static countMatching({ main, bonus }, lottoNumbers) {
    const lottoNumbersSet = new Set(lottoNumbers);
    const count = main.filter((number) => lottoNumbersSet.has(number)).length;
    return count === 5 ? LottoResult.checkBonus(bonus, lottoNumbersSet) : count;
  }

  static checkBonus(bonus, lottoNumbers) {
    return lottoNumbers.has(bonus) ? 'bonus' : 5;
  }

  calculateRate(money) {
    this.result.rate = ((this.result.profit / money) * 100).toFixed(1);
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.result[3]}개
4개 일치 (50,000원) - ${this.result[4]}개
5개 일치 (1,500,000원) - ${this.result[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.bonus}개
6개 일치 (2,000,000,000원) - ${this.result[6]}개
총 수익률은 ${this.result.rate}%입니다.`);
    Console.close();
  }
}

module.exports = LottoResult;
