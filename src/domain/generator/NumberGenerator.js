const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../lotto/Lotto');
const LottoNumber = require('../lotto/LottoNumber');

const sortByNumber = (a, b) => a - b;

class NumberGenerator {
  static createRandomNumbers() {
    const { min, max } = LottoNumber.RANGE;
    const size = Lotto.SIZE;
    return Random.pickUniqueNumbersInRange(min, max, size).sort(sortByNumber);
  }
}

module.exports = NumberGenerator;
