const { Console } = require("@woowacourse/mission-utils");
const ValidateLotto = require("./ValidateLotto");
const Bonus = require("./Bonus");

class Lotto {
  #numbers;

  constructor(numbers, lotteries) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.inputBonusNumber(lotteries);
  }

  validate(numbers) {
    ValidateLotto(numbers);
  }

  inputBonusNumber(lotteries) {
    let bonusNumber;
    Console.readLine("\n보너스 번호를 입력해 주세요,\n", (number) => {
      bonusNumber = number;

      const bonus = new Bonus(this.#numbers, bonusNumber, lotteries);
      bonus.iterateLotteries();
    });
  }
}

module.exports = Lotto;
