const { Console } = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  // constructor(numbers) {
  //   this.validate(numbers);
  //   this.#numbers = numbers;
  // }

  inputMoney() { 
    Console.readLine("구입금액을 입력해 주세요.\n", (inputMoney) => {
      Console.close();
    });
  }

  play () {
    this.inputMoney();
  }
  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }


}

module.exports = Lotto;

