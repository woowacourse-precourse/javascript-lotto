const { ERROR_MESSAGE } = require("./Constants");

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
};
