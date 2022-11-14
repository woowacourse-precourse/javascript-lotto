const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
  #countLotto;

  constructor(numbers) {
    // this.validate(numbers);
    this.#countLotto = 0;
  }

  thorwError(message) {
    throw new Error(message);
  }

  validate(inputMoney) {
    if (
      this.isBlank(inputMoney) ||
      !this.isNumber(inputMoney) ||
      !this.isThousandUnit(inputMoney)
    ) {
      return this.thorwError(
        '[ERROR] 일단은 통합한 오류 입력금액을 다시 적으세요.'
      );
    }
    return true;
  }

  isBlank(input) {
    return !input;
  }

  isNumber(input) {
    return !isNaN(input);
  }

  isThousandUnit(input) {
    return input % 1000 === 0;
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (inputMoney) => {
      this.validate(inputMoney);
      this.#countLotto = Number(inputMoney) / 1000;
      Console.close();
    });
  }

  play() {
    this.inputMoney();
  }
}

module.exports = Lotto;
