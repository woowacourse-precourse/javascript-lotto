const { Console } = require('@woowacourse/mission-utils');
const { LOTTO, PRIZE_MONEY } = require('./Constants');
const Lotto = require('./Lotto');

class Statistics {
  ranking = [0, 0, 0, 0, 0];

  getResult(numbers, winning, bonus) {
    const lotto = new Lotto(numbers);
    const result = lotto.checkLotto(numbers, winning, bonus);
    return result;
  }

  getRanking(lottoList, winning, bonus) {
    for (let i = 0; i < lottoList.length; i++) {
      const result = this.getResult(lottoList[i], winning, bonus);
      this.ranking[result] += 1;
    }
    this.printResult(lottoList.length);
  }

  getTotalPrizeMoney() {
    const ranking1 = this.ranking[0] * PRIZE_MONEY.RANKING1;
    const ranking2 = this.ranking[1] * PRIZE_MONEY.RANKING2;
    const ranking3 = this.ranking[2] * PRIZE_MONEY.RANKING3;
    const ranking4 = this.ranking[3] * PRIZE_MONEY.RANKING4;
    const ranking5 = this.ranking[4] * PRIZE_MONEY.RANKING5;
    return ranking1 + ranking2 + ranking3 + ranking4 + ranking5;
  }

  getYield(totalPrizeMoney, amount) {
    const PURCHASE_AMOUNT = amount * LOTTO.PRICE;
    return (totalPrizeMoney / PURCHASE_AMOUNT) * 100;
  }

  printResult(amount) {
    const TOTAL_PRIZE_MONEY = this.getTotalPrizeMoney();
    const YIELD = this.getYield(TOTAL_PRIZE_MONEY, amount);
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.ranking[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.ranking[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.ranking[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.ranking[1]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.ranking[0]}개`);
    Console.print(`총 수익률은 ${YIELD.toFixed(1)}%입니다.`);
    Console.close();
  }
}

module.exports = Statistics;
