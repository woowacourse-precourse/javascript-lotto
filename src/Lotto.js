const { Random, Console } = require('@woowacourse/mission-utils');

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
  publish(quantity) {
    this.RESULT = new Object();
    for (let time = 0; time < quantity; time++) {
      let randomNumber = Random.pickUniqueNumbersInRange(1, 10, 6);
      this.RESULT[time] = randomNumber;
    }
    return this.RESULT;
  }

  publishResult() {}
}
const Lottor = new Lotto([1, 2, 3, 4, 5, 6]);
Lottor.publish(5000);
module.exports = Lotto;
