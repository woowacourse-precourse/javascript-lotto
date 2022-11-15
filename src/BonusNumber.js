const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const { MESSAGE, LOTTO } = require("./constant");

class BonusNumber {
  constructor(number, winningNumbers) {
    this.validate(number, winningNumbers);
    this.number = Number(number);
  }

  validate(number, winningNumbers) {
    const isNumber = new RegExp("[^0-9]", "g");
    if (isNumber.test(number)) {
      throw new Error(MESSAGE.ERROR.NUMBER_RANGE);
    }

    const bonusNumber = Number(number);
    if (bonusNumber < 1 || bonusNumber > 45 || Math.floor(bonusNumber) !== bonusNumber) {
      throw new Error(MESSAGE.ERROR.NUMBER_RANGE);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(MESSAGE.ERROR.BONUS_DUPLICATE);
    }
  }
}

module.exports = BonusNumber;
