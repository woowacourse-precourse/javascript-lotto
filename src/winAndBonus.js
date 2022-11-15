const { Console } = require("@woowacourse/mission-utils");
const {
  WIN_NUMBERS_MESSAGE,
  BONUS_NUMBERS_MESSAGE,
  TOTAL_MEESAGE,
} = require("./constant/inputMessage");
const { Stats } = require("./Statistics");
const { validateWinNumbers, validateBonusNumber } = require("./validateInput");

class Win {
  #winNumbers;

  inputWinNumbers(lottos, price) {
    Console.readLine(WIN_NUMBERS_MESSAGE, (userInput) => {
      if (!validateWinNumbers(userInput)) {
        Console.close();
      }

      this.#winNumbers = userInput.split(",").map(Number);

      bonusNumbers.inputBonusNumber(lottos, this.#winNumbers, price);
    });
  }

  getNumbers() {
    return this.#winNumbers;
  }
}

class Bonus {
  #bonusNumbers;

  inputBonusNumber(lottos, winLottos, price) {
    Console.readLine(BONUS_NUMBERS_MESSAGE, (userInput) => {
      if (!validateBonusNumber(userInput, winLottos)) {
        Console.close();
      }
      this.#bonusNumbers = +userInput;
      const status = new Stats(lottos, winLottos, this.#bonusNumbers, price);
      const total = status.getResults();

      Console.print(TOTAL_MEESAGE(total));
      Console.close();
    });
  }
}

const winNumbers = new Win();
const bonusNumbers = new Bonus();

module.exports = {
  winNumbers,
  bonusNumbers,
};
