const { Console } = require("@woowacourse/mission-utils");
const { CONSOLE } = require("./constants");
const LottoGenerator = require("./LottoGenerator");
const ValidationCheck = require("./util/ValidationCheck");

class App {
  #money;
  #lottoSet;

  play() {
    this.insertMoney();
  }

  insertMoney() {
    Console.readLine(CONSOLE.PURCHASE_MONEY_INPUT + "\n", (input) => {
      ValidationCheck.purchaseMoney(input);
      this.#money = Number(input);
      this.buyLotto(input);
    });
  }

  buyLotto(money) {
    const lottoSet = new LottoGenerator(money);
    this.#lottoSet = lottoSet.play();
  }
}

module.exports = App;
