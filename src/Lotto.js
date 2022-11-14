const MissionUtils = require('@woowacourse/mission-utils');
const { isNotDuplicated, isNotExceedAmount } = require('./Validator');
const Console = MissionUtils.Console;
const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(
      numbers,
      isNotExceedAmount(numbers),
      isNotDuplicated(numbers),
    );
    this.#numbers = numbers;
  }

  static validate = (...func) => {
    func.reduce((acc, cur) => {
      if (acc) return cur;
    });
  };

  static makeIntArray = input => {
    return input.split(',').map(x => Number(x));
  };

  static lottoGenerator = () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
  };

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
