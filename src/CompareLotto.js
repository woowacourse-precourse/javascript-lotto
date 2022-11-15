const MissionUtils = require('@woowacourse/mission-utils');
class compareLotto {
  #gradeSet;
  #countSet;

  constructor() {
    this.#countSet = [0, 0, 0, 0, 0];
    this.#gradeSet = [
      { win: 3, prize: '5,000', isBonus: false, count: 0 },
      { win: 4, prize: '50,000', isBonus: false, count: 0 },
      { win: 5, prize: '1,500,000', isBonus: false, count: 0 },
      { win: 5, prize: '30,000,000', isBonus: true, count: 0 },
      { win: 6, prize: '2,000,000,000', isBonus: false, count: 0 },
    ];
  }

  calculateWiningResult(lottoSet, winning, bonus) {
    lottoSet.forEach((lotto) => {
      const winningNum = lotto.filter((number) => winning.includes(number));
      if (winningNum.length === 3) this.#countSet[0] += 1;
      if (winningNum.length === 4) this.#countSet[1] += 1;
      if (winningNum.length === 5 && !lotto.includes(bonus)) this.#countSet[2] += 1;
      if (winningNum.length === 5 && lotto.includes(bonus)) this.#countSet[3] += 1;
      if (winningNum.length === 6) this.#countSet[4] += 1;
    });
  }

  printLottoResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');

    this.#gradeSet.forEach((grade, index) => {
      const { win, prize, isBonus } = grade;
      MissionUtils.Console.print(
        `${win}개 일치${isBonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${this.#countSet[index]}개`,
      );
      grade['count'] = this.#countSet[index];
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
    this.calculateWiningResult(lottoSet, winning, bonus);
    this.printLottoResult();
    this.calculateTotalProfit(money);
  }
}

module.exports = compareLotto;
