const MissionUtils = require('@woowacourse/mission-utils');
const { isNotDuplicated } = require('./Validator');
const Console = MissionUtils.Console;
const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
console.log(randomNums);

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
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

  // TODO: 추가 기능 구현
}

const lotto = new Lotto(randomNums);
module.exports = Lotto;
