const MissionUtils = require('@woowacourse/mission-utils');

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

  start() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요\n', (money) => {
      if (money % 1000 != 0) {
        throw new Error('[ERROR] 1,000원 단위로 나누어 떨어져야 합니다.');
      }
    });
  }
}

module.exports = Lotto;
