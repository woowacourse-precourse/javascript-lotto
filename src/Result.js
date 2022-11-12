const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const {
  MESSAGE_INPUT_WINNING_NUMBERS,
  MESSAGE_INPUT_BONUS_NUMBER,
} = require("./constants");
const Lotto = require("./Lotto");

class Result {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lotto = null;
  }

  setWinningNumbers() {
    Console.readLine(MESSAGE_INPUT_WINNING_NUMBERS, (winningNumbers) => {
      let numbersArray = winningNumbers.split(",");
      console.log(numbersArray);
      this.lotto = new Lotto(numbersArray);
      this.winningNumbers = numbersArray;
      this.setBonusNumber(winningNumbers);
    });
  }

  setBonusNumber(winningNumbers) {
    Console.readLine(MESSAGE_INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.lotto.bonusValidate(winningNumbers, bonusNumber);
      this.bonusNumber = bonusNumber;
    });
  }
}

module.exports = Result;
