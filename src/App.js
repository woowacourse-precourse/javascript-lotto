const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Validation = require("./utils/Validation");
const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");

const validation = new Validation();
class App {
  #amount;
  #count;
  #lotto;
  #bonus;
  #numbers = [];

  countLotto(money) {
    this.#count = money / 1000;
    Console.print(`${this.#count}` + MESSAGE.USER_BOUGHT);
  }

  inputPurchase() {
    Console.readLine(MESSAGE.USER_ENTER_PURCHASE, (money) => {
      this.#amount = money;
      if (validation.isValidateMoney(money)) this.countLotto(money);
      // this.#count = money / 1000;
    });
  }

  inputWinNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.#lotto = new Lotto(input.split(",").map((item) => parseInt(item)));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonus) => {
      this.#bonus = bonus;
    });
  }

  play() {
    this.inputPurchase();
    this.inputWinNumber();
  }
}

module.exports = App;
