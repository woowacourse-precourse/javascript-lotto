const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Validator = require('./Validator');
const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
console.log(randomNums);

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error();
    }
  }

  // TODO: 추가 기능 구현

  static inputHowMuchToPay() {
    Console.readLine('구입금액을 입력해 주세요.', pay => {
      if (this.isValidPayAmount(pay)) {
        Console.print(`${parseInt(pay / 1000)} 개를 구매했습니다.`);
      }
    });
  }
}

const lotto = new Lotto(randomNums);

module.exports = Lotto;
