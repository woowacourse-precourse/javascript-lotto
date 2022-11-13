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

    numbers.forEach((number) => {
      if (typeof number !== 'number')
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      if (number < 1 || number > 45)
        throw new Error('[ERROR] 로또 번호의 범위는 1 ~ 45여야 합니다.');
    });
  }

  // TODO: 추가 기능 구현
  printLotto() {
    MissionUtils.Console.print(this.#numbers);
  }
}

module.exports = Lotto;
