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

  randomSelectWithoutOverlap() {
    const randomNumbers = [];
    while (randomNumbers.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (randomNumbers.includes(number) === false) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers.sort((a, b) => a - b);
  }

  throwError(comment) {
    throw new Error(comment);
  }
}

module.exports = Utils;