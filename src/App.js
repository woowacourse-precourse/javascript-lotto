const { Console, Random } = require("@woowacourse/mission-utils/");
const User = require("./User")
const Lotto = require("./Lotto")

class App {
  #User;
  #Lotto;
  #bonusNumber;

  play() {
    this.getPerchaseAmount();
    this.#User.createLottoList();
    this.getWinLottoNumber();
    this.getBonusNumber();
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
      this.#bonusNumber = answer;
    })
  }
}

module.exports = App;