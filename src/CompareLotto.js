const MissionUtils = require('@woowacourse/mission-utils');
class compareLotto {
  #gradeSet;
  #count;

  constructor() {
    this.#count = [0, 0, 0, 0, 0];
    this.#gradeSet = [
      { win: 3, prize: '5,000', isBonus: false, count: 0 },
      { win: 4, prize: '50,000', isBonus: false, count: 0 },
      { win: 5, prize: '1,500,000', isBonus: false, count: 0 },
      { win: 5, prize: '30,000,000', isBonus: true, count: 0 },
      { win: 6, prize: '2,000,000,000', isBonus: false, count: 0 },
    ];
  }

  matchWinning(lottoSet, winning, bonus) {
    lottoSet.forEach((lotto) => {
      const matchWin = lotto.filter((number) => winning.includes(number));
      if (matchWin.length === 3) this.#count[0] += 1;
      if (matchWin.length === 4) this.#count[1] += 1;
      if (matchWin.length === 5 && !lotto.includes(bonus)) this.#count[2] += 1;
      if (matchWin.length === 5 && lotto.includes(bonus)) this.#count[3] += 1;
      if (matchWin.length === 6) this.#count[4] += 1;
    });
  }

  printResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');

    this.#gradeSet.forEach((grade, index) => {
      const { win, prize, isBonus } = grade;
      MissionUtils.Console.print(
        `${win}개 일치${isBonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${this.#count[index]}개`,
      );
      grade['count'] = this.#count[index];
    });
  }

  calculateTotalProfit(money) {
    let total = 0;
    this.#gradeSet.forEach((grade) => {
      const { prize, count } = grade;
      total += prize.replace(/\D/g, '') * count;
    });
    const profitRate = ((total / money) * 100).toFixed(1);
    this.printTotalProfit(profitRate);
  }

  printTotalProfit(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  play(lottoSet, money, winning, bonus) {
    this.matchWinning(lottoSet, winning, bonus);
    this.printResult();
    this.calculateTotalProfit(money);
  }
}

module.exports = compareLotto;
