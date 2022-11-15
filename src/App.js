const { Console } = require("@woowacourse/mission-utils/");
const { MESSAGE, ERROR } = require("./constants");
const User = require("./User");
const Lotto = require("./Lotto");
const Util = require("./Util");

class App {
  #User;
  #Lotto;
  #bonusNumber;

  play() {
    const util = new Util();
    this.getPerchaseAmount();
    this.#User.createLottoList();
    this.getWinLottoNumber();
    this.getBonusNumber();
    const rankCountTable = util.getRankCount(this.#User.getLottoList(), this.#Lotto.getNumbers(), this.#bonusNumber);
    util.printRankCount(rankCountTable);
    util.printEarningRate(rankCountTable, this.#User.getMoney());
  }

  getPerchaseAmount() {
    Console.readLine(MESSAGE.GET_PERCHASE, (money) => {
      this.#User = new User(money);
      Console.close();
    })
  }

  getWinLottoNumber() {
    Console.readLine(MESSAGE.GET_WIN, (answer) => {
      if (!this.isValidWinNumberInput(answer)) {
        throw new Error(ERROR.INVALID_WIN_INPUT);
      }
      const numbers = answer.split(',').map(Number);
      this.#Lotto = new Lotto(numbers);
    })
  }

  isValidWinNumberInput(answer) {
    return (/^(\d{1,2},){5}\d{1,2}$/).test(answer);
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.GET_BONUS, (answer) => {
      this.validate(answer);
      this.#bonusNumber = answer;
    });
  }

  validate(answer) {
    this.validateNumber(answer);
    this.validateRange(answer);
    this.validateDuplicate(answer);
  }

  validateNumber(answer) {
    if(!Number(answer)) {
      throw new Error(ERROR.INVALID_BONUS_NUMBER);
    }
  }

  validateRange(answer) {
    if (answer < 1 || answer > 45) {
      throw new Error(ERROR.INVALID_BONUS_RANGE);
    }
  }

  validateDuplicate(answer) {
    const lottoList = this.#User.getLottoList();
    lottoList.forEach(lotto => {
      if(lotto.includes(answer)) {
        throw new Error(ERROR.INVALID_BONUS_DUPLICATE);
      }
    });
  }
}

module.exports = App;