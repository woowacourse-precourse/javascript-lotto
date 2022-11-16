const { Console } = require("@woowacourse/mission-utils");
const ValidateLotto = require("./validation/ValidateLotto");
const MakeWinResult = require("./components/MakeWinResult");
const { INPUT_MSG } = require("./constants");

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
    Console.readLine(INPUT_MSG.BONUS_MSG, (number) => {
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
