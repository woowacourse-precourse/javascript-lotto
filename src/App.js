const { Console } = require('@woowacourse/mission-utils');
const User = require('./User');
const {
  CMM_INPUT_MONEY,
  CMM_INPUT_WINNING,
  CMM_INPUT_BONUS,
  ERR_SPLIT_SIX,
  ERR_NOT_NUM,
  ERR_WINNING_DUP,
  ERR_BONIUS_DUP,
} = require('./Constants');

class App {
  #user;
  #winningNumList;
  #bonusNum;

  showResult() {
    const result = this.#user.checkRankWithUserLottos(this.#winningNumList, this.#bonusNum);
    console.log(result);
  }

  askBonusNum() {
    Console.readLine(CMM_INPUT_BONUS, (input) => {
      this.#bonusNum = this.validateBonusInput(input);
      this.showResult();
      Console.close();
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
    const splitedInput = winningInput.split(',').map((el) => parseInt(el));
    const numSet = new Set(splitedInput);

    if (splitedInput.length !== 6) {
      throw new Error(ERR_SPLIT_SIX);
    }
    splitedInput.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(ERR_NOT_NUM);
      }
    });
    if (numSet.size !== 6) {
      throw new Error(ERR_WINNING_DUP);
    }
    return splitedInput;
  }

  validateBonusInput(bonusInput) {
    if (bonusInput < 1 || bonusInput > 45) {
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
