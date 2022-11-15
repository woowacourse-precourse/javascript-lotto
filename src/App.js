const { Console, Random } = require("@woowacourse/mission-utils/");
const User = require("./User")
const Lotto = require("./Lotto");
const Util = require("./Util");
const { lookup } = require("dns");

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
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#User = new User(money);
      Console.close();
    })
  }

  getWinLottoNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.', (answer) => {
      if (!this.isValidWinNumberInput(answer)) {
        throw new Error("[ERROR] 로또 번호는 쉼표로 구분된 6개의 수를 입력해야 합니다.");
      }
      const numbers = answer.split(',').map(Number);
      this.#Lotto = new Lotto(numbers);
    })
  }

  isValidWinNumberInput(answer) {
    return (/^(\d{1,2},){5}\d{1,2}$/).test(answer);
  }

  getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (answer) => {
      if (!this.isValidBonusNumberInput(answer)) {
        throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복되지 않는 1과 45 사이의 수여야 합니다.");
      }
      this.#bonusNumber = answer;
    })
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