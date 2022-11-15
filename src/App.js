const { Console } = require('@woowacourse/mission-utils');
const User = require('./User');
const {
  CMM_INPUT_MONEY,
  CMM_INPUT_WINNING,
  CMM_INPUT_BONUS,
  CMM_SHOW_STAT,
  ERR_SPLIT_SIX,
  ERR_NOT_NUM,
  ERR_WINNING_DUP,
  ERR_BONIUS_DUP,
  LOTTO_MIN_NUM,
  LOTTO_MAX_NUM,
} = require('./Constants');
const Rank = require('./RankEnum');

class App {
  #user;
  #winningNumList;
  #bonusNum;

  printResultMap(resultMap) {
    for (let i = Rank.length - 2; i >= 0; i--) {
      let count = 0;
      if (resultMap.has(i + 1)) {
        count = resultMap.get(i + 1);
      }
      if (Rank[i].earn > 0) {
        Console.print(`${Rank[i].comment}${count}개`);
      }
    }
  }
  showResult() {
    Console.print(CMM_SHOW_STAT);
    const resultMap = this.#user.checkRankWithUserLottos(this.#winningNumList, this.#bonusNum);
    this.printResultMap(resultMap);
    this.#user.showEarningRate();
    Console.close();
  }

  askBonusNum() {
    Console.readLine(CMM_INPUT_BONUS, (input) => {
      this.#bonusNum = this.validateBonusInput(input);
      this.showResult();
    });
  }

  askWinningNumbers() {
    Console.readLine(CMM_INPUT_WINNING, (input) => {
      this.#winningNumList = this.validateWinningInput(input);
      this.askBonusNum();
    });
  }

  play() {
    Console.readLine(CMM_INPUT_MONEY, (input) => {
      this.#user = new User(input);
      this.#user.printUsersLottos();
      this.askWinningNumbers();
    });
  }

  validateWinningInput(winningInput) {
    const splitedInput = winningInput.split(',');
    const numSet = new Set(splitedInput);
    if (splitedInput.length !== 6) {
      throw new Error(ERR_SPLIT_SIX);
    }
    if (numSet.size !== 6) {
      throw new Error(ERR_WINNING_DUP);
    }

    splitedInput.forEach((num) => {
      this.validateEachNum(num);
    });
    return splitedInput;
  }
  validateEachNum(num) {
    if (!Number.isInteger(parseInt(num)) || isNaN(num)) {
      throw new Error(ERR_NOT_NUM);
    }
    num = parseInt(num);
    if (num < 1 || num > 45) {
      throw new Error(ERR_NOT_NUM);
    }
  }

  validateBonusInput(bonusInput) {
    bonusInput = parseInt(bonusInput);
    if (!Number.isInteger(bonusInput)) {
      throw new Error(ERR_NOT_NUM);
    }
    if (bonusInput < LOTTO_MIN_NUM || bonusInput > LOTTO_MAX_NUM) {
      throw new Error(ERR_NOT_NUM);
    }
    if (this.#winningNumList.includes(parseInt(bonusInput))) {
      throw new Error(ERR_BONIUS_DUP);
    }
    return bonusInput;
  }
}

module.exports = App;

const app = new App();
app.play();
