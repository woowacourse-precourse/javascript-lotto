const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const { ErrorUI } = require("./Contants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (45 < numbers[i] || 1 > numbers[i]) {
        throw new Error(ErrorUI.lottoRangeError);
      }
    }
    const overlapConfirmSet = new Set(numbers);
    if (overlapConfirmSet.size !== 6) {
      throw new Error(ErrorUI.overlapError);
    }

    if (numbers.length !== 6) {
      throw new Error(ErrorUI.moneyUnitError);
    }
  }

  validateBonusNum(bonusNum) {
    if (this.#numbers.includes(Number(bonusNum)) == true) {
      throw new Error(ErrorUI.sameLottoAndBonus);
    }
  }
}

module.exports = Lotto;
