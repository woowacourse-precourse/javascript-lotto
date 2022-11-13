const MissionUtils = require('@woowacourse/mission-utils');

const Console = MissionUtils.Console;
const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    ``;
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
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

  static isNumber(target) {
    if (typeof Number(target) === 'number') {
      return true;
    }
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  static isValidPayAmount(cost) {
    if (this.isNumber(cost) && cost >= 1000) {
      return true;
    }
    throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
  }
}

module.exports = Lotto;
