const { Console } = require('@woowacourse/mission-utils');
const User = require('./User');
const { checkMoneyValidation } = require('./utils/validations');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (moneyInput) => {
      checkMoneyValidation(moneyInput);
      this.user.buyTickets(moneyInput);
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
