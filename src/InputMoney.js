const {
  CONSOLE_UTIL,
  THOUSAND,
  ERROR_MESSAGES,
  INPUT_MONEY_MESSAGE,
} = require("./Constants");

const { NOT_MULTIPLES_OF_THOUSAND } = ERROR_MESSAGES;

class InputMoney {
  constructor() {
    this.userMoney = 0;
  }

  buyLotteryTickets() {
    CONSOLE_UTIL.readLine(INPUT_MONEY_MESSAGE, (userMoney) => {
      this.vaildateMoney(userMoney);
    });
  }

  vaildateMoney(userMoney) {
    if (userMoney % THOUSAND !== 0 || userMoney < THOUSAND) {
      throw new Error(NOT_MULTIPLES_OF_THOUSAND);
    }
    this.userMoney = userMoney;
  }
}

module.exports = InputMoney;
