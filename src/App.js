const { Console } = require('@woowacourse/mission-utils');
const { checkMoneyValidation } = require('./utils/validations');

class App {
  play() {
    this.buyLotteryTicket();
  }

  buyLotteryTicket() {
    Console.readLine('구입금액을 입력해 주세요.', (moneyInput) => {
      checkMoneyValidation(moneyInput);
      Console.close();
    });
  }
}

module.exports = App;
