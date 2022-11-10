const Lotto = require("./Lotto");
const LottoGame = require("./LottoGame");

class App {
  play() {}

  getUserMoney() {
    Console.readLine("구매금액을 입력해 주세요.", (money) => {
      this.userInputMoney = money;
      const lotto = new Lotto({ userInputMoney: this.userInputMoney });
    });
  }
}

module.exports = App;
