const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const { MESSAGE, LOTTO } = require("./constant");

class WinningNumber {
  constructor(numbers) {
    this.winningNumber = this.validate(numbers);
  }

  validate(numbers) {
    const winningNumber = numbers.split(",");
    const isNumber = new RegExp("[^0-9]", "g");
    this.isValidLength(winningNumber);
    this.isValidDuplicate(winningNumber);
    winningNumber.forEach((number) => {
      if (isNumber.test(number)) {
        throw new Error(MESSAGE.ERROR.NUMBER_RANGE);
      }
      if (Number(number) < 1 || Number(number) > 45 || Math.floor(Number(number)) !== Number(number)) {
        throw new Error(MESSAGE.ERROR.NUMBER_RANGE);
      }
    });
    return winningNumber.map(Number);
  }

  isValidLength(winningNumber) {
    if (winningNumber.length !== LOTTO.LENGTH) {
      throw new Error(MESSAGE.ERROR.LOTTO_LENGTH);
    }
  }

  isValidDuplicate(winningNumber) {
    if (new Set(winningNumber).size !== winningNumber.length) {
      throw new Error(MESSAGE.ERROR.NUMBER_DUPLICATE);
    }
  }
}

module.exports = WinningNumber;
