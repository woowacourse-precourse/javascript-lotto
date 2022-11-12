const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, Message } = require('./Config');

const randomLotto = function getRandomLottoNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LottoConfig.MIN_NUMBER,
    LottoConfig.MAX_NUMBER,
    LottoConfig.NUMBERS,
  );
};

class Lotto {
  #numbers;

  constructor(numbers = randomLotto()) {
    this.validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
