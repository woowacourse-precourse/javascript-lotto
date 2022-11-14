const { Random, Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(userInputWinNumbers) {
    this.validate(userInputWinNumbers);
    this.#numbers = userInputWinNumbers;
    this.bonusNumber;
    this.lottoBundle;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error("[ERROR] 중복된 숫자가 없어야 합니다.");
    }
  }

  makeSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((num1, num2) => num1 - num2);
  }

  bundleCreate(lottoCount) {
    this.lottoBundle = Array.from({ length: lottoCount }, this.makeSixNumbers);
    return this.lottoBundle;
  }

  getBonusNumber(UserInputBonusNumber) {
    this.bonusNumber = UserInputBonusNumber;
  }
}

module.exports = Lotto;