const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class Machine {
  static publishLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }
}

module.exports = Machine;
