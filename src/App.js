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
      if (!this.isValidBonusNumberInput(answer)) {
        throw new Error(ERROR.INVALID_BONUS_INPUT);
      }
      this.#bonusNumber = answer;
    });
  }

  isValidBonusNumberInput(answer) {
    if (!Number(answer)) {
      return false;
    }
    if (answer < 1 || answer > 45) {
      return false;
    }
    const lottoList = this.#User.getLottoList();
    lottoList.forEach(lotto => {
      if(lotto.includes(answer)) {
        return false;
      }
    });
    return true;
  }
}

module.exports = App;