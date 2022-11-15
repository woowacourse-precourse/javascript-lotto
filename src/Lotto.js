const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO } = require("./lib/constants");
const Validator = require("./Validator");
class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.lottoNumbers(numbers);
    this.#numbers = numbers;
  }

  static generateNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN,
      LOTTO.MAX,
      LOTTO.COUNT
    );

    return numbers.sort((a, b) => a - b);
  }

  static draw(lotto) {
    const { numbers, winNumbers, bonusNumber } = lotto;
    let result = 0;

    winNumbers.forEach((number) => numbers.includes(number) && (result += 1));

    result === 5 && numbers.includes(bonusNumber) && (result = "BONUS");

    return result;
  }

  static purchase(amount) {
    const TOTAL = amount / LOTTO.PRICE;

    return Array(TOTAL)
      .fill("lotto")
      .map(() => new Lotto(this.generateNumbers()));
  }

  static setWinNumbers(winNumbers) {
    Lotto.prototype.winNumbers = winNumbers;
  }

  static setBonusNumber(bonusNumber) {
    Lotto.prototype.bonusNumber = bonusNumber;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
