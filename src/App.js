const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constant/messages');
// const Lotto = require('./Lotto');

class App {
  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGES.INPUT, (money) => {
      this.validateInputMoney(money);
      console.log(money);
    });
  }

  validateInputMoney(money) {
    const check = /^[0-9]+$/;
    if (!check.test(money))
      throw Error(ERROR_MESSAGES.INPUT_TYPE_MUST_BE_NUBMER);
  }
}

const app = new App();
app.play();

module.exports = App;
