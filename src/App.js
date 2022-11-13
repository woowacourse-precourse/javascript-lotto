const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require("./constants/index");
const { throwError } = require("./utils/index");

const Validator = require("./Validator");

const initialState = {
  money: 0,
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
    });
  }

  error(message) {
    throwError(message);
  }
}

const app = new App();
app.play();

module.exports = App;
