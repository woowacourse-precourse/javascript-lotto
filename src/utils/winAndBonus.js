const { Console } = require("@woowacourse/mission-utils");
const {
  WIN_NUMBERS_MESSAGE,
  BONUS_NUMBERS_MESSAGE,
} = require("../constant/inputMessage");
const {
  validateWinNumbers,
  validateBonusNumber,
} = require("../validateNumber");

class Win {
  #winNumbers;

  inputWinNumbers(lottos) {
    Console.readLine(WIN_NUMBERS_MESSAGE, (userInput) => {
      this.#winNumbers = userInput;

      if (!validateWinNumbers(this.#winNumbers)) {
        Console.close();
      }

      bonusNumbers.inputBonusNumber(lottos);
    });
  }

  getNumbers() {
    return this.#winNumbers;
  }
}

class Bonus {
  #bonusNumbers;

  inputBonusNumber(lottos) {
    Console.readLine(BONUS_NUMBERS_MESSAGE, (userInput) => {
      this.#bonusNumbers = userInput;

      if (!validateBonusNumber(this.#bonusNumbers)) {
        Console.close();
      }
    });
  }

  getNumbers() {
    return this.#bonusNumbers;
  }
}

const winNumbers = new Win();
const bonusNumbers = new Bonus();

module.exports = {
  winNumbers,
  bonusNumbers,
};
