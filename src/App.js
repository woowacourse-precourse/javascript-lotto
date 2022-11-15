const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");
class App {
  #amount;
  #count;

  inputPurchase() {
    Console.readLine(MESSAGE.USER_ENTER_PURCHASE, (input) => {
      this.#amount = input;
      if (this.#amount % 1000 === 0) this.#count = input / 1000;
    });
  }
  play() {}
}

module.exports = App;
