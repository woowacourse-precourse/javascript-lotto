const { Console } = require("@woowacourse/mission-utils");
const ValidateLotto = require("./validation/ValidateLotto");
const Bonus = require("./components/Bonus");

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

      const bonus = new Bonus(this.#numbers, bonusNumber, lotteries);
      bonus.iterateLotteries();
    });
  }
}

module.exports = Lotto;
