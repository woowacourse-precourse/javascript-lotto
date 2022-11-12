const { Console } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./Constants');
const Lotto = require('./Lotto');

class Statistics {
  ranking1 = 0;
  ranking2 = 0;
  ranking3 = 0;
  ranking4 = 0;
  ranking5 = 0;

  constructor() {
    this.lotto = new Lotto();
  }

  getRanking(lottoList, winning, bonus) {
    for (let i = 0; i < lottoList.length; i++) {
      const numbers = lottoList[i];
      const result = this.lotto.checkLotto(numbers, winning, bonus);
      switch (result) {
        case 'Ranking1':
          this.ranking1 += 1;
          break;
        case 'Ranking2':
          this.ranking2 += 1;
          break;
        case 'Ranking3':
          this.ranking3 += 1;
          break;
        case 'Ranking4':
          this.ranking4 += 1;
          break;
        case 'Ranking5':
          this.ranking5 += 1;
          break;
      }
    }
    this.printResult(lottoList.length);
  }

  printResult(amount) {
    const PRIZE_MONEY_1 = this.ranking1 * 2000000000;
    const PRIZE_MONEY_2 = this.ranking2 * 30000000;
    const PRIZE_MONEY_3 = this.ranking3 * 1500000;
    const PRIZE_MONEY_4 = this.ranking4 * 50000;
    const PRIZE_MONEY_5 = this.ranking5 * 5000;
    const YIELD =
      (PRIZE_MONEY_1 +
        PRIZE_MONEY_2 +
        PRIZE_MONEY_3 +
        PRIZE_MONEY_3 +
        PRIZE_MONEY_4 +
        PRIZE_MONEY_5) /
      (amount * LOTTO.PRICE);
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.ranking5}개`);
    Console.print(`4개 일치 (50,000원) - ${this.ranking4}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.ranking3}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.ranking2}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.ranking1}개`);
    Console.print(`총 수익률은 ${YIELD.toFixed(2)}%입니다.`);
    Console.close();
  }
}

module.exports = Statistics;
