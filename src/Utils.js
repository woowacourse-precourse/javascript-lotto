const { Random } = require("@woowacourse/mission-utils");

class Utils {
  isBlank(input) {
    return !input;
  }

  isNumber(input) {
    return !isNaN(input);
  }

  isThousandUnit(input) {
    return (input % 1000 === 0);
  }

  isPositive(input) {
    return (input >= 0);
  }

  isValidLottoNumber = (number) => {
    return (
      Number(number) >= 1 &&
      Number(number) <= 45 &&
      Number(number) % 1 === 0 &&
      this.isNumber(number)
    );
  }

  randomSelectWithoutOverlap() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return [...randomNumbers].join(',').split(',').sort((a, b) => a - b);
  }

  throwError(comment) {
    throw new Error(comment);
  }
}

module.exports = Utils;