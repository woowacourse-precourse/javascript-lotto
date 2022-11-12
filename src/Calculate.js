const MissionUtils = require('@woowacourse/mission-utils');
const { result, money } = require('./Result');

class Calculate {
  constructor(amount, winning, bonus, lottos) {
    this.amount = amount;
    this.winning = winning;
    this.bonus = bonus;
    this.lottos = lottos;
  }

  //   lottos에 있는 lotto 번호 하나씩 보기
  // lotto 번호의 요소가 winning에 있다면 count 증가
  //하나의 로또에 대한 winning 당첨 갯수
  count_number_of_wins(winning, lotto) {
    const COUNT = lotto.reduce((count, number) => {
      if (!winning.includes(number)) {
        return count;
      }
      return (count += 1);
    }, 0);
    return COUNT;
  }

  check_bonus(bonus, lotto) {
    let count = 0;
    if (lotto.includes(bonus)) count++;
    return count;
  }
}

module.exports = Calculate;

const calculate = new Calculate();
