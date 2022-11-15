const { Console, Random } = require("@woowacourse/mission-utils/");
const User = require("./User")

class App {
  #User;
  #Lotto;

  play() {
    this.getPerchaseAmount();
    this.#User.createLottoList();
    this.getWinLottoNumber();
  }

  getPerchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#User = new User(money);
      Console.close();
    })
  }

  getWinLottoNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.', (answer) => {
      const numbers = answer.split(',').map(Number);
      this.#Lotto = new this.#Lotto(numbers)
    })
  }

}

module.exports = App;