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
  publish(money) {}

  countLotto(money) {
    this.count = money / 1000;
    this.result();
  }

  result() {
    this.RESULT = new Object();
    for (let time = 0; time < this.count; time++) {
      let randomNumber = Random.pickUniqueNumbersInRange(1, 10, 6);
      this.RESULT[time] = randomNumber;
      console.log(time);
    }
    console.log(this.RESULT);
  }
}
const Lottor = new Lotto([1, 2, 3, 4, 5, 6]);
Lottor.countLotto(5000);
module.exports = Lotto;
