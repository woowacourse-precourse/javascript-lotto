const MissionUtils = require('@woowacourse/mission-utils');
const { result, money } = require('./Result');

class Calculate {
  constructor(amount, winning, bonus, lottos) {
    this.amount = amount;
    this.winning = winning;
    this.bonus = bonus;
    this.lottos = lottos;
  }

  count_number_of_wins(lotto) {
    const COUNT = lotto.reduce((count, number) => {
      if (!this.winning.includes(number)) {
        return count;
      }
      return (count += 1);
    }, 0);
    return COUNT;
  }

  check_bonus(lotto) {
    let count = 0;
    if (lotto.includes(this.bonus)) count++;
    return count;
  }

  calculate_lottos() {
    const CALCULATE = [];
    this.lottos.map(lotto => {
      const WIN_NUM = this.count_number_of_wins(lotto);
      const BONUS_CHECK = this.check_bonus(lotto);
      CALCULATE.push([WIN_NUM, BONUS_CHECK]);
    });
    return CALCULATE;
  }

  count_rank() {
    let ans = [0, 0, 0, 0, 0];
    const RESULTS = this.calculate_lottos();
    RESULTS.map(result => {
      const WIN_NUM = result[0];
      const BONUS_CHECK = result[1];
      if (WIN_NUM === 3) ans[0] += 1;
      if (WIN_NUM === 4) ans[1] += 1;
      if (WIN_NUM === 5 && BONUS_CHECK === 0) ans[2] += 1;
      if (WIN_NUM === 5 && BONUS_CHECK === 1) ans[3] += 1;
      if (WIN_NUM === 6) ans[4] += 1;
    });
    return ans;
  }

  print_result() {
    const ANS = this.count_rank();
    ANS.map((ans, i) => {
      MissionUtils.Console.print(`${result[i]} - ${ans}개`);
    });
    const RESULT = this.calculate_rate();
    MissionUtils.Console.print(`총 수익률은 ${RESULT}%입니다.`);
    return MissionUtils.Console.close();
  }

  calculate_profit() {
    const COUNT_RANK = this.count_rank();
    const PROFIT = COUNT_RANK.reduce((sum, rank, i) => {
      if (rank === 0) return sum;
      return (sum += rank * money[i]);
    }, 0);

    return PROFIT;
  }

  calculate_rate() {
    const PROFIT = this.calculate_profit();
    const ANSWER = (PROFIT / this.amount) * 100;
    const RESULT = Math.round(ANSWER * 100) / 100;
    return RESULT;
  }
}

module.exports = Calculate;
