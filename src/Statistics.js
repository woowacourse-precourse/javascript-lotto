const { Console } = require('@woowacourse/mission-utils');
const { LOTTO, PRIZE_MONEY } = require('./Constants');
const Lotto = require('./Lotto');

class Statistics {
  ranking = [0, 0, 0, 0, 0];

  getRanking(lottoList, winning, bonus) {
    // 모든 로또 당첨 확인 후 기록
    for (let i = 0; i < lottoList.length; i++) {
      const result = this.getResult(lottoList[i], winning, bonus);
      this.ranking[result] += 1;
    }
    this.printResult(lottoList.length);
  }

  getResult(numbers, winning, bonus) {
    // 로또 당첨 확인
    const lotto = new Lotto(numbers);
    const result = lotto.checkLotto(numbers, winning, bonus);
    return result;
  }

  printResult(amount) {
    const TOTAL_PRIZE_MONEY = this.getTotalPrizeMoney();
    const YIELD = this.getYield(TOTAL_PRIZE_MONEY, amount);
    Console.print('당첨 통계');
    Console.print('---');
    // 일치하는 번호 개수, 등수별 당첨 금액, 등수별 당첨된 로또 개수, 보너스 번호 당첨 여부 전달
    Console.print(this.getResultText(3, PRIZE_MONEY.RANKING5, 4, false));
    Console.print(this.getResultText(4, PRIZE_MONEY.RANKING4, 3, false));
    Console.print(this.getResultText(5, PRIZE_MONEY.RANKING3, 2, false));
    Console.print(this.getResultText(5, PRIZE_MONEY.RANKING2, 1, true));
    Console.print(this.getResultText(6, PRIZE_MONEY.RANKING1, 0, false));
    Console.print(`총 수익률은 ${YIELD.toFixed(1)}%입니다.`);
    Console.close();
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

  getResultText(match, prizeMoney, rankingIdx, isBonus) {
    const PRIZE_MONEY_TEXT = this.getPrizeMoney(prizeMoney);
    const RANKING_NUMBER = this.ranking[rankingIdx];
    const BONUS_TEXT = isBonus ? ', 보너스 볼 일치' : '';
    return `${match}개 일치${BONUS_TEXT} ${PRIZE_MONEY_TEXT} - ${RANKING_NUMBER}개`;
  }

  getPrizeMoney(ranking) {
    return `(${ranking.toLocaleString('ko-KR')}원)`;
  }
}

module.exports = Statistics;
