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
  }

  setWinningNumbers() {
    Console.readLine(MESSAGE_INPUT_WINNING_NUMBERS, (winningNumbers) => {
      let numbersArray = winningNumbers.split(",").trim();
      console.log(numbersArray);
      new Lotto(numbersArray);
      this.winningNumbers = numbersArray;
    });
  }

  setBonusNumber() {
    Console.readLine(MESSAGE_INPUT_BONUS_NUMBER, (bonusNumber) => {
      Lotto.rangeValidate(bonusNumber);
      this.bonusNumber = bonusNumber;
    });
  }
}
