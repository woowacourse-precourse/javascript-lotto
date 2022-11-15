const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Validation = require("./utils/Validation");
const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");

const validation = new Validation();
class App {
  #amount;
  #count;

  countLotto(money) {
    this.#count = money / 1000;
    Console.print(`${this.#count}` + MESSAGE.USER_BOUGHT);
  }

  inputPurchase() {
    Console.readLine(MESSAGE.USER_ENTER_PURCHASE, (money) => {
      this.#amount = money;
      if (validation.isValidateMoney(money)) this.countLotto(money);
    });
  }
  play() {
    this.inputPurchase();
  }
}

module.exports = App;
