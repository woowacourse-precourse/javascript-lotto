const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("../constants/constants");

class WinningNumbers {
  static #numbers;

  static get winningNumbers() {
    return WinningNumbers.#numbers;
  }

  static refineWinningNumbers = (winningNumbers) => {
    if (winningNumbers.includes(","))
      return winningNumbers.split(",").map(Number);
    else return winningNumbers.split("").map(Number);
  };

  static validateWinningNumbers = (numbersArr) => {
    //TODO:
  };

  static setWinningNumbers = (numbersArr) => {
    WinningNumbers.#numbers = numbersArr;
  };
}

module.exports = WinningNumbers;
