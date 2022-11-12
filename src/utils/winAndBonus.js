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
      if (!validateWinNumbers(userInput)) {
        Console.close();
      }

      this.#winNumbers = userInput.split(",").map(Number);

      bonusNumbers.inputBonusNumber(lottos, this.#winNumbers);
    });
  }

  getNumbers() {
    return this.#winNumbers;
  }
}

class Bonus {
  #bonusNumbers;

  inputBonusNumber(lottos, winLottos) {
    Console.readLine(BONUS_NUMBERS_MESSAGE, (userInput) => {
      if (!validateBonusNumber(userInput, winLottos)) {
        Console.close();
      }
      this.#bonusNumbers = +userInput;
    });
  }
}

const winNumbers = new Win();
const bonusNumbers = new Bonus();

module.exports = {
  winNumbers,
  bonusNumbers,
};
