const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");
class App {
  #amount;

  inputPurchase() {
    Console.readLine(MESSAGE.USER_ENTER_PURCHASE, (input) => {
      this.#amount = input;
    });
  }
  play() {}
}

module.exports = App;
