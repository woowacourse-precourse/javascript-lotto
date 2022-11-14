const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  // #numbers;

  // constructor(numbers) {
  //   this.validate(numbers);
  //   this.#numbers = numbers;
  // }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (inputMoney) => {
      this.validate(inputMoney);
      Console.close();
    });
  }

  play() {
    this.inputMoney();
  }

  thorwError(c) {
    throw new Error(c);
  }

  validate(inputMoney) {
    if (
      this.isBlank(inputMoney) ||
      !this.isNumber(inputMoney) ||
      !this.isThousandUnit(inputMoney)
    ) {
      return this.thorwError('[ERROR] 일단은 통합한 오류.');
    }
    return true;
  }

  isBlank(number) {
    return number.length !== 6;
  }

  isNumber(number) {
    return !isNaN(number);
  }

  isThousandUnit(number) {
    return number % 1000 === 0;
  }
}

module.exports = Lotto;
