const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require("./constants/index");
const { throwError } = require("./utils/index");

const Validator = require("./Validator");

const initialState = {
  money: 0,
  count: 0,
};

class App {
  constructor() {
    this.state = initialState;

    this.validator = new Validator();
    this.lotto;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGE.INPUT_MONEY, (money) => {
      const isMoneyValid = this.validator.checkMoneyValid(money);

      if (isMoneyValid === false) {
        return this.error(ERROR.INPUT_MONEY);
      }

      this.state.money = money;
      this.state.count = money / 1000;

      this.generate();
    });
  }

  generate() {
    Console.print(`${this.state.count + MESSAGE.COUNT_LOTTO}`);
  }

  error(message) {
    throwError(message);
  }
}

const app = new App();
app.play();

module.exports = App;
