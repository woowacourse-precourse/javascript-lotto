const { Random } = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const { LOTT0_MESSAGE } = require("./../utils/Constant");
const LottoNumbers = require("./LottoNumber");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  start() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(LOTT0_MESSAGE.INPUT, (money) => {
      Console.print(money);
    });
  }
}

module.exports = Lotto;
