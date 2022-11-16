const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const { PRIZE } = require('./constants/prize');
const SETTING = require('./constants/setting');

class Machine {
  static publishLotto() {
    const { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } = SETTING;
    const numbers = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT);
    numbers.sort((a, b) => a - b);

    return new Lotto(numbers);
  }

  static judgePrize(lotto, winCount, winBonus) {
    switch (winCount) {
      case 6:
        return PRIZE.FIRST;
      case 5:
        if (lotto.hasWinBonus(winBonus)) return PRIZE.SECOND;
        return PRIZE.THIRD;
      case 4:
        return PRIZE.FOURTH;
      case 3:
        return PRIZE.FIFTH;
      default:
        return PRIZE.LOST;
    }
  }
}

module.exports = Machine;
