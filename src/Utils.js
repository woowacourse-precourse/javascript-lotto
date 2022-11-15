const { ERROR_MESSAGE } = require("./Constants");
const { Random } = require("@woowacourse/mission-utils");

module.exports = {
  Check: {
    wrongInput(userInput, errorHandler, errorMessage) {
      const isWrongInput = errorHandler(userInput);
      if (isWrongInput) throw new Error(errorMessage);
    },

    bonusNumberDuplicated(winningNumbers, bonusNumber, errorHandler) {
      const isDuplicated = errorHandler(winningNumbers, bonusNumber);

      if (isDuplicated) throw new Error(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
    },
  },

  Format: {
    winningNumbers(winningNumbers) {
      return winningNumbers
        .split(" ")
        .join("")
        .split(",")
        .map((number) => parseInt(number));
    },
  },

  Process: {
    winningNumbersInput(input) {
      return input
        .split(" ")
        .join("")
        .split(",")
        .map((number) => parseInt(number))
        .filter((number) => !isNaN(number))
        .filter((number) => number >= 1 && number <= 45)
        .filter((number) => number === Math.floor(number));
    },
  },

  Create: {
    randomNumbers() {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    },
  },
};
