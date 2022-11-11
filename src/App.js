const { Console } = require("@woowacourse/mission-utils");
const Exception = require("./error/exception");
const PurchaseError = require("./error/purchase");
const WinNumberError = require("./error/winNumber");
const ChangeLotto = require("./ChangeLotto");
const Lotto = require("./Lotto");
const BonusNumber = require("./error/bonusNumber");

const { COMMAND } = require("./utils/constant");

class App {
  #exception;

  constructor() {
    this.Lotto = new Lotto();
    this.#exception = new Exception();
    this.changeLotto = new ChangeLotto();
    this.input = 0;
    this.winNumber = [];
    this.bonusNumber = 0;
  }

  print(message) {
    Console.print(message);
  }

  askWinNumber() {
    Console.readLine(`\n${COMMAND.WIN}\n`, (input) => {
      this.#exception.isAllow(new WinNumberError(input));
      this.winNumber = input.split(",");
      this.askBonusNumber();
    });
  }

  askBonusNumber() {
    Console.readLine(`\n${COMMAND.BONUS}\n`, (input) => {
      this.#exception.isAllow(new BonusNumber(input), this.winNumber);
      this.bonusNumber = input;
    });
  }

  play() {
    Console.readLine(`${COMMAND.BUY}\n`, (input) => {
      this.#exception.isAllow(new PurchaseError(input));
      this.input = input;
      this.changeLotto.change(this.input);
      this.askWinNumber();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
