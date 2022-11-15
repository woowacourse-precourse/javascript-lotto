const { Console, Random } = require("@woowacourse/mission-utils/");
const User = require("./User")

class App {
  #User;

  play() {
    this.getPerchaseAmount();
    this.#User.createLottoList();
  }

  getPerchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#User = new User(money);
      Console.close();
    })
  }

}

module.exports = App;