const MissionUtils = require("@woowacourse/mission-utils");
const { QUESTION, ERR_MSG } = require("./constants/constants");

class LotteryMachine {
  #winningNum;
  #bonusNum;

  draw() {
    this.setWinningNum();
    this.setBonusNum();
  }

  setWinningNum() {
    let winningNum = [];
    MissionUtils.Console.readLine(QUESTION.setWinningNum, (input) => {
      winningNum = this.changeNumArray(input);
    });
    MissionUtils.Console.close();
    this.#winningNum = winningNum;
  }

  setBonusNum() {
    MissionUtils.Console.readLine(QUESTION.setBonusNum, (input) => {
      isNumber(input);
      this.#bonusNum = parseInt(input);
    });
    MissionUtils.Console.close();
  }

  isNumber(value) {
    if (isNaN(+value)) {
      throw new Error(ERR_MSG.notNumber);
    }
  }

  changeNumArray(string) {
    const array = string.split(",");
    const numberArray = [];
    array.map((number) => {
      isNumber(number);
      numberArray.push(parseInt(number));
    });
    return numberArray;
  }

  getWinningNum() {
    return this.#winningNum;
  }

  getBonusNum() {
    return this.#bonusNum;
  }
}

module.exports = LotteryMachine;
