const { Console } = require("@woowacourse/mission-utils");
const ValidateLotto = require("./validation/ValidateLotto");
const MakeWinResult = require("./components/MakeWinResult");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    ValidateLotto(numbers);
  }

  inputBonusNumber(lotteries) {
    let bonusNumber;
    Console.readLine("\n보너스 번호를 입력해 주세요,\n", (number) => {
      bonusNumber = number;

      const makeWinResult = new MakeWinResult(
        this.#numbers,
        bonusNumber,
        lotteries
      );
      makeWinResult.iterateLotteries();
    });
  }
}

module.exports = Lotto;
