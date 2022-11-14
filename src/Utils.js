const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_INFO_VALUES, INITIALIZE_VALUES } = require("./Constant");

class Utils {
  isBlank = (input) => !input;

  isNumber = (input) => !isNaN(input);

  isThousandUnit = (input) => (input % LOTTO_INFO_VALUES.LOTTO_COST === 0);

  isPositive = (input) => (input >= 0);

  isNaturalNumber = (input) => (input % 1 === 0);

  isValidLottoNumber = (number) => {
    return (
      Number(number) >= LOTTO_INFO_VALUES.MIN_LOTTO_NUMBER &&
      Number(number) <= LOTTO_INFO_VALUES.MAX_LOTTO_NUMBER &&
      this.isNaturalNumber(number) &&
      this.isNumber(number)
    );
  }

  randomSelectWithoutOverlap() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_INFO_VALUES.MIN_LOTTO_NUMBER,
      LOTTO_INFO_VALUES.MAX_LOTTO_NUMBER,
      LOTTO_INFO_VALUES.NUMBER_OF_WINNING_NUMBER
    );
    return [...randomNumbers]
      .join(INITIALIZE_VALUES.SPLIT_CHAR)
      .split(INITIALIZE_VALUES.SPLIT_CHAR)
      .sort((a, b) => a - b);
  }

  throwError(comment) {
    throw new Error(comment);
  }
}

module.exports = Utils;