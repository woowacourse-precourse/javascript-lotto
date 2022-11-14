const MissionUtils = require("@woowacourse/mission-utils");
const { QUESTION } = require("./constants/constants");

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
      this.#bonusNum = parseInt(input);
    });
    MissionUtils.Console.close();
  }

  changeNumArray(string) {
    const array = string.split(",");
    const numberArray = [];
    array.map((number) => {
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
