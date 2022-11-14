const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const { PRIZE } = require('./constants/prize');

class Machine {
  static publishLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
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
