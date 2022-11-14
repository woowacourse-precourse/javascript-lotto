const MissionUtils = require("@woowacourse/mission-utils");
const { QUESTION, ERR_MSG } = require("./constants/constants");
const Lotto = require("./Lotto");

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
    this.#winningNum = new Lotto(winningNum).getNumber();
  }

  setBonusNum() {
    let bonusNum = 0;
    MissionUtils.Console.readLine(QUESTION.setBonusNum, (input) => {
      bonusNum = input;
    });
    MissionUtils.Console.close();
    this.validNum(bonusNum);
    this.validBonusNum(bonusNum);
    this.#bonusNum = parseInt(bonusNum);
  }

  validNum(value) {
    if (isNaN(+value)) {
      throw new Error(ERR_MSG.notNumber);
    }
    if (!(value >= 1 && value <= 45)) {
      throw new Error(ERR_MSG.notLottoRange);
    }
  }

  validBonusNum(value) {
    if (this.#winningNum.includes(parseInt(value))) {
      throw new Error(ERR_MSG.notUniqueNumber);
    }
  }

  changeNumArray(string) {
    const array = string.split(",");
    const numberArray = [];
    array.map((number) => {
      this.validNum(number);
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
