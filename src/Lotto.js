const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  // #numbers;

  // constructor(numbers) {
  //   this.validate(numbers);
  //   this.#numbers = numbers;
  // }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  throwError(comment) {
    throw new Error(comment);
  }

  isBlank(input) {
    return !input;
  }

  isNumber(input) {
    return !isNaN(input);
  }

  isThousandUnit(input) {
    return (input % 1000 === 0);
  }

  validateInputMoney(inputMoney) {
    if (this.isBlank(inputMoney) || !this.isNumber(inputMoney) || !this.isThousandUnit(inputMoney)) {
      return this.throwError("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.");
    }
    return true;
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (inputMoney) => {
      this.validateInputMoney(inputMoney);
      Console.close();
    });
  }

  play() {
    this.inputMoney();
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
