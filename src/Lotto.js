const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  pubishLotto() {
    const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(
      MESSAGE.FIRST_RANGE,
      MESSAGE.LAST_RANGE,
      MESSAGE.LOTTO_LENGTH
    );
    randomArray.sort((a, b) => {
      return a - b;
    });

    return randomArray;
  }
}

module.exports = Lotto;
