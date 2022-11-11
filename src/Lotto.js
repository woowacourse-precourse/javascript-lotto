const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const set = new Set();
    if (numbers.length !== 6) {
      MissionUtils.Console.close();
      throw new Error(MESSAGE.LOTTO_SIZE_ERROR);
    }
    for (let number = 0; number < numbers; number += 1) {
      set.add(numbers[i]);
    }
    if (set.size !== MESSAGE.LOTTO_LENGTH) {
      MissionUtils.Console.close();
      throw new Error(MESSAGE.LOTTO_SAME_NUMBER_ERROR);
    }
  }

  // TODO: 추가 기능 구현
  pubishLotto(lottocount) {
    const randomArr = [];
    for (let count = 0; count < lottocount; count += 1) {
      randomArr.push(
        MissionUtils.Random.pickUniqueNumbersInRange(
          MESSAGE.FIRST_RANGE,
          MESSAGE.LAST_RANGE,
          MESSAGE.LOTTO_LENGTH
        )
      );
    }
    return randomArr.sort((a, b) => {
      return a - b;
    });
  }

  getWinLotto()


}

module.exports = Lotto;
